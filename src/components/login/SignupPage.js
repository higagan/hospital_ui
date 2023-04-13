 import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function SignupPage() {
  const navigate = useNavigate();


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [type, settype] = useState('');
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, type })
      });
      if (response.ok) {
        // Handle success response
      const data = await response.json(); // Parse the response body
      const user_id = data.user_id; // Extract the user_id from the response
      console.log('Sign up success:', user_id);
      setauthenticated(true)
      localStorage.setItem("authenticated", true);
     
      navigate('/UserProfile', { state: { user_id: user_id } });


      } else {
        // Handle error response
        console.error( username, password, type)
        console.error('Sign up error:', response);
      }
    } catch (error) {
      // Handle fetch error
      console.error('Fetch error:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center">Sign Up</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Register As: </Form.Label>
              <div key={`default-radio`} className="mb-3">
                <Form.Check
                  inline
                  label="Doctor"
                  name="type"
                  type="radio"
                  id={`inline-radio-1`}
                  value="Doctor"
                  checked={type === 'doctor'}
                  onChange={(e) => settype(e.target.value)}
                />
                <Form.Check
                  inline
                  label="Hospital"
                  name="type"
                  type="radio"
                  id={`inline-radio-2`}
                  value="Hospital"
                  checked={type === 'hospital'}
                  onChange={(e) => settype(e.target.value)}
                />
              </div>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupPage;
