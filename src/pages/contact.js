/* eslint-disable no-irregular-whitespace */
import React from 'react'
import styled from 'styled-components'
import { PDFDownloadLink, Page, Text, Document, StyleSheet, Font } from '@react-pdf/renderer'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PageWrapper = styled.div`
    background: #323944 !important;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    color: #6a6a6a;
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
`

const Btn = styled.button`
    margin: 50px auto;
    border-radius: 4px;
    border: 3px solid #6a6a6a !important;
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
      border: 3px solid red !important;
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
`

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 8,
    fontSize: 11,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

Font.register(
  'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
  { family: 'Oswald' },
);

const MyPDF = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.subtitle}>
          Leo TorresWeb Developer (415) 948-4792 | lhtorres@yahoo.com  | 
      </Text>
      
      <Text style={styles.text}>
          LinkedIn –https://linkedin.com/in/leohtorres | GitHub -https://github.com/osogrizz |
          FreeCodeCamp -https://www.freecodecamp.org/osogrizz
      </Text>
          
      <Text style={styles.text}>
          Core Skills
      </Text>
      
      <Text style={styles.text}>
          JavaScript  •  React  •  jQuery  •  HTML5  •  CSS3  •  Gatsby  •  Git:[GitHub,GitLab]  •  GraphQL
      </Text>

      <Text style={styles.text}>
          Projects
      </Text>
      
      <Text style={styles.text}>
          Personal website –https://leo-torres.tech/  -  
          Markdown Preview –https://markdown-preview.netlify.com/  -    
          Wikipedia Finder –http://codepen.io/osogrizz/full/VPrKoP/

      </Text>
      <Text style={styles.text}>
          Experience
      </Text>

      <Text style={styles.text}>
          GatsbyOpen Source Developer | Feb. 2019-Present
      </Text>

      <Text style={styles.text}>
          •  Contributed a Gatsby starter,to the Gatsbystarter library. 
      </Text>
      <Text style={styles.text}>
          Valor NetworkMetuchen, NJ 
          Developer | Aug.2017 –  Mar.2018
      </Text>
      <Text style={styles.text}>
          •  Maintained codebase for modified PACS system and related Chrome extension.
          •  Server (Linux/Windows) maintenance and setup.
          •  Worked with existing Database performing SQL queries and HL7 request. 

          - Technologies used: JavaScript, HTML5, CSS3, Bootstrap, GitLab, HL7, Linux(RedHat),  Windows Server,SQL, Twilio 
      </Text>

      <Text style={styles.text}>
          Developer Intern | May 2017 –Aug. 2017
      </Text>
      <Text style={styles.text}>
          •  Assisted in developing a Chrome extension that provided a UI interface and additional    functionality for users of an existing PACS system.Contributed heavily to the Front-End implementation of the Chrome extension. 
          - Technologies used: JavaScript, HTML5, CSS3, Bootstrap, GitLab
      </Text>

      <Text style={styles.text}>
          Hawkins Personnel (Pearson) San Antonio, TXTechnicalSupport | 2016–2017
      </Text>

      <Text style={styles.text}>
          •  First point of contact for Pearson’s clients via phone.
          •  Assisted clientsin the creation and configuration of their Pearson products / assessments
          •  Documented all troubleshooting procedures,  resolutions, or escalations.
      </Text>

      <Text style={styles.text}>
          U.S. Air ForceEngineerUtilities Engineer | May2003 –May 2009
      </Text>

      <Text style={styles.text}>
          •  Operation and maintenance of Reverse Osmosis Water Purification Units, providing potable water for key units and assets.
          •  Supervision of daily work crews.
          •  Managed vehicle fleets, and records.
          •  Served as a translator on an as needed basis for German to English translations.
      </Text>

      <Text style={styles.text}>
          Education
      </Text>

      <Text style={styles.text}>
          General  Assembly:   ImmersiveFull Stack Developer Course 
          Tech covered: JavaScript, HTML5, CSS3, Ruby on Rails, SQL databases, Node.jsBA
      </Text>

      <Text style={styles.text}>
          Integral Studies:  
          California Institute of Integral Studies Google  
      </Text>

      <Text style={styles.text}>
          Challenge Udacity Front End Development Nanodegree awardee
      </Text>
          
    </Page>
  </Document>
)







const Contact = () => (
  <PageWrapper>
    <Layout>
      <SEO title="Contact" />
      <FormWrapper>

        <h1 style={{  fontWeight: 300, fontSize: '4.25rem', marginBottom: '120px', marginTop: '1.45rem' }}>Contact</h1>            
        <h4>Stop by and say ​“hi”. Or drop me a note.</h4>
                        
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />

          <FormContainer>
            <InputStyles type="name" name="name" placeholder="Name" required />

            <InputStyles type="email" name="email" placeholder="Email" required />

            <TextArea name="message" id="" cols="30" rows="8" placeholder="Message" required />
            <Btn type="submit"><span>Send</span></Btn>

            <PDFDownloadLink document={<MyPDF />} fileName="Leo-Torres-Resume.pdf" style={{ color: 'white', textDecoration: 'none' }}>
              {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Resume 📄')}
            </PDFDownloadLink>


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
