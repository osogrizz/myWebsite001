import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const Wrapper = styled.div`
    max-width: 80px;
    margin-left: 15%;
    margin-bottom: 20px;
    position: relative;

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
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 2px solid orange;
    outline: none;
    background: #222;
`

const SmallBtn = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px solid orange;
    outline: none;
    background: #444;
`
 
const Modal = styled.div`
  display: flex;
  background-color: orange;
  border: 2px solid white;
  border-radius: 4px;
  color: #444;

  span {
    line-height: 1.6;
    font-size: 1.8rem;
    font-weight: 300;
  }
  

  &:hover {
      visibility: visible;
    
  }

  section {
    margin: 15px 20px;

    option {
      /* font-weight: 600; */
      font-size: 14px;
    }
  }
`

const ThemePicker = () => {
  return (
    <Wrapper>
      <Btn>
        <ul>
          <Modal>

            <section>
              <SmallBtn style={{  border: '2px solid #ffe8cc'}} />
              <option>Dark</option>
            </section>

            <span>|</span>

            <section>
              <SmallBtn style={{ background: '#ffe8cc', border: '2px solid olive'}} />
              <option>Light</option>
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

