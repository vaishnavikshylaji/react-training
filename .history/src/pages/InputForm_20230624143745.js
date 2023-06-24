import { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm } from "react-hook-form";
u
function InputForm({ listed, setListed }) {
  const [data, setData] = useState();
  const [added, setAdded] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    addToList();
  };

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const addToList = useCallback(() => {
    let updatedList = [...listed];
    updatedList = [...listed, data];
    setListed(updatedList);
    setAdded(true);
  });

  useEffect(() => {}, [added]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup className="m-3">
          <Form.Control
            {...register("firstName", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
            placeholder="Item name"
            aria-label="Item name"
            aria-describedby="basic-addon2"
            onChange={handleChange}
            value={data}
          />
          <InputGroup.Text id="basic-addon2">
            <Button type={"submit"}>Add to list</Button>
          </InputGroup.Text>
        </InputGroup>
        {errors.firstName?.type === "required" && (
          <p role="alert" className="m-3 text-danger">
            This field is required
          </p>
        )}
      </form>
    </>
  );
}

export default InputForm;
