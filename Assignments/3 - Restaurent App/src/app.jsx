import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
