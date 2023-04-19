import React from "react"
import styled from "styled-components"
import { Container, Flex, Actions, Section } from "../layoutComponents"
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

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  background: url("../../images/affordable-calgary-web-designer.jpg"),
    rgba(0, 0, 0, 0.7);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Text = styled.div`
  color: var(--txt-light);
  max-width: 110ch;
  width: 100%;

  h2 {
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

export default function ComponentB() {
  return (
    <HeroWrapper>
      <Section>
        <Container>
          <Text className="spacing-lg">
            <h2 className="caps bold">
              the benefits of hiring me as your calgary web designer
            </h2>
            <div className="spacing">
              <p>
                I provide 5-star Calgary web design services and have a
                background in engineering and solving complex problems which
                have translated to my ability in solving sales and marketing
                challenges that might be preventing you from reaching your
                business goals.
              </p>
              <p>
                I am confident that you will begin to see results for your
                business 90 days after working with me on your Calgary website
                design, SEO, and online visibility efforts. Here are a few
                results I’ve gotten for past clients:- helped a client in the
                construction industry double their website traffic for increased
                sales- helped a business receive funding from investors and
                acquire multiple international clients for their professional IT
                services
              </p>
              <p>
                Working with your trusted web designer in Calgary means that you
                will always have easy and direct contact with me whether it be
                through phone or email. No more waiting on hold with your web
                design company or agency that has to go through 5 different
                people to talk to the right person. Anytime you reach out to me,
                I’ll be there.
              </p>
            </div>
            <ButtonPrimary to="/">call me to an action</ButtonPrimary>
          </Text>
        </Container>
      </Section>
    </HeroWrapper>
  )
}
