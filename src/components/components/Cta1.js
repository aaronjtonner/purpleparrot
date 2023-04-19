import React from "react"
import styled from "styled-components"
import { ButtonInlineLight, ButtonPrimary } from "../buttons"
import { Container, Section, Actions } from "../layoutComponents"

const Wrapper = styled.div`
  background: var(--clr-dark);
  padding: 4em 0;
`

const Text = styled.div`
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  p {
    color: var(--txt-light);
  }
`

export default function Cta1() {
  return (
    <Wrapper>
      <Container>
        <Text className="spacing">
          <div>
            <p className="subheader accent">
              get a website without the birdin'
            </p>
            <h2 className="title accent">
              Transform your online presence with the Purple Parrot's exclusive
              website leasing service
            </h2>
          </div>
          <p className="">
            With us, you can have a unique and customized website without the
            burden of a hefty upfront payment or the hassle of doing it
            yourself. Let us take care of everything while you focus on growing
            your business.
          </p>
          <Actions>
            <ButtonPrimary to="/contact">
              start your 30-day trial &#8594;
            </ButtonPrimary>
          </Actions>
        </Text>
      </Container>
    </Wrapper>
  )
}
