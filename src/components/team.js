import React from "react"
import { Container, Section } from "./layoutComponents"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { ButtonPrimary } from "./buttons"

const Text = styled.div`
  max-width: 90ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;

  & > * + * {
    margin-left: 15px;
  }

  .headshot-img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    border-radius: 10000px;
    border: 1px solid var(--clr-accent);
  }

  h3 {
    max-width: 40ch;
  }
`

export default function Team() {
  return (
    <Section>
      <Container className="spacing-lg">
        <Text className="spacing-md">
          <h2 className="title">
            meet the <span className="italics accent">purple parrot's</span>
          </h2>
          <div className="spacing">
            <p>
              Meet the dynamic duo behind our crazy business idea - Mike and
              Aaron! We might have grown up on opposite ends of the country, but
              we found each other during our engineering days at Dalhousie
              University in Halifax. We lived together for four years, and we're
              pretty sure we're still on each other's good side.{" "}
            </p>
            <p>
              Fast forward to the pandemic, and we both had an epiphany -
              engineering wasn't our passion! Instead, we followed our hearts
              and built our own successful marketing and web design companies.
              With over 30 satisfied clients between us, we knew we had
              something special.
            </p>
            <p>
              But here's the plot twist - we reunited in December 2022 to hatch
              a crazy idea to revolutionize website-building for small
              businesses. With Mike at the helm of Vandy Marketing and Aaron
              running Aaron Tonner Web Solutions, we're taking the world by
              storm. So buckle up and join us for the ride!
            </p>
          </div>
        </Text>
        <Flex>
          <div className="center">
            <StaticImage className="headshot-img" src="../images/aaron.jpg" />
            <h3 className="body--small caps italics">
              aaron tonner <br /> the former housemate that:{" "}
              <span className="accent">
                uses communal toilet paper to blow his nose
              </span>{" "}
            </h3>
          </div>
          <div className="center">
            <StaticImage className="headshot-img" src="../images/mike.jpg" />
            <h3 className="body--small caps italics">
              mike van der poel <br /> the former housemate that:{" "}
              <span className="accent">
                leaves his alarm clock plugged in after leaving for the weekend
                and locks his door
              </span>{" "}
            </h3>
          </div>
        </Flex>
        <center>
          <ButtonPrimary to="/contact">
            talk to the parrot's &#8594;
          </ButtonPrimary>
        </center>
      </Container>
    </Section>
  )
}
