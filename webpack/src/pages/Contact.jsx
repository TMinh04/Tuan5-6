import React from "react";
import { Card, CardBody } from "reactstrap";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Contact.scss";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      <Card className="contact-card shadow-lg">
        <CardBody>
          <h1 className="contact-title">Liên hệ với tôi</h1>
          <p className="contact-subtitle">
            Rất vui được kết nối với bạn 
          </p>

          <div className="contact-info">
            <p><FaPhoneAlt /> <span>+84 012345678</span></p>
            <p><FaEnvelope /> <span>thanhminh@gmail.com</span></p>
          </div>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://github.com/TMinh04/Tuan5-6" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>

          <button className="btn btn-outline-primary mt-3" onClick={() => navigate("/")}>
            Quay lại Trang chủ
          </button>
        </CardBody>
      </Card>
    </div>
  );
}
