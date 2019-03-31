import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const Wrapper = styled.div`
    z-index: 100;
    max-width: 80px;
    margin-left: 15%;
    /* margin-bottom: 20px; */
    padding-bottom: 20px;

    ul {
        margin-top: 40px;
        background-color: orange;
        visibility: hidden;
        
    }
    &:hover {
      ul {
        visibility: visible;
      }
    }
    
`
const Btn = styled.div`
    z-index: 200;
    margin-bottom: 2rem;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    border: 2px solid orange;
    outline: none;
    background: #222;

    &:hover {
        ul {
            visibility: visible;  
            /* margin: 28px; */
        }
    }   
`

const SBtn = styled.div`
    margin: -6px 12px 0 0;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    border: 2px solid orange;
    outline: none;
    background: #222;
`

const Modal = styled.div`
  display: flex;
  background-color: orange;
  border: 2px solid white;
  border-radius: 4px;
  color: #444;
  line-height: 1.2;
  font-size: 35px;
  padding: 2px 10px 8px;
  margin-right: 28px;  


  li {
    display: flex !important;
    margin: 10px 20px;
    font-size: 16px !important;
    /* font-weight: 800; */
    line-height: 0.5;
  }

  @media (max-width: 600px) {
    margin-right: 12rem;;
  }
`



const ThemePicker = () => {
  return (    
    <Wrapper>
      <Btn>
        <ul>
          <Modal>
            <li>
              <SBtn style={{ background: '#222', border: '2px solid darkorange' }} />
                Dark 
            </li>
        |
            <li>
              <SBtn style={{ background: '#fff', border: '2px solid green' }} />
                Light
            </li>
          </Modal>
        </ul>
      </Btn>
    </Wrapper> 
  )
}

// ThemePicker.propTypes = {

// }

export default ThemePicker
