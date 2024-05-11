import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import MessageComponent from './MessageComponent';
import { IoChevronDownOutline } from 'react-icons/io5';

function IndividualMessagingArea() {

    const messageList = [0, 1, 2, 3, 4, 5];
    const [messages, setMessages] = useState(messageList.slice(0, 2));


    return (<div className="individual-messaging-area">
        <Card className='individual-messaging-card'>
            <Card.Header className='d-flex justify-content-between'>
                <p>Вопрос: {21408}</p>
                <p>Январь 27, 2024 9:41 pm</p>
            </Card.Header>
            <Card.Body>

                {/* Below code is just simulation
                * I can change it when real data is fetched through API 
                * for now, it just gives values randomly */}
                {
                    messages.map(message => <MessageComponent doctor={message % 2 === 1} male={message % 3 === 0} />)
                }

                {
                    messages.length < 3 &&
                    <Button 
                        variant='light' 
                        className='more-btn'
                        onClick={() => setMessages(messageList)}
                        >
                            Смотреть все ответы ({ messageList.length - messages.length })
                             <IoChevronDownOutline /> 
                    </Button>
                }


            </Card.Body>
        </Card>
    </div>);
}

export default IndividualMessagingArea;