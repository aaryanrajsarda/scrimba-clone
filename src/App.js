import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Frontend from "./Frontend";
import PopularCourses from "./PopularCourses";

function App() {
  return (
    <div className="App">
      <Header />
      <PopularCourses />
      <Frontend />
      <Footer />
    </div>
  );
}

export default App;
