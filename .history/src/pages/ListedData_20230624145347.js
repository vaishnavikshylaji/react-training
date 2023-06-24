import ListGroup from "react-bootstrap/ListGroup";

function ListedData({ listed, setListed, checked, setChecked }) {
    const handleCheck = (event, index) => {
      let updatedList = [...checked];
      let updatedListedList = [...listed];
  
      if (event.target.checked) {
        updatedList = [...checked, event.target.value];
        updatedListedList.splice(index, 1);
      } else {
        // updatedList.splice(updatedList.indexOf(event.target.value), 1);
        // updatedListedList.splice(index, 0, event.target.value);
      }
  
      setChecked(updatedList);
      setListed(updatedListedList);
    };
  
    return (
      <>
        <p>Listed Datas</p>
        <div className="list-container">
          {listed.map((data, index) => (
            <ListGroup.Item as="li" key={index}>
              <input
                value={data}
                type="checkbox"
                className="m-2"
                onChange={(event) => handleCheck(event, index)}
              />
              {data}
            </ListGroup.Item>
          ))}
        </div>
      </>
    );
  }
  
  export default ListedData;
  