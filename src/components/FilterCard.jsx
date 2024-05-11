import React, { useState, useEffect } from 'react';
import { Button, Card, FormCheck, Table, InputGroup, Form } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';
import { RiSearchLine } from 'react-icons/ri';

function FilterCard() {

    const professions = [
        { id: 1, name: "Аллерголог", number: '(12 312)' },
        { id: 2, name: "Андролог", number: '(12 312)' },
        { id: 3, name: "Врач УЗИ", number: '(12 312)' },
        { id: 4, name: "Гематолог", number: '(12 312)' },
        { id: 5, name: "ЛОР", number: '(12 312)' },
        { id: 6, name: "Нарколог", number: '(12 312)' },
    ]

    const [ selected, setSelected ] = useState([])

    // const select = (id) => {
    //     setSelected([ ... selected, professions.find()])
    // }


    return (<Card className='filter-card'>
        <Card.Header className='d-flex'>
            <h4>Фильтрация по направлениям</h4>
            <Button variant='light'> <IoClose size={18} /> Сбросить </Button>
        </Card.Header>
        <Card.Body>
            <InputGroup>
                <Form.Control type='search'
                    placeholder='Поиск направления' />
                <InputGroup.Text> <RiSearchLine /> </InputGroup.Text>
            </InputGroup>
            {
                professions.map(p => <div key={p.id} 

                    className='d-flex justify-content-between' >
                    <div> 
                        <input type="checkbox" class="form-check-input" /> 
                        <span> {p.name}</span> 
                    </div>
                    <p >{p.number}</p>
                </div>)
            }

        </Card.Body>
    </Card>);
}

export default FilterCard;