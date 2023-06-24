import ListGroup from "react-bootstrap/ListGroup";

function ListedData({ listed, setListed, checked, setChecked }) {
  const handleCheck = (event) => {
    let updatedList = [...checked];
    let updatedListedList = [...listed];

    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
      updatedListedList.splice(listed.indexOf(event.target.value), 1);
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }

    setChecked(updatedList);
    setListed(updatedListedList);
  };

  return (
    <>
      <p>Listed Datas</p>
      <div className="list-container">
        {listed.map((data, index) => (
          <ListGroup.Item as="li">
            <input
              value={data}
              checked={checked.includes(data) ? "checked" : ""}
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

export default ListedData;
