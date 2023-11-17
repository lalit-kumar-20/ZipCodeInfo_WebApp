import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./ZipCode.styles";

const location_details = ({ data }) => {
  console.log("This is Data", data);
  return (
    <div style={style.BoxStyle}>
      <Container>
        <Row>
          <Col
            style={{
              marginTop: "-1rem",
              marginLeft: "12rem",
              marginRight:"10rem",
              height: "55rem",
              color: "black",
              backgroundColor: "white",
            }}
          >
            <h2 style={style.headingStyle}>Zip Code Information</h2>
            <p style={{ marginTop:"2rem",marginLeft: "18.5rem", fontSize: "1.5rem" }}>
              <strong>Country:</strong> {data["country"]}
            </p>
            <p
              style={{
                justifyContent: "center",
                display: "flex",
                fontSize: "1.5rem",
              }}
            >
              <strong>Country Abbreviation:</strong>{" "}
              {data["country abbreviation"]}
            </p>

            <h3>Places:</h3>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Place Name</th>
                  <th>State</th>
                  <th>State Abbreviation</th>
                  <th>Longitude</th>
                  <th>Latitude</th>
                </tr>
              </thead>
              <tbody>
                {data["places"].slice(0, 12).map((place, index) => (
                  <tr key={index}>
                    <td>{place["place name"]}</td>
                    <td>{place["state"]}</td>
                    <td>{place["state abbreviation"]}</td>
                    <td>{place["longitude"]}</td>
                    <td>{place["latitude"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default location_details;
