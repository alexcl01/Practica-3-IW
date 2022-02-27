import React, {FC} from 'react';
import {Container} from 'react-bootstrap';
import '../App.css';


export const Layout:FC = (props:any):any => (
            <Container >
                {props.children }
             </Container>

)