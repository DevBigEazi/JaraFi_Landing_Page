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
    </main>
  );
}

export default App;
