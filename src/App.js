import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Frontend from "./Frontend";
import PopularCourses from "./PopularCourses";
import MainJumbotron from "./MainJumbotron";
import Discord from "./Discord";

function App() {
  return (
    <div className="App">
      <Header />
      <MainJumbotron />
      <PopularCourses />
      <Frontend />
      <Discord />
      <Footer />
    </div>
  );
}

export default App;
