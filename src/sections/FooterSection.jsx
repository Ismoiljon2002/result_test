import { Col, Container, Nav, NavLink, Row } from "react-bootstrap";
import './styles/FooterSection.css';
import LogoLight from '../assets/LogoLight.png'

function FooterSection() {
    return (<footer>
        <Container>
            <Row>
                <Col md={3}>
                    <img src={LogoLight} alt="+ Med Yordam" className="mb-4" />
                    <p>Консультация от врачей</p>
                </Col>
                <Col md={3}>
                    <p>Каталог услуг</p>
                    <Nav>

                        <NavLink href="#">Медицинская консультация</NavLink>
                        <NavLink href="#">Справочник лекарств</NavLink>
                        <NavLink href="#">Справочник болезней</NavLink>
                        <NavLink href="#">Справочник лекарств</NavLink>
                        <NavLink href="#">Справочник Врачей и Клиник</NavLink>
                    </Nav>
                </Col>
                <Col md={3}>
                    <p>Выполнить</p>
                    <Nav>
                        <NavLink href="#">Задать вопрос</NavLink>
                        <NavLink href="#">Лучшие консультанты</NavLink>
                        <NavLink href="#">Популярные вопросы</NavLink>
                        <NavLink href="#">Регистрация</NavLink>
                        <NavLink href="#">Вход в личный кабинет</NavLink>
                    </Nav>
                </Col>
                <Col md={3}>
                    <p>Проект</p>
                    <Nav>
                        <NavLink href="#">Информация о проекте</NavLink>
                        <NavLink href="#">Сотрудничество</NavLink>
                        <NavLink href="#">Контакты для связи</NavLink>
                    </Nav>
                </Col>
            </Row>
            <div className="credentials">
                <Row>
                    <Col md={4}>
                        <p>MedYordam 2024 - Все права защищены</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <p>Обработка данных</p>
                    </Col>
                    <Col md={4} className="text-right">
                        <p>Условия использования</p>
                    </Col>
                </Row>
            </div>
        </Container>
    </footer>);
}

export default FooterSection;