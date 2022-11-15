import React from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";


import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import RestaurantList from "./RestaurantList.jsx";



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

    </Helmet>
  );
};

export default Home;
