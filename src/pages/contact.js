/* eslint-disable no-irregular-whitespace */
import React from 'react'
import styled from 'styled-components'
// import { PDFDownloadLink } from '@react-pdf/renderer'
// import MyPDF from '../components/resumePDF'
// import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

// const puppeteer = require('puppeteer')

const PageWrapper = styled.div`
    background: var(--bg);
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    color: var(--text-color);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

const FormWrapper = styled.div`  
  margin: 0 auto;
  text-align: center;
  max-width: 1050px !important;
  padding-bottom: 60px;

  h5 {
    font-weight: 150;
    font-size: .9rem;
    letter-spacing: 0.8px;
    /* color: rgb(243, 235, 222); */
  }

  h4 {
    /* color: rgb(243, 235, 222); */
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
      /* color: #fff; */
      &:hover {
        color: rgb(243, 235, 222)
      }
    }
  }
`


const FormContainer = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: 600px;
  grid-template-columns: 1fr;
  text-align: center;
  align-content: center;
`

const InputStyles = styled.input`
  height: 50px;
  margin: 10px 0;
  border: none;
  border-radius: 3px;
  padding: 10px;
  box-shadow: var(--input-shadow)
`

const Btn = styled.button`
    margin: 50px auto;
    border-radius: 4px;
    border: 2px solid #6a6a6a !important;
    font-weight: 400;
    font-size: 16px;
    line-height: 45px;
    text-transform: uppercase;
    letter-spacing: 4px;
    outline: none;
    width: 180px;
    background: #2d333d;
    color: #6a6a6a;
    position: relative;
    overflow: hidden;
    transition: all 0.18s ease-in-out;

    &:active {
      background-color: red !important;
      border: 2px solid red !important;
      transition: all 0.00001s ease-out !important;
    }
  
  &:hover {
    cursor: pointer;
    color: #323944;
    background-color: #6a6a6a;
    letter-spacing: 1.2rem;
    font-weight: 500;
    font-size: 18px;
    padding-left: 25px;
    transition: all 0.25s ease-in-out;
    &:after {

    }
  }
`

const TextArea = styled.textarea`
  margin-top: 25px;
  border: none;
  border-radius: 3px;
  padding: 10px;
  box-shadow: var(--input-shadow)
`




const Contact = () => (

  <PageWrapper>
    <Layout>
      <SEO title="Contact" />
      <FormWrapper>

        <h1 style={{  fontWeight: 300, fontSize: '4.25rem', marginBottom: '44px', marginTop: '1.45rem' }}>Contact</h1>            
        <h4>Stop by and say ​“hi”. Or drop me a note.</h4>
                    
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />

          <FormContainer>
            <InputStyles type="name" name="name" placeholder="Name" required />

            <InputStyles type="email" name="email" placeholder="Email" required />

            <TextArea name="message" id="" cols="30" rows="8" placeholder="Message" required />
            <Btn type="submit"><span>Send</span></Btn>

          </FormContainer>  
        </form>

        <h5>QUESTIONS OR COMMENTS?</h5>

        <p>
          Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <h5>Leo Torres @ BobaBird Websites</h5>    
                    
        <p>
      tel.
          <a href="tel:4159484792"> (415) 948-4792</a>
        </p>
                    
      </FormWrapper>   


    </Layout>
  </PageWrapper> 
)

export default Contact

