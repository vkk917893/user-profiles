import React, { useState } from "react";
import { Container, Card, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.css";
import edituser from "../../redux/actions/editUser";

const Profile = ({ handleClose }) => {
  const user = useSelector((state) => state.users.activeUser);

  if (!user?.id) {
    handleClose()
  }
  const dispatch = useDispatch();

  const [isEditPhone, setEditPhone] = useState(false);
  const [isEditWebsite, setEditWebsite] = useState(false);
  const [isEditEmail, setEditEmail] = useState(false);
  let EditedUser = user;
  return user.id ? (
    <Container>
      <div className="profileContent">
        <img
          className="profileContentImage"
          src={`https://avatars.dicebear.com/api/male/${user.id}.svg`}
          alt=""
        ></img>
        <Card className="userProfileDetails">
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <FontAwesomeIcon icon={faEnvelope} color="steelblue" size="lg" />{" "}
              {isEditEmail ? (
                <input
                  id="email"
                  type="text"
                  className="edit-profile-input"
                  name="email"
                  placeholder={user.email}
                  onChange={(event) => {
                    EditedUser.email = event.target.value;
                  }}
                ></input>
              ) : (
                user.email
              )}
              <Button
                variant={isEditEmail ? "success" : "secondary"}
                className="edit-btn btn-sm"
                onClick={() => {
                  isEditEmail
                    ? dispatch(edituser(EditedUser))
                    : setEditEmail(true);
                  setEditEmail(!isEditEmail);
                }}
              >
                {isEditEmail ? "Submit" : "Edit"}
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon
                icon={faPhoneVolume}
                color="steelblue"
                size="lg"
              />{" "}
              {isEditPhone ? (
                <input
                  id="phone"
                  type="text"
                  className="edit-profile-input"
                  name="phone"
                  placeholder={user.phone}
                  onChange={(event) => {
                    EditedUser.phone = event.target.value;
                  }}
                ></input>
              ) : (
                user.phone
              )}
              <Button
                variant={isEditPhone ? "success" : "secondary"}
                className="edit-btn btn-sm"
                onClick={() => {
                  isEditPhone
                    ? dispatch(edituser(EditedUser))
                    : setEditPhone(true);
                  setEditPhone(!isEditPhone);
                }}
              >
                {isEditPhone ? "Submit" : "Edit"}
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faGlobe} color="steelblue" size="lg" />{" "}
              {isEditWebsite ? (
                <input
                  id="website"
                  type="text"
                  className="edit-profile-input"
                  name="website"
                  placeholder={user.website}
                  onChange={(event) => {
                    EditedUser = event.target.value;
                  }}
                ></input>
              ) : (
                user.website
              )}
              <Button
                variant={isEditWebsite ? "success" : "secondary"}
                className="edit-btn btn-sm"
                onClick={() => {
                  isEditWebsite
                    ? dispatch(edituser(EditedUser))
                    : setEditWebsite(true);
                  setEditWebsite(!isEditWebsite);
                }}
              >
                {isEditWebsite ? "Submit" : "Edit"}
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                variant="primary"
                className="userCardButton"
                // onClick={() => history.push("/")}
                onClick={handleClose}
              >
                Back to Home
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </Container>
  ) : null;
};

export default Profile;
