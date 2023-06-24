import ListGroup from "react-bootstrap/ListGroup";

function Completed({ checked, setChecked, listed, setListed }) {
  const handleCheck = (event) => {
    let updatedList = [...checked];
    let updatedListedList = [...listed];

    if (event.target.checked) {
      updatedListedList.splice(listed.indexOf(event.target.value), 1);
    } else {
      updatedListedList = [...listed, event.target.value];
      updatedList.splice(checked.indexOf(event.target.value), 1);
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
