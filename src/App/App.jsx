import Routes from "./Routes";
import Footer from "./../navigation/Footer/index";
import Header from "./../navigation/Header/index";

function App() {
  return (
    <>
      <Header />
      <main className="Main">
        <Routes />
      </main>
      <Footer />
    </>
  );
}

export default App;
