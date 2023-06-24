import Footer from "../partials/Footer";
import Header from "../partials/Navbar";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ListedData from "./ListedData";
import InputForm from "./InputForm";
import Completed from "./Completed";
function Home() {
  var [value, setValue] = useState("initial");
  const [listed, setListed] = useState([]);
  var [checked, setChecked] = useState([]);

  function onListButtonClick() {
    setValue("listed");
  }

  function onAddButtonClick() {
    setValue("initial");
  }

  function onCheckedButtonClick() {
    setValue("checked");
  }

  function renderSwitch(value) {
    switch (value) {
      case "initial":
        return <InputForm listed={listed} setListed={setListed} />;
      case "listed":
        return (
          <ListedData
            listed={listed}
            setListed={setListed}
            checked={checked}
            setChecked={setChecked}
          />
        );
      case "checked":
        return (
          <Completed
            checked={checked}
            setChecked={setChecked}
            listed={listed}
            setListed={setListed}
          />
        );
      default:
        return <InputForm listed={listed} setListed={setListed} />;
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-4 book-div">
          <div className={value}>{renderSwitch(value)}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
