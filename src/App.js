import "./App.css";
import Navbar from "./components/Navbaar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/particles";
import ZipCodeInfo_page from "./components/ZipCodeInfo_page"
function App() {
  return (
    <>

        <ParticleBackground />
        <Navbar />
        <ZipCodeInfo_page/>
        <Footer />
     
    </>
  );
}

export default App;
