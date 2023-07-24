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
                  pay-as-you-go SEO + free website
                </p>
                <h2 className="title">
                  websites effortlessly built ontop of your SEO strategy
                </h2>
              </div>
              <p>
                Save money and never get locked into a toxic contract again. Get
                a customized SEO plan + free website for $0 down, $249 per
                month, no minimum monthly contract, on a pay-as-you-go model.
              </p>
              <ButtonPrimary to="/contact">
                book a free call now &#8594;
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
