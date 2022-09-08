import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../UserCard/UserCard";
import setActiveUser from "../../redux/actions/setactiveUser";
import Modal from "../Modal/Modal";
import Profile from "../Profile/Profile";

const CardList = ({ searchValue }) => {
  const users = useSelector((state) => state.users.userData);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
  }

  const selectActive = (id) => {
    dispatch(setActiveUser(id));

    setShow(true)
  };

  const displayableUsers = users.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4}>
        {displayableUsers.map((ele) => {
          return (
            <Col key={ele.id}>
              <UserCard
                onSelect={selectActive}
                id={ele.id}
                name={ele.name}
                email={ele.email}
                phone={ele.phone}
                website={ele.website}
                imgSrc={`https://avatars.dicebear.com/api/male/${ele.id}.svg`}
              />
            </Col>
          );
        })}
      </Row>
      <Modal show={show} handleClose={handleClose} title="Edit user profiles">
        <Profile handleClose={handleClose}/>
      </Modal>
    </Container>
  );
};
export default CardList;
