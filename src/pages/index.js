import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import normalizeStyles from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalizeStyles}

  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: border-box;
    }
  } 
`

const PageBody = styled.div`
  font-size: 1rem;

  width: 100vw;
  height: 100vh;

  padding: 2em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: papayawhip;

  @media (min-width: 600px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`

const Heading = styled.h1`
  font-family: Impact, Charcoal, sans-serif;
  font-size: 3em;

  color: indianred;
`

const ExplanationText = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-size: 2em;
  
  color: lightcoral;
`

const IndexPage = () => (
  <Fragment>
    <GlobalStyles />
    <PageBody>
      <Heading>devs4science</Heading>
      <ExplanationText>something great is coming...</ExplanationText>
    </PageBody>
  </Fragment>
)

export default IndexPage
