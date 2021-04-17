import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import PopularCourses from "./PopularCourses";
import MainJumbotron from "./MainJumbotron";
import Discord from "./Discord";
import AboutUs from "./AboutUs";
import Founders from "./Founders";
import Freebies from "./Freebies";
import Bootcamps from "./Bootcamps";
import Vue from "./Vue";
import ReactSection from "./ReactSection";
import CSS from "./CSS";
import HTML from "./HTML";
import NewToCoding from "./NewToCoding";
import JavaScript from "./JavaScript";
import ComputerScience from "./ComputerScience";

function App() {
  return (
    <div className="App">
      <Header />
      <MainJumbotron />
      <PopularCourses />
      <Bootcamps />
      <Freebies />
      <NewToCoding />
      <CSS />
      <JavaScript />
      <ReactSection />
      <HTML />
      <ComputerScience />
      <Vue />
      <Discord />
      <AboutUs />
      <Founders />
      <Footer />
    </div>
  );
}

export default App;
