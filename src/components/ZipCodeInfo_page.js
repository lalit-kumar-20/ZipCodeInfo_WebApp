import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Location_details from "./location_details";
import LoaderSpinner from "./loader_spinner";
import ErrorMessage from "./errorMessage";
import style from "./ZipCode.styles";
const ZipCodeInfo_page = () => {
  const [zipCode, setZipcode] = useState("");
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [list, setList] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  async function fetchData(zipCode) {
    try {
      // api.zippopotam.us/{country}/{pincode}
      const response = await fetch(`https://api.zippopotam.us/in/${zipCode}`);
      if (response.status === 200) {
        const data = await response.json();
        setLoading(false);
        setInfo(data);
        setList(true);
        console.log(data);
      } else {
        setLoading(false);
        setErrorMessage(true);
      }
    } catch (error) {
      setErrorMessage(true);
      console.log("error");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData(zipCode);
    setZipcode("");
  };
  const clear = (e) => {
    e.preventDefault();
    setList(false);
    setErrorMessage(false);
  };

  return (
    <div style={style.BoxStyle}>
      <Container>
        <Row>
          {list === false && (
            <Col style={style.RectangularCard}>
              <h1 style={style.headingStyle}>Enter Your Pin Code</h1>
              <form onSubmit={handleSubmit}>
                <div style={style.inputStyle}>
                  <input
                    type="text"
                    className="form-control"
                    maxLength={6}
                    value={zipCode}
                    onChange={(e) => {
                      setZipcode(e.target.value);
                      setErrorMessage(false);
                      setList(false);
                    }}
                    placeholder="Enter your Zip code"
                    required
                  />
                  <small className="form-text text-muted">
                    Please Enter the correct Zip code for getting result.
                  </small>
                </div>
                <button
                  style={style.SubmitButtonStyle}
                  type="submit"
                  className="btn btn-secondary"
                >
                  Submit
                </button>
              </form>
              {errorMessage && (
                <Button
                  style={style.Clear2ButtonStyle}
                  onClick={clear}
                >
                  Clear
                </Button>
              )}
            </Col>
          )}
          {errorMessage && <ErrorMessage />}
          {loading && <LoaderSpinner />}

          {list && (
            <Col>
              <Location_details data={info} />
              <Button style={style.ClearButtonStyle} onClick={clear}>
                Clear
              </Button>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ZipCodeInfo_page;
