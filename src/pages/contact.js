import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

// import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const PageWrapper = styled.div`
    background: #323944 !important;
    color: #4d4d4d;
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

const FooterStyles = styled.footer`
  margin: 0 auto;
  max-width: 950px;
  font-size: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  a {
    text-decoration: none;
    color: #444;
    font-weight: 100;
  }
`

const ContactMe = styled.div`
  h3 {
    position: relative;
    font-size: 30px;
    font-weight: 200;
    z-index: -1;
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
  font-family: 'Sacramento', cursive;
  margin: 0 20px;
}
` 

const Contact = () => (
    <PageWrapper >
        <Layout>
                <SEO title="Contact" />
                    <FormWrapper>
                        
                        <h4>Lorem ipsum dolor amet disrupt 3 wolf moon normcore</h4>

                        <ContactMe>
                            <h3 className="decorated"><span>Contact Me</span></h3>
                        </ContactMe>      
                        
                        <form action="#">
                        <FormContainer>

                        <InputStyles type="name" placeholder="Name"/>


                        <InputStyles type="email" placeholder="Email"/>

                        <TextArea name="" id="" cols="30" rows="6" placeholder="Message">
                        </TextArea>
                        <Btn type="submit"><span>Send</span></Btn>
                        </FormContainer>  
                        </form>

                        <h5>QUESTIONS OR COMMENTS?</h5>

                        <p>Lorem ipsum dolor amet disrupt 3 wolf moon normcore, keytar ramps lumbersexual
                        thundercats snackwave church-key cliche blog. Flexitarian venmo tousled banjo
                        ramps air plant PBR&B. Shaman jianbing mustache craft beer paleo polaroid, pabst
                        lumbersexual man braid. Gluten-free marfa butcher mustache hot chicken, small
                        batch occupy raclette vape actually cornhole slow-carb schlitz.
                        </p>

                        <h5>Leo Torres @ BobaBird Websites</h5>    
                        
                        <p>
                        tel.<a href="tel:4159484792"> (415) 948-4792</a>
                        </p>
                        
                    </FormWrapper>   
                    <div style={{ margin: `0 auto`,maxWidth: `950px` }}>
                    <hr /> 
                    </div>
                <FooterStyles>
                    <div>
                    Copyright © {new Date().getFullYear()},  CompanyName - All Rights Reserved
                    </div>

                    <div style={{ textAlign: 'right', }}>
                    <a href="https://leo-torres.com" target="_blank" rel="noopener noreferrer">A BobaBird Website</a>
                    </div>
                </FooterStyles>
            </Layout>
    </PageWrapper> 
)

export default Contact
