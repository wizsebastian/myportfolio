import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import Image from "../../components/image"
import { HomePageContainer } from "../pagesStyles"
import { ActionButton } from "../../components/components-styles"
import Bar from "../../assets/assets-bar.png"

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col lg="6">
              <HomePageContainer>
                <h2>
                  Hi, <br /> Soy Luis Vasquez
                </h2>
                <p>Frontend Developer Engineer</p>
                <h3>Try to make it Simple</h3>
              </HomePageContainer>
              <ActionButton>Know about me</ActionButton>
            </Col>
            <Col lg="6">
              {" "}
              <Image image="mylogo.png" />
            </Col>
          </Row>
        </Container>
        <img src={Bar} alt="bar" />
      </>
    )
  }
}
