import React, { Component } from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  border: 1px solid red;
  text-align: center
`

const StyledH1 = styled.h1`
  color: red
`

export default class Component1 extends Component {
  render() {
    return <StyledComponent>
        <StyledH1>Hola soy el componente 1</StyledH1>
    </StyledComponent>;
  }
}
