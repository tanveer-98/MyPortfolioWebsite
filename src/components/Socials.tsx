import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align : center;
`
const Container = styled.div`
    height: 100vh;
    scroll-snap-align : center;
`



const  Contact = () => {
  return (
    <Section>
      <Container>
          Contact
      </Container>
    </Section>
  )
}

export default  Contact;