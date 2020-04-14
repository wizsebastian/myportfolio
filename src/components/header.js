import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'reactstrap';
// import PropTypes from "prop-types"
import Logo from '../assets/mylogo.png'
import { HeaderLogo, HeaderBody , HeaderItems, HeaderContainer} from './components-styles';


const Header = ({}) => (
  <HeaderBody>
    <Container>
        <Row>
          <Col lg="3">
            <HeaderLogo>
              <Link to='/'>
                <img src={Logo} alt="Logo"/>
              </Link>
            </HeaderLogo>
          </Col>
          <Col>
            <HeaderContainer>
          <Col lg="7" lg={{offset: 4}}>
            <Row>
          <Col lg="3">
          <HeaderItems>
            <Link to="/">
            Titulo 1
            </Link>
          </HeaderItems>
          </Col>
          <Col lg="3">
          <HeaderItems>
             <Link to="/">
            Titulo 2
            </Link>
            </HeaderItems>
          </Col>
          <Col lg="3">
          <HeaderItems>
          <Link to="/">
            Titulo 3
              </Link>
            </HeaderItems>
          </Col>
          <Col lg="3">
          <HeaderItems>
          <Link to="/">
            Titulo 4
              </Link>
            </HeaderItems>
          </Col>
            </Row>

          </Col>
            </HeaderContainer>
          
          </Col>
        </Row>
     </Container>
  </HeaderBody>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
