import React from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";


import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import RestaurantList from "./RestaurantList.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Home = () => {

  return (
    <Helmet title="Home">
              <div className="blind_box_order">
                <p>Blind Box Order</p>
                <Link to = '/checkout'><button>Order for One</button></Link>
                <Link to = '/checkout'><button>Order for Two</button></Link>
                <Link to = '/checkout'><button>Order for Three</button></Link>
                <Link to = '/checkout'><button>Order for Four</button></Link>


              </div>

              <div className="history_order">
                <h4>Retrieve History Order</h4>
                <div className="history_list">
                  <div className="listitem">
                    <p>Sample Restaurant</p>
                    <p>Order Number: 8888888</p>
                    <p>Address: 111 Address Road</p>
                    <p>Jan 1, 2030</p>
                    <p>Status: Compoleted</p>


                    <div className="history_dishes">
                      <p>1       Sample Dishes #1      $9.99</p>
                      <p>2       Sample Dishes #2      $9.99</p>
                      <p>3       Sample Dishes #3      $9.99</p>
                      <p>Tax:                          $9.99</p>
                      <p>Total(Aud):                   $99.99</p>
                    </div>

                    <div className="button_choice">
                    <Link to = '/checkout'><button>Same Order Again</button></Link>
                    <Link to = '/foods'><button>Order From Here</button></Link>
                    </div>
                  </div>

                  <div className="listitem">
                    <p>Sample Restaurant</p>
                    <p>Order Number: 8888888</p>
                    <p>Address: 111 Address Road</p>
                    <p>Jan 1, 2030</p>
                    <p>Status: Compoleted</p>


                    <div className="history_dishes">
                      <p>1       Sample Dishes #1      $9.99</p>
                      <p>2       Sample Dishes #2      $9.99</p>
                      <p>3       Sample Dishes #3      $9.99</p>
                      <p>Tax:                          $9.99</p>
                      <p>Total(Aud):                   $99.99</p>
                    </div>

                    <div className="button_choice">
                    <Link to = '/checkout'><button>Same Order Again</button></Link>
                    <Link to = '/foods'><button>Order From Here</button></Link>

                    </div>
                  </div>
                </div>
                ...
              </div>
      <section>
        <Container>
          <Row>
          <Col lg="1" md="1">
            </ Col>

            <Col lg="5" md="5">
              <div className="hero__content  ">
                <h5 className="mb-3">New way to order at Sonimod</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just order <br /> food with new tech
                  <br /><span> Sonimod - KM Dash</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    <Link to="/foods"> Order now </Link>

                  </button>

                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="5" md="5">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>

            <Col lg="1" md="1">
            </ Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
            <Link to="/foods">
              <RestaurantList />
              </Link>
              <Link to="/foods">
              <RestaurantList />
              </Link>
              <Link to="/foods">
              <RestaurantList />
              </Link>
              <Link to="/foods">
              <RestaurantList />
              </Link>
              <Link to="/foods">
              <RestaurantList />
              </Link>
              <Link to="/foods">
              <RestaurantList />
              </Link>
              <Link to="/foods">
              <RestaurantList />
              </Link>
              ...
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>




    </Helmet>
  );
};

export default Home;
