
import React from 'react';
import { PageHeader, Text, Container } from './AboutPageElements';
import {body} from './AboutText.js'

export const AboutPage = () => {
  

  return (
    <Container>
      <PageHeader>About Us</PageHeader>
      <Text>{body}</Text>
    </Container>
  )
}
