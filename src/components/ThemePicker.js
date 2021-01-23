import React from 'react'
import styled from 'styled-components'

import useDarkMode from '../hooks/useDarkMode'

const Wrapper = styled.div`
    z-index: 100;
    max-width: 80px;
    margin-left: 15%;
    margin-bottom: 20px;
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
    filter: drop-shadow(2px 4px 6px black);

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
    filter: drop-shadow(2px 4px 6px black);

    @media (max-width: 600px) {
      
  }
`

const Modal = styled.div`
  display: flex;
  background-color: orange;
  border: var(--modal-border);
  border-radius: 4px;
  color: #444;
  line-height: 1.2;
  font-size: 35px;
  padding: 2px 10px 8px;
  margin-right: 22px;  
  
  
  li {
    display: flex !important;
    margin: 10px 20px;
    font-size: 16px !important;
    line-height: 0.5;
  }
  
  @media (max-width: 650px) {
    margin-right: 8rem;  

  }

  @media (max-width: 600px) {
    margin-right: 12rem;
    font-size: 40px;
    align-items: baseline;
    justify-content: center;

     
    li {
      line-height: 0.5;
      margin: 0 5px;
      margin-top: -16px;
      font-size: 12px;
    }
  }
`

// let toggle = document.querySelector('.themeBody');

// toggle.addEventListener('click', function(e) {
//   e.preventDefault();

//   if (document.body.classList.contains('light-theme')) {
//     // Turning the theme off:
//     document.body.classList.remove('light-theme');
//     // Reverse logic on the button text, so that users can turn
//     // the theme back on:
//     toggle.innerText = '🤡 Turn theme on';
//   } else {
//     document.body.classList.add('light-theme');
//     toggle.innerText = 'Turn theme off';
//   }
// });



const ThemePicker = () => {
  const [darkMode, setDarkMode] = useDarkMode('darkMode')

  const toggleMode = (e) => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }

  const handleDark = (e) => {
    e.preventDefault()

  }

  const handleLight = (e) => {
    e.preventDefault()
  }



  return (
    <Wrapper>
      <Btn onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}>
        <ul>
          <Modal>
            <li className={darkMode ? 'toggle toggled' : 'toggle'}>
              <SBtn
                onClick={handleDark}
                style={{ background: '#222', border: '2px solid darkorange' }}
              />
                Dark
            </li>
        |
            <li className={!darkMode ? 'toggle toggled' : 'toggle'}>
              <SBtn onClick={handleLight} style={{ background: '#fff', border: '2px solid green' }} />
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
