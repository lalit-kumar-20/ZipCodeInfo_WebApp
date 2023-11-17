import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import icon from "../Assests/error_icon.png";
import style from "./errorMessage.Style";

const errorMessage = () => {
  return (
    <div style={style.BoxStyle}>
      <Container>
        <Row>
          <Col style={style.ColStyle}>
            <img style={style.ImgStyle} src={icon} alt="error Icon" />
            <h1 style={style.HeadingStyle}>Info Not Found</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default errorMessage;
