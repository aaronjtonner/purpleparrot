import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonInline, ButtonPrimary } from "../buttons"
import { Container, GridThree, Section } from "../layoutComponents"

const StyledImg = styled(GatsbyImage)`
  max-height: 100px;
  max-width: 100px;
`

const Text = styled.div`
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
`

const BenefitItem = styled.div`
  box-shadow: var(--shadow-light);
  //   background: var(--clr-dark);
  //   color: var(--clr-light);
  padding: 2em;
  border-radius: var(--br);
`

export default function Benefits() {
  return (
    <Section>
      <Container className="spacing-md">
        <Text className="center">
          <h2 className="title dark">The Benefits Of purple parrot websites</h2>
        </Text>
        <GridThree>
          <BenefitItem className="spacing center">
            <StaticImage
              src="../../images/check-outline.svg"
              alt="5 star calgary web design services"
              height={80}
            />
            <h3 className="title dark caps">
              prebuilt hand-coded custom SEO websites
            </h3>
            <p>
              The Purple Parrot's prebuild{" "}
              <span className="italics dark">highly customizable websites</span>{" "}
              meant for maximum speed, lead generation, and SEO.
            </p>
          </BenefitItem>
          <BenefitItem className="spacing center">
            <StaticImage
              src="../../images/check-outline.svg"
              alt="results based calgary webdsite design"
              height={80}
            />
            <h3 className="title dark caps">contractless</h3>
            <p>
              Never get locked into a toxic contract again. With the Purple
              Parrot's, you will{" "}
              <span className="italics dark">
                save money by getting a customized website for $0 down
              </span>
              , on a wildly affordable monthly investment starting at $249 where
              you can cancel at anytime with no fees or hassles.
            </p>
          </BenefitItem>
          <BenefitItem className="spacing center">
            <StaticImage
              src="../../images/check-outline.svg"
              alt="trusted web designer calgary"
              height={80}
            />
            <h3 className="title dark caps">own your content forever</h3>
            <p>
              Never worry about creating content again. Whether you choose to
              stick with the Purple Parrot's for 3 days, 3 months, or 3 years,{" "}
              <span className="italics dark">
                you will always own the SEO content the Parrot's build for you.
              </span>
            </p>
          </BenefitItem>
        </GridThree>
        {/* <center>
          <ButtonPrimary to="/contact">
            get a website quote &#x2192;
          </ButtonPrimary>
        </center> */}
      </Container>
    </Section>
  )
}
