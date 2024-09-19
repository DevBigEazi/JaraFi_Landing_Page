import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { images } from "../constants";
import toast from "react-hot-toast";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [success, setSuccess] = useState("");
  const [existingEmails, setExistingEmails] = useState([]);
  const sheetdbapi = import.meta.env.VITE_SHEET_DB;

  const handleOpenModal = () => {
    window.document.body.classList.add("overflow-hidden");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    window.document.body.classList.remove("overflow-hidden");

    setIsModalOpen(false);
    setSubmitError(null);
  };

  useEffect(() => {
    // This useEffect hook fetches existing email addresses from a SheetDB API when the component mounts.
    // Its purpose is to prevent duplicate email submissions to the waitlist.
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `https://sheetdb.io/api/v1/${sheetdbapi}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const emails = data.map((item) => item.email).filter(Boolean);
        setExistingEmails(emails);
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };
    handleFetch();
  }, [sheetdbapi]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(e.target);
    const name = formData.get("fullName");
    const email = formData.get("email");

    if (existingEmails.includes(email)) {
      setSubmitError("Email is already on wait list");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`https://sheetdb.io/api/v1/${sheetdbapi}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              name: name,
              email: email,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      handleCloseModal();
      setSuccess("You have been added to wait list successfully");
      toast.success("Thanks for joining our wait list we'll keep you updated");
    } catch (error) {
      console.error("Error:", error);
      setSubmitError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-linen pt-28  max-sm:pt-16 flex max-md:flex-col items-center justify-between max-md:gap-y-9">
      <div className="flex flex-col gap-x-4 w-full max-sm:px-3.5 pl-4">
        <div className="space-y-2 ">
          <h1 className="max-sm:text-3xl text-primary max-2xl:text-4xl font-bold font-MerriweatherSans">
            Corem ipsum dolor sit amet, consectetur.
          </h1>
          <p className="text-xl font-normal text-primary font-montserrat">
            Corem ipsum dolor sit amet, consectetur. Corem ipsum dolor sit amet,
            consectetur.
          </p>
        </div>
        {success ? (
          <p className="text-base mt-2 italic text-green-600">{success}</p>
        ) : (
          <button
            onClick={handleOpenModal}
            className="self-start mt-2 sm:mt-4 h-11 max-sm:w-full text-center border border-primary transition-all duration-500 hover:bg-whitesmoke rounded-lg text-primary text-base max-sm:text-center font-montserrat font-normal items-center py-3 px-7 "
          >
            Join waitlist here
          </button>
        )}
      </div>

      <div className="w-full ">
        <img
          className="max-md:hidden w-full h-auto object-cover"
          src={images.heroDesktop}
          alt="hero"
        />
        <img
          className="max-md:block hidden w-full h-auto object-cover"
          src={images.heroMobile}
          alt="hero"
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        submitError={submitError}
      />
    </section>
  );
};

export default Hero;
