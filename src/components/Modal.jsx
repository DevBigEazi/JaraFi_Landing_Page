import React, { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, onSubmit, isSubmitting, submitError }) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAgreed) {
      onSubmit(e);
    }
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/10 backdrop-blur-sm z-30 transition-opacity duration-400 ${
        isClosing ? "opacity-0" : "animate-slide-in-right opacity-100"
      }`}
    >
      <div
        className={`fixed inset-0 bg-primary z-50 flex items-center max-w-[978px] max-sm:mt-14 sm:h-[493px] m-auto justify-center p-4 transition-transform duration-400 ${
          isClosing ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white text-4xl float-right"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="relative w-full max-w-md bg-primary rounded-lg shadow-lg">
          <div className="p-6">
            <h2 className="text-3xl sm:text-4xl text-white font-bold font-MerriweatherSans mb-6 text-center">
              Join our waitlist
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 font-montserrat text-white"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm sm:text-base mb-2"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  className="w-full p-3 bg-darkslateBlue border border-[#FFFFFF80] rounded-lg text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  className="w-full p-3 bg-darkslateBlue border border-[#FFFFFF80] rounded-lg text-white placeholder-gray-400"
                  required
                />
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 mr-2 w-4 h-4"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                />
                <label htmlFor="terms" className="text-xs sm:text-sm">
                  By continuing, you agree to the JaraFi Platform Terms &
                  conditions, Rewards Policy and Privacy Policy.
                </label>
              </div>
              {submitError && (
                <p className="text-red-500 text-sm">{submitError}</p>
              )}
              <button
                type="submit"
                className="w-full bg-[#F9F6F3] text-primary py-3 rounded-lg font-normal hover:bg-gray-100 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting || !isAgreed}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
