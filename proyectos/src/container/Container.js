import React, { Component } from 'react';
import Component1 from '../components/Component1';
import Component2 from '../components/Component2';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: beige;
  border: 1px solid purple;
`

export default class Container extends Component {
  render() {
    return <StyledContainer>
        <h1>Soy el Contenedor</h1>
        <Component1/>
        <Component2/>
    </StyledContainer>;
  }
}
