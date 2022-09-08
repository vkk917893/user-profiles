import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Card, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import addUser from "../../redux/actions/addUser";
import "./AddUser.css";

const AddUser = ({ handleClose }) => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(() =>
    Math.floor(Math.random() * 100000)
  );
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState(false);

  const handleAddUser = () => {
    if (userName) {
      const newUserData = {
        id: userId,
        name: userName,
        email: email,
        phone: phone,
        website: website,
      };
      dispatch(addUser(newUserData));
      handleClose();
    } else {
      setError(true);
    }
  };

  const handleUpdateUserName = (value) => {
    setUserName(value);
    setError(false);
  };

  return (
    <Container>
      <div className="addUserContent">
        <div className="addUserImage">
          <p>
            Below is your avatar <FontAwesomeIcon icon={faSmile} />
          </p>
          <img
            className="profileContentImage"
            src={`https://avatars.dicebear.com/api/male/${userId}.svg`}
            alt="avatar"
          ></img>
        </div>

        <Card className="addUserDetails">
          <Form>
            {error && (
              <p className="addUserDetailsError">Name cannot be empty</p>
            )}
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="test"
                placeholder="Full name"
                value={userName}
                onChange={(val) => handleUpdateUserName(val.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(val) => setEmail(val.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="9876543211"
                value={phone}
                onChange={(val) => setPhone(val.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="test"
                placeholder="www.xyz.com"
                value={website}
                onChange={(val) => setWebsite(val.target.value)}
              />
            </Form.Group>
          </Form>
          <Button variant="primary" onClick={handleAddUser}>
            Add User
          </Button>
        </Card>
      </div>
    </Container>
  );
};

export default AddUser;
