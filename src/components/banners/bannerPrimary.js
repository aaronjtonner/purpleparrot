import React from "react"
import styled from "styled-components"
import { Container, Flex, Actions } from "../layoutComponents"
import {
  AnchorPrimary,
  AnchorUnderline,
  ButtonPrimary,
  ButtonSecondaryDark,
  ButtonUnderline,
} from "../buttons"
import { StaticImage } from "gatsby-plugin-image"
import { FaCheckCircle } from "react-icons/fa"
import BreadCrumb2Links from "../breadcrumbs/breadcrumb2links"

const device = {
  md: "43em",
}

const HeroGrid = styled.div`
  display: grid;
  grid-template-rows: auto 2em auto;
`

const HeroWrapper = styled.div`
  background: var(--clr-dark);
  height: 100%;
  grid-column: 1 / -1;
  grid-row: 1 / span 2;
  z-index: 1;
  padding: 4em 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 26em) {
    // min-height: 100vh;
    // height: 100%;
  }
`

const Bottom = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  z-index: 2;
  border-radius: var(--br);
  box-shadow: var(--shadow-light-accent);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  background: var(--clr-light);
`

const Text = styled.div`
  color: var(--txt-light);
  max-width: 90ch;
  width: 100%;
  padding-bottom: 3em;
  margin-right: auto;
  margin-left: auto;
  text-align: center;

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

export default function BannerPrimary(props) {
  return (
    <HeroGrid>
      <HeroWrapper>
        <Container>
          <Text className="spacing">
            <BreadCrumb2Links
              to1={props.to1}
              link1={props.link1}
              to2={props.to2}
              link2={props.link2}
            />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <AnchorPrimary href="tel: 587-437-9161">
              click here to dial: (587)-437-9161
            </AnchorPrimary>
          </Text>
        </Container>
      </HeroWrapper>
      {/* <Bottom>
        <Flex>
          <StaticImage
            src="../../images/web-design-klaad-mockup-1.jpg"
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
