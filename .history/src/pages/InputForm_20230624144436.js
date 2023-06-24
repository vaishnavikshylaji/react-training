import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function InputForm({ listed, setListed }) {
  const [data, setData] = useState();

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const addToList = () => {
    console.log(listed);
    let updatedList = [...listed];
    updatedList = [...listed, data];
    setListed(updatedList);
  };

  return (
    <>
      <form>
        <InputGroup className="m-3">
          <Form.Control
            placeholder="Item name"
            aria-label="Item name"
            aria-describedby="basic-addon2"
            onChange={handleChange}
            value={data}
          />
          <InputGroup.Text id="basic-addon2">
            <Button type={"button"} onClick={addToList}>
              Add to list
            </Button>
          </InputGroup.Text>
        </InputGroup>
        {/* {errors.firstName?.type === "required" && (
          <p role="alert" className="m-3 text-danger">
            This field is required
          </p>
        )} */}
      </form>
    </>
  );
}

export default InputForm;
