import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { PiGenderFemale, PiGenderMale } from 'react-icons/pi';

import avatarImg from '../assets/avatar.jpg'

function MessageComponent({ doctor, male }) {

    if (doctor) return (<div className='doctor my-4 d-flex justify-content-between'>
        <img src={avatarImg} alt="Avatar" className='avatar-img' />
        <Card className='message-card'>
            <Card.Header className='d-flex justify-content-between'>
                <p>Получено ответов (3)</p>
                <p>Январь 27, 2024 9:41 pm</p>
            </Card.Header>
            <Card.Body>
                <p>"Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... Читать полностью</p>
            </Card.Body>
        </Card>
    </div>)
    else return (<div className='client my-4 d-flex justify-content-between'>
        <Card className='message-card'>
            <Card.Header className='d-flex justify-content-between'>
                <p>Получено ответов (3)</p>
                <p className='text-muted'>Lorri Warf (26 лет)</p>
            </Card.Header>
            <Card.Body>
                <p>"Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... Читать полностью</p>
            </Card.Body>
        </Card>
        <div className={male ? "gender-indigator male" : "gender-indigator female"}>
            {
                male ? <PiGenderMale /> : <PiGenderFemale />}
        </div>
    </div>);
}

export default MessageComponent;