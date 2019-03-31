import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const Wrapper = styled.div`
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

const Modal = styled.div`
  display: flex;
  background-color: orange;
  border: 2px solid white;
  border-radius: 4px;
  color: #444;
  line-height: 1.4;
  font-size: 35px;
  padding: 5px 10px;
  margin-right: 28px;  


  section {
    margin: 15px 20px;
    font-size: 18px;
    font-weight: 800;
  }

  @media (max-width: 1486px) {
    height: 40px;
    line-height: 0.7;
    font-size: 12px;
    
  }
`



const ThemePicker = () => {
  return (    
    <Wrapper>
      <Btn>
        <ul>
          <Modal>
            <section>
              <option>
                Dark 
              </option>
            </section>
        |
            <section>
              <option>
                Light
              </option>
            </section>
          </Modal>
        </ul>
      </Btn>
    </Wrapper> 
  )
}

// ThemePicker.propTypes = {

// }

export default ThemePicker
