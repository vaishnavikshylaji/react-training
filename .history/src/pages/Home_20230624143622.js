import Footer from "../partials/Footer";
import Header from "../partials/Navbar";
import { useState } from "react";
import ListedData from "./ListedData";
import InputForm from "./InputForm";
import Completed from "./Completed";
function Home() {
  const [listed, setListed] = useState([]);
  var [checked, setChecked] = useState([]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-4 book-div">
          <InputForm listed={listed} setListed={setListed} />
          <ListedData
            listed={listed}
            setListed={setListed}
            checked={checked}
            setChecked={setChecked}
          />
          <Completed
            checked={checked}
            setChecked={setChecked}
            listed={listed}
            setListed={setListed}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
