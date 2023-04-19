import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container, GridAuto, Section } from "../layoutComponents"
import { ButtonInline, ButtonPrimary } from "../buttons"

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 6em auto 6em;
`

const Content = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;
`

const Text = styled.div`
  max-width: 90ch;
  margin-left: auto;
  margin-right: auto;
  color: var(--txt-light);
  text-align: center;
`

const Bg = styled.div`
  background: var(--clr-dark);
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
`

const ComponentA = () => {
  return (
    <Section>
      <GridWrapper>
        <Bg />
        <Content className="spacing center">
          <Container className="spacing-lg">
            <Text className="spacing">
              <div>
                <p className="subheader accent italics">
                  pay-as-you-go website leasing
                </p>
                <h2 className="title">
                  websites effortlessly built for $0 down
                </h2>
              </div>
              <p>
                Save money and never get locked into a toxic contract again. Get
                a customized website for $0 down, $200 per month, no minimum
                monthly contract, pay-as-you-go, and cancel anytime with no fees
                or hassles for full control of what you’re spending. Our
                prebuilt websites are less expensive compared to regular,
                custom-built websites while providing the same benefits to your
                business.
              </p>
              <ButtonPrimary to="/contact">
                start your 30-day trial &#8594;
              </ButtonPrimary>
            </Text>
            <StaticImage
              src="../../images/web-design-calgary-image-2.svg"
              alt="web design calgary"
            />
          </Container>
        </Content>
      </GridWrapper>
    </Section>
  )
}

export default ComponentA
