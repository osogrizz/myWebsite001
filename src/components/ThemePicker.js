import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const Wrapper = styled.div`
    max-width: 80px;
    margin-left: 15%;
    margin-bottom: 20px;

    ul {
        margin-top: 40px;
        background-color: orange;
        visibility: hidden;
    }
    
`
const Btn = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 2px solid orange;
    outline: none;
    background: #222;

    &:hover {
        ul {
            visibility: visible;  
        }
    }   
`

const Modal = styled.div`
  display: flex;
  background-color: orange;
  border: 2px solid white;
  border-radius: 4px;
  color: #444;
  transform: translateY(-20deg);

  &:hover {
    ul {
      visibility: visible;
    }
  }

  section {
    margin: 15px 20px;
    font-size: 20px;
    font-weight: 700;
  }
`

const ThemePicker = () => {
  return (
    <Wrapper>
      <Btn>
        <ul>
          <Modal>
            <section>
              <option>Dark </option>
            </section>
            <section>
              <option> Light</option>
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

