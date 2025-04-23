import "./App.css";
import Checkstatus from "./Components/Checkstatus";
import Eservices from "./Components/Eservices";
import ImageSlider from "./Components/Slider";
import Navbar from "./navbar/Navbar";
import Secondnavbar from "./navbar/Secondnavbar";

function App() {
  return (
    <>
      <Navbar />
      <Secondnavbar />
      <ImageSlider />
      <Checkstatus />
      <Eservices />
    </>
  );
}

export default App;
