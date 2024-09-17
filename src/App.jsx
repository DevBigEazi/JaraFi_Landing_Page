import Navbar from "./components/Navbar";
import { icons, images } from "./constants";
import { About, Footer, Hero, Services } from "./sections";

function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />

      {/* PLS TAKE NOTE  */}
      {/* These are instances of how to make use of the assets ... 
      This div must not be cleared. Pls leave it as it is */}
      <div>
        <img src={images.heroDesktop} alt="hero" />
        <img src={icons.fullLogoBlue} alt="logo" />
      </div>
    </main>
  );
}

export default App;
