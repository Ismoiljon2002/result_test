import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { FaFileAlt, FaRegQuestionCircle, FaRegStar } from 'react-icons/fa';
import HeaderFeatureCard from '../components/HeaderFeatureCard';

import questionCircle from '../assets/question-circle.png'
import './styles/HeaderSection.css';

function HeaderSection() {

    const features = [
        {
            title: '+1 000',
            body: 'Врачей различных специализаций'
        }, {
            title: '24/7',
            body: 'Доступ к медицинской помощи'
        }, {
            title: '+95%',
            body: 'Положительных отзывов'
        }, {
            title: '+20 000',
            body: 'Анкет пользователей'
        },
    ]

    return ( <section>
        <Container>
            <div className="header-card text-center">
                {/* <img src={questionCircle} alt="?" className='question-circle' /> */}
                
                <Button variant='outline-light'>Консультация от врачей</Button>
                <h1>Получайте бесплатную консультацию от лучших специалистов</h1>
                <ButtonGroup>
                    <Button variant='light'> <FaRegStar /> Лучшие консультанты</Button>
                    <Button variant='light'> <FaRegQuestionCircle /> Задать вопрос</Button>
                    <Button variant='light'> <FaFileAlt /> Популярные вопросы</Button>
                </ButtonGroup>

                <div className="feature-cards d-flex justify-content-between">
                    {
                        features.map(feature => <HeaderFeatureCard feature={feature} />)
                    }
                </div>
            </div>
        </Container>
    </section> );
}

export default HeaderSection;