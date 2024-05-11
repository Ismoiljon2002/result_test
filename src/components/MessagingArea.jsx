import React, { useState, useEffect } from 'react';
import { Button, InputGroup, Form, Dropdown, DropdownButton, Pagination } from 'react-bootstrap';
import IndividualMessagingArea from './IndividualMessagingArea';
import { RiSearchLine } from 'react-icons/ri';
import { FaSortAmountUpAlt } from 'react-icons/fa';

function MessagingArea() {

    const dropdownTitle = <span><FaSortAmountUpAlt color='#050B2B' /> Сортировать по </span>
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const [ currentPage, setCurrentPage ] = useState(7)
    

    const goToPage = (page) => {
        setCurrentPage(page)
    }

    const pageIncrement = () => {
        if (pages.length > currentPage)
        setCurrentPage(currentPage + 1)
    }

    const pageDecrement = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    return (
        <div className='messaging-area'>
            <div className="messaging-area-header d-flex justify-content-between align-self-end">
                <h2> Список последних ответов на вопросы <span className='text-muted'> (12 493) </span> </h2>

                <DropdownButton id="dropdown-basic-button" title={dropdownTitle} variant='light'>
                    <Dropdown.Item >Action</Dropdown.Item>
                    <Dropdown.Item >Another action</Dropdown.Item>
                    <Dropdown.Item >Something else</Dropdown.Item>
                </DropdownButton>
            </div>

            <InputGroup className="my-3">
                <Form.Control
                    placeholder="Искать по тексту в вопросе"
                    aria-label="search"
                    type='search'
                    aria-describedby="basic-addon2"
                />
                <Button type='search' >
                    <RiSearchLine />
                    Поиск
                </Button>
            </InputGroup>

            <IndividualMessagingArea />
            <IndividualMessagingArea />
            <IndividualMessagingArea />



            <Pagination>
                <Pagination.Prev onClick={pageDecrement} disabled={currentPage === 1} />

                { currentPage > 4 ? <Pagination.Ellipsis disabled/> : "" }

                {
                    pages.slice(
                        currentPage > 3 ? currentPage - 4 : 0, 
                        pages.length - currentPage > 3 ? currentPage + 3 : pages.length
                    ).map(page => 
                        <Pagination.Item 
                            onClick={() => goToPage(page)}
                            active={page === currentPage}> {page} 
                        </Pagination.Item>
                    )
                }
                { pages.length - currentPage > 3 ? <Pagination.Ellipsis disabled/> : ''}

                <Pagination.Next onClick={pageIncrement} disabled={currentPage === pages.length} />
            </Pagination>

        </div>
    );
}

export default MessagingArea;