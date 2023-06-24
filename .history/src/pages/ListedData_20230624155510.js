import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function ListedData({ listed, setListed, checked, setChecked }) {
  const handleCheck = (event, index) => {
    let updatedList = [...checked];
    let updatedListedList = [...listed];

    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    //   updatedListedList.splice(index, 1);
    }

    setChecked(updatedList);
    setListed(updatedListedList);
  };

  return (
    <>
      {listed.length > 0 && (
        <Card className="mb-4">
          <Card.Header>Listed Data</Card.Header>
          <Card.Body>
            {/* <table class="table table-bordered"> */}
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
            {/* </table> */}
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default ListedData;
