import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import products from "../assets/fake-data/products.js";
import { Link } from "react-router-dom";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";

import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
 

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);


  return (
    <Helmet title="All-Foods">
                    <div className="blind_box_order1">
                <p>Blind Box Order</p>
                <Link to = '/checkout'><button>Order for One</button></Link>
                <Link to = '/checkout'><button>Order for Two</button></Link>
                <Link to = '/checkout'><button>Order for Three</button></Link>
                <Link to = '/checkout'><button>Order for Four</button></Link>

              </div>

              <div className="history_order1">
                <h4>Retrieve Order</h4>
                <div className="history_list1">
                  <div className="listitem1">
                    <p>Sample Restaurant</p>
                    <p>Order Number: 8888888</p>
                    <p>Address: 111 Address Road</p>
                    <p>Jan 1, 2030</p>
                    <p>Status: Compoleted</p>


                    <div className="history_dishes1">
                      <p>1       Sample Dishes #1      $9.99</p>
                      <p>2       Sample Dishes #2      $9.99</p>
                      <p>3       Sample Dishes #3      $9.99</p>
                      <p>Tax:                          $9.99</p>
                      <p>Total(Aud):                   $99.99</p>
                    </div>

                    <div className="button_choice1">
                    <Link to = '/checkout'><button>Same Order Again</button></Link>
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
                    </div>
                  </div>
                </div>
                ...
              </div>
      <CommonSection title="All Foods" />
      <section >
        <Container>
          <Row className="menu" >
            <Col lg="12" className="text-center">
              <h2>Foods at Sonimod</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (

              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default AllFoods;
