import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RotatingLines } from "react-loader-spinner";
import style from "./ZipCode.styles";

const loaderSpinner = () => {
  return (
    <div style={style.BoxStyle}>
      <Container>
        <Row>
          <Col style={{ marginTop: "17rem", marginLeft: "-42rem" }}>
            <div className="w-auto h-auto">
              <RotatingLines
                strokeColor="black"
                strokeWidth="6"
                animationDuration="0.8"
                width="50"
                visible={true}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default loaderSpinner;
