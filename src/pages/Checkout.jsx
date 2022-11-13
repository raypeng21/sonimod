import React from "react";
import { Container, Row } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import map from "../assets/images/map.png"
import "../styles/checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {

  return (
    <Helmet title="Checkout">
      <CommonSection title="Your Order is 2.1 KM Rushing to you" />
      <section>
        <Container>
          <Row>
            <img src={map} alt="" />
          </Row>
          <Row>
            <div className="bottompart">
            <Link to ='/historyOrder'>
              <button>Back to View</button>
            </Link>

            </div>

          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
