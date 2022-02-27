import React, {FC} from 'react';
import { Nav, Navbar, ButtonGroup, DropdownButton, Form, Dropdown} from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios'
import { Component } from 'react'

import { render } from 'react-dom';

const Styles = styled.div`
.navbar {
    backgroud-color: #222;
}
.navbar-brand, .navbar-nav .nav-link{
    color: #33FFDA;
    &:hover{
        color: white;
    }
}
`;
export const BarNav:FC = () =>  {


    //render() {
        return (
            <Styles>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/CrearEspacio"> Crear Espacio de Trabajo  </Nav.Link>
                        </Nav>
                        <Form >
                            <DropdownButton as={ButtonGroup}
                                menuAlign={{ lg: 'right' }}
                                title="Espacios de trabajo"
                                id="dropdown-menu-align" variant="info">
                                
                            </DropdownButton>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
   // }

}