import React, { useState, useEffect } from 'react';
import HeaderSection from '../sections/HeaderSection';
import { Col, Container, Row } from 'react-bootstrap';
import FilterCard from '../components/FilterCard';
import MessagingArea from '../components/MessagingArea';

import './style/HomeStyle.css';

function HomePage() {
    return (
        <div className='home page'>
            <HeaderSection />

            <Container>
                <Row>
                    <Col md={3}>
                        <FilterCard />
                    </Col>
                    <Col md={9}>
                        <MessagingArea />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;