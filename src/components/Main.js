import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormattedMessage } from "react-intl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Series from "./Series";
import BarGraphic from "./BarGraphic";

const URL_es =
  "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json";

const URL_en =
  "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json";

const Main = () => {
  const userLang = navigator.language || navigator.userLanguage;

  const [series, setSeries] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("series") !== null) {
        setSeries(JSON.parse(localStorage.getItem("series")));
      }
    } else {
      if (userLang.startsWith("es")) {
        axios.get(URL_es).then((response) => {
          setSeries(response.data);
          localStorage.setItem("series", JSON.stringify(response.data));
        });
      } else {
        axios.get(URL_en).then((response) => {
          setSeries(response.data);
          localStorage.setItem("series", JSON.stringify(response.data));
        });
      }
    }
  }, [userLang]);

  return (
    <Container>
      <h1>
        <FormattedMessage id="Series" />
      </h1>
      <Row>
        <Col xs={12}>
          <Series series={series} />
        </Col>
      </Row>
      {series !== [] ? (
        <Row>
          <h1>
            <FormattedMessage id="Seasons" />
          </h1>
          <Col xs={12}>
            <BarGraphic series={series} />
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};

export default Main;
