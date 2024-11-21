import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import PopularNews from "./components/popularNews/PopularNews";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container wrapper">
      <Main />
      <div className="aside">
        <PopularNews />
        <Form />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
