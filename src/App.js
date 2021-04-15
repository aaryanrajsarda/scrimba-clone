import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Frontend from "./Frontend";
import PopularCourses from "./PopularCourses";
import MainJumbotron from "./MainJumbotron";
import Discord from "./Discord";
import AboutUs from "./AboutUs";
import Founders from "./Founders";

function App() {
  return (
    <div className="App">
      <Header />
      <MainJumbotron />
      <PopularCourses />
      <Frontend />
      <Discord />
      <AboutUs />
      <Founders />
      <Footer />
    </div>
  );
}

export default App;
