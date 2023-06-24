import Header from "../../partials/Navbar";
import Footer from "../../partials/Footer";
import Container from "react-bootstrap/Container";
import {Card, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import axios from 'axios';

function Login() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginSubmit = () => {

        axios.post('http://test.test/api/register',{
            name: name,
            email: email,
            password: password
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <>
            <Header/>
            <Container className={'d-flex justify-content-center mt-5'}>
                <Card style={{ width: '35rem' }}>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Card.Text>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
                                </Form.Group>
                                <Button onClick={loginSubmit}>Login</Button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Footer/>
        </>
    )
}

export default Login;