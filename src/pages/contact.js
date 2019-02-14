import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PageWrapper = styled.div`
    background: #323944 !important;
    color: #6a6a6a;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

const FormWrapper = styled.div`  
  margin: 0 auto;
  text-align: center;
  max-width: 1050px;
  padding-bottom: 60px;

  h5 {
    font-weight: 150;
    font-size: .9rem;
    letter-spacing: 0.8px;
  }

  h4 {
    font-size: 15px;
    font-weight: 200;
    letter-spacing: 1.5px;
  }

  p {
    color: #777;
    font-size: 16px;

    a {
      text-decoration: none;
      color: #777;
      &:hover {
        color: rgb(243, 235, 222)
      }
    }
  }
`


const FormContainer = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: 700px;
  grid-template-columns: 1fr;
  text-align: center;
  align-content: center;
  
`

const InputStyles = styled.input`
  height: 50px;
  margin: 10px 0;
`

const Btn = styled.button`
    margin: 50px auto;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 45px;
    text-transform: uppercase;
    border: red;
    box-shadow: 2px 2px 4px #4d4d4d;
    outline: none;
    width: 180px;
    background: red;
    color: #fff;
    position: relative;
    overflow: hidden;
    z-index: 20;

    span {
      z-index: 20;
    }
    &:active {
      background-color: #e01111;
      color: #fff;
      background-size: 100%;
      transition: background 0s;
    }

    &:after {
      background: #fff;
      content: "";
      height: 155px;
      left: -75px;
      opacity: 0.2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: -10;
    }
  
  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

`

const TextArea = styled.textarea`
  margin-top: 10px;
`

const ContactMe = styled.div`
  h3 {
    color: #6a6a6a !important;
    position: relative;
    font-size: 30px;
    font-weight: 200;
    /* z-index: -1; */ 
    text-align: center;
    margin-top: 60px;
    margin-bottom: 80px;
    overflow: hidden;
  }
  h3:before, h3:after {
    position: absolute;
    top: 50%;
    overflow: hidden;
    width: 51%;
    height: 1px;
    content: '\a0';
    background-color: #444;
}
h3:before {
    margin-left: -50%;
    text-align: right;
}

span {
  color: #6a6a6a !important;
  /* font-family: 'Sacramento', cursive; */
  margin: 0 20px;
}
` 

const Contact = () => (
    <PageWrapper >
        <Layout>
                <SEO title="Contact" />
                    <FormWrapper>
                        
                        <h4>Stop by and say ​“hi.”Or drop me a note.</h4>

                        <ContactMe>
                            <h3 className="decorated"><span>Contact Me</span></h3>
                        </ContactMe>      
                        
                        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" >
                          <input type="hidden" name="form-name" value="contact" />

                          <FormContainer>
                            <InputStyles type="name" name="name" placeholder="Name" required/>

                            <InputStyles type="email"  name="email" placeholder="Email" required/>

                            <TextArea name="message" id="" cols="30" rows="6" placeholder="Message" required>
                            </TextArea>
                            <Btn type="submit"><span>Send</span></Btn>
                          </FormContainer>  
                        </form>

                        <h5>QUESTIONS OR COMMENTS?</h5>

                        <p>
                          Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <h5>Leo Torres @ BobaBird Websites</h5>    
                        
                        <p>
                        tel.<a href="tel:4159484792"> (415) 948-4792</a>
                        </p>
                        
                    </FormWrapper>   
            </Layout>
    </PageWrapper> 
)

export default Contact
