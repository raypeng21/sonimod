import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import './login.css';

const Login = () => {


  return (
    <Helmet title="Login">
      <CommonSection title="History Order" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <div className="history_order00">
                <div className="history_list00">
                  <div className="listitem00">
                    <p>Sample Restaurant</p>
                    <p>Order Number: 8888888</p>
                    <p>Address: 111 Address Road</p>
                    <p>Jan 1, 2030</p>
                    <p>Status: Compoleted</p>


                    <div className="history_dishes00">
                      <p>1       Sample Dishes #1      $9.99</p>
                      <p>2       Sample Dishes #2      $9.99</p>
                      <p>3       Sample Dishes #3      $9.99</p>
                      <p>Tax:                          $9.99</p>
                      <p>Total(Aud):                   $99.99</p>
                    </div>

                    <div className="button_choice00">
                    <Link to = '/checkout'><button>Same Order Again</button></Link>
                    <Link to = '/foods'><button>Order From Here</button></Link>
                    </div>
                  </div>

                  <div className="listitem00">
                    <p>Sample Restaurant</p>
                    <p>Order Number: 8888888</p>
                    <p>Address: 111 Address Road</p>
                    <p>Jan 1, 2030</p>
                    <p>Status: Compoleted</p>


                    <div className="history_dishes00">
                      <p>1       Sample Dishes #1      $9.99</p>
                      <p>2       Sample Dishes #2      $9.99</p>
                      <p>3       Sample Dishes #3      $9.99</p>
                      <p>Tax:                          $9.99</p>
                      <p>Total(Aud):                   $99.99</p>
                    </div>

                    <div className="button_choice00">
                    <Link to = '/checkout'><button>Same Order Again</button></Link>
                    <Link to = '/foods'><button>Order From Here</button></Link>
                    </div>
                  </div>

                  <div className="listitem00">
                    <p>Sample Restaurant</p>
                    <p>Order Number: 8888888</p>
                    <p>Address: 111 Address Road</p>
                    <p>Jan 1, 2030</p>
                    <p>Status: Compoleted</p>


                    <div className="history_dishes00">
                      <p>1       Sample Dishes #1      $9.99</p>
                      <p>2       Sample Dishes #2      $9.99</p>
                      <p>3       Sample Dishes #3      $9.99</p>
                      <p>Tax:                          $9.99</p>
                      <p>Total(Aud):                   $99.99</p>
                    </div>

                    <div className="button_choice00">
                    <Link to = '/checkout'><button>Same Order Again</button></Link>
                    <Link to = '/foods'><button>Order From Here</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
