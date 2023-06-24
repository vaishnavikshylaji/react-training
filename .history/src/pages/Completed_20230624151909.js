import ListGroup from "react-bootstrap/ListGroup";

function Completed({ checked, setChecked, listed, setListed }) {
  const handleCheck = (event, index) => {
    let updatedList = [...checked];
    let updatedListedList = [...listed];

    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
      updatedListedList.splice(index, 1);
    }

    setChecked(updatedList);
    setListed(updatedListedList);
  };

  return (
    <>
      <p>Completed List</p>
      <div className="list-container">
        {checked.map((data, index) => (
          <ListGroup.Item as="li">
            <input
              value={data}
              type={"checkbox"}
              className={"m-2"}
              onChange={handleCheck}
            />
            {data}
          </ListGroup.Item>
        ))}
      </div>
    </>
  );
}

export default Completed;
