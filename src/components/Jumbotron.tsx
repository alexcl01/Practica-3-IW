import React, {FC} from 'react';
import {Container} from "react-bootstrap";
import styled from 'styled-components';
import fondo from '../assets/fondo.jpg';
import '../App.css';

/*
    .jumbo{
        https://www.ecestaticos.com/imagestatic/clipping/aa2/6d8/aa26d83ca725506b45b86ede25ede745/andromeda-la-galaxia-canibal-que-viene-a-por-nosotros.jpg?mtime=1622555131
        background: url(${fondo}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2; 
    }
    .overlay{
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
  
*/
export const Jumbo:FC = () => (
  
        <div className="jumbo">
            <div className = "overlay"></div>
            <Container  align-items="center">
                <h2 className = "Title"> API STAR WARS SEARCH </h2>
   
            </Container>
        </div>
    
)