import React from "react";
import { Button, Card, CardBody, CardTitle, CardText } from "reactstrap";
import { useNavigate } from "react-router-dom";
import profile from "../images/profile.jpg";
import "../style.scss";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-bg">
      <Card className="mini-card">
        <CardBody className="card-body-custom">
          <CardTitle tag="h3" className="title-gradient">webpack</CardTitle>
          <CardText className="desc">Chào bạn</CardText>
          <img src={profile} alt="Profile" className="avatar" />
          <Button color="primary" className="small-btn" onClick={() => navigate("/contact")}>
           Hãy liên hệ cho tôi
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
