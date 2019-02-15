import React, { Component } from 'react'
import styled from 'styled-components'

import Typed from 'typed.js'

const Wrapper = styled.div`
    color: #fff !important;
    .typed-cursor {
    opacity: 1;
    animation: typedjsBlink 0.7s infinite;
    -webkit-animation: typedjsBlink 0.7s infinite;
    animation: typedjsBlink 0.7s infinite;
    }
    @keyframes typedjsBlink {
    50% { opacity: 0.0; }
    }
    @-webkit-keyframes typedjsBlink {
    0% { opacity: 1; }
    50% { opacity: 0.0; }
    100% { opacity: 1; }
    }
    .typed-fade-out{
    opacity: 0;
    transition: opacity .25s;
    -webkit-animation: 0;
    animation: 0;
    }
`

class TypedJS extends Component {
    componentDidMount() {
        const { strings } = this.props;
        const options = {
            strings: strings,
        typeSpeed: 50,
        backSpeed: 50
        };
        this.typed = new Typed(this.el, options);
    }
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
      
  render() {
    return (
        <Wrapper>
            <span 
                style={{ whiteSpace: 'pre' }}
                ref={(el) => {this.el = el}}
            />
        </Wrapper> 
    )
  }
}


const TypedText = () => (
    <Wrapper >
        <TypedJS   
            strings={[
                'Leo Torres',
                'Leo Torres | Web Developer'
            ]}
        />
    </Wrapper>
)

export default TypedText