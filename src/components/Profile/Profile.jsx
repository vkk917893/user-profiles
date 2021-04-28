import React from "react";
import { Container, Card, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "./Profile.css";

const Profile = ({ history }) => {
  const user = useSelector((state) => state.users.activeUser);
  if (!user?.id) {
    history.push("/");
  }
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
              {user.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon
                icon={faPhoneVolume}
                color="steelblue"
                size="lg"
              />{" "}
              {user.phone}
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faGlobe} color="steelblue" size="lg" />{" "}
              {user.website}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                variant="primary"
                className="userCardButton"
                onClick={() => history.push("/")}
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
