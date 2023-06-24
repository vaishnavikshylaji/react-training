import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function Completed({ checked, setChecked, listed, setListed }) {
  const handleCheck = (event, index) => {
    let updatedList = [...listed];
    let updatedListedList = [...checked];

    if (event.target.checked) {
    //   updatedList = [...listed, event.target.value];
      updatedListedList.splice(index, 1);
    }

    setChecked(updatedListedList);
    setListed(updatedList);
  };

  return (
    <>
      {checked.length > 0 && (
        <Card>
          <Card.Header>Completed Tasks</Card.Header>
          <Card.Body>
            {/* <table class="table table-bordered"> */}
            {checked.map((data, index) => (
              <tr>
                <td>
                  <ListGroup.Item as="li">
                    <input
                      value={data}
                      type={"checkbox"}
                      className={"m-2"}
                      onChange={(event) => handleCheck(event, index)}
                    />
                    {data}
                  </ListGroup.Item>
                </td>
              </tr>
            ))}
            {/* </table> */}
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default Completed;
