import React from "react";
import removeUser from "../../redux/actions/removeUser";
import { Card, Button, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import "./UserCard.css";

const UserCard = ({ name, id, imgSrc, email, phone, website, onSelect }) => {
  const dispatch = useDispatch();

  const handleDelete = (event) => {
    event.stopPropagation();
    dispatch(removeUser(id));
  };

  return (
    <Card className="userCard" onClick={() => onSelect(id)}>
      <Card.Img variant="top" src={imgSrc} alt="user" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <FontAwesomeIcon icon={faEnvelope} color="steelblue" size="lg" />{" "}
          {email}
        </ListGroup.Item>
        <ListGroup.Item>
          <FontAwesomeIcon icon={faPhoneVolume} color="steelblue" size="lg" />{" "}
          {phone}
        </ListGroup.Item>
        <ListGroup.Item>
          <FontAwesomeIcon icon={faGlobe} color="steelblue" size="lg" />{" "}
          {website}
        </ListGroup.Item>
        <ListGroup.Item>
          <Button variant="danger" onClick={(event) => handleDelete(event)}>
            Delete
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default UserCard;
