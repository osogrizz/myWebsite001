import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const Wrapper = styled.div`
    margin-left: 15%;
    margin-bottom: 20px;
`
const Btn = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 2px solid orange;
    outline: none;
    background: #222;
    /* transform: translateY(0.7em); */
`

function ThemePicker(props) {
  return (
    <Wrapper>
      <Btn type="button" />
    </Wrapper>
  )
}

// ThemePicker.propTypes = {

// }

export default ThemePicker

