import "./Header.css"
import profile from "../../assets/images/profile.jpg"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Header() {
    return (
        <div className="mt-5">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} className="text-center">
                        <Image src={profile} roundedCircle />
                        <p className="mt-4">بچه های مسجد</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;