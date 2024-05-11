import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaLanguage } from 'react-icons/fa';
import { RiMapPinLine } from 'react-icons/ri';

function TopNavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '54px' }}
                >
                    <RiMapPinLine />
                    <Form.Select aria-label="Select the city">
                        <option value="Tashkent">Tashkent</option>
                        <option value="Namangan">Namangan</option>
                        <option value="Samarqand">Samarqand</option>
                        <option value="New York">New York</option>
                    </Form.Select>
                </Nav>
                <Nav className="d-flex">

                    <FaLanguage />
                    <Form.Select aria-label="Select the language">
                        <option value="O'zbekcha">O'zbekcha</option>
                        <option value="English">English</option>
                        <option value="Russian">Russian</option>
                    </Form.Select>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default TopNavbarComponent;