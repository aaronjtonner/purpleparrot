import React from "react"
import styled from "styled-components"
import { Container, Flex, Actions } from "../layoutComponents"
import {
  AnchorUnderline,
  ButtonPrimary,
  ButtonSecondaryDark,
  ButtonUnderline,
} from "../buttons"
import { StaticImage } from "gatsby-plugin-image"
import { FaCheckCircle } from "react-icons/fa"

const device = {
  md: "43em",
}

const HeroGrid = styled.div`
  display: grid;
  grid-template-rows: auto 2em auto;
  margin-bottom: 4em;
`

const HeroWrapper = styled.div`
  background: var(--clr-dark);
  min-height: 85vh;
  height: 100%;
  grid-column: 1 / -1;
  grid-row: 1 / span 2;
  z-index: 1;

  display: flex;
  align-items: center;

  @media screen and (max-width: 26em) {
    // min-height: 100vh;
    // height: 100%;
  }

  .hero-img-left {
    @media screen and (max-width: 48em) {
      display: none;
    }
  }
`

const Bottom = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  z-index: 2;
  border-radius: var(--br);
  box-shadow: var(--shadow-light);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  background: var(--clr-dark);
  color: var(--txt-light);
  padding: 2em;
`

const Text = styled.div`
  color: var(--txt-light);
  max-width: 70ch;
  width: 100%;
  padding-bottom: 3em;

  h1 {
    text-shadow: var(--shadow-light-accent);
    font-size: var(--fs-1);
    font-weight: var(--fw-900);
    text-transform: capitalize;
    line-height: 1.1;
    font-family: var(--ff-raleway);

    @media screen and (min-width: 45em) {
      font-size: 4rem;
      line-height: 1;
    }
  }
`

export default function HeroBasic() {
  return (
    <HeroGrid>
      <HeroWrapper>
        <Container>
          <Flex>
            <Text className="spacing">
              <div>
                <div>
                  <p className="subheader italics accent">
                    get a website without the birdin'
                  </p>{" "}
                  <h1 className="caps bold">
                    Fuel your business with a{" "}
                    <span className="italics">Free Website</span> and Custom SEO
                    Solutions
                  </h1>
                </div>
              </div>
              <p>
                Empower your online presence with our one-of-a-kind SEO + free
                website service that enables you to have a site without the
                large upfront cost and practically no work on your part. 
              </p>
              <ButtonPrimary to="/contact">
                book a free call now &#8594;
              </ButtonPrimary>
            </Text>
            <StaticImage
              src="../../images/hero-pp.svg"
              className="hero-img-left"
            />
          </Flex>
        </Container>
      </HeroWrapper>
      {/* <Bottom>
        <Flex>
          <StaticImage
            src="../../images/klaad-mockup-1-dark.jpg"
            alt="website design mockup"
          />
          <div>
            <h2 className="title caps">
              contractor gets 16x more bookings in 60 days
            </h2>
            <AnchorUnderline href="https://www.klaadglass.ca" target="_blank">
              visit this website &#8594;
            </AnchorUnderline>
          </div>
        </Flex>
      </Bottom> */}
    </HeroGrid>
  )
}
