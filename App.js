import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Col, Container, Row } from 'react-bootstrap';

function App() {

  let links = [
    {
      icon : "fa-brands fa-instagram",
      text : "اینستاگرام",
      href : "https://www.instagram.com/sedighianinfo?igsh=MTVwbzB3aGxjNGUweA=="
    },
    {
      icon : "fa-brands fa-telegram",
      text : "تلگرام",
      href : "https://t.me/bachehay_masjed"
    },
    {
      icon : "fa-solid fa-link",
      text : "ایتا",
      href : "https://eitaa.com/sedighianinfo"
    },
  ]

  return (
    <>
      <Header />
      <Container className='mt-4'>
            <Row className="d-flex justify-content-center">
                <Col md={6}>
                    {links.map( link => <Button {...link}/>)}
                </Col>
            </Row>
        </Container>
        <Footer/>
    </>
  );
}

export default App;