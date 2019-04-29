import React from 'react'
import { Page, Text, Document, StyleSheet, Font } from '@react-pdf/renderer'



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
})

Font.register(
  'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
  { family: 'Oswald' },
)

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

export default MyPDF