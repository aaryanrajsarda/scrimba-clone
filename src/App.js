import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Frontend from "./Frontend";
import PopularCourses from "./PopularCourses";
import MainJumbotron from "./MainJumbotron";

function App() {
  return (
    <div className="App">
      <Header />
      <MainJumbotron />
      <PopularCourses />
      <Frontend />
      <Footer />
    </div>
  );
}

export default App;
