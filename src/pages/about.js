import React from "react"
import styled from "styled-components"
import BannerPrimary from "../components/banners/bannerPrimary"
import BannerSecondary from "../components/banners/bannerSecondary"
import { AnchorInline, ButtonInline } from "../components/buttons"
import FormContact from "../components/forms/formContact"
import Layout from "../components/layout"
import { Container, Section } from "../components/layoutComponents"
import SEO from "../components/seo"

const Text = styled.div`
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
`

export default function About() {
  return (
    <Layout>
      <SEO
        title="About | Aaron Tonner Web Solutions | Websites & SEO"
        description="I do things differently. I build websites to help your business get REAL results (just like how I helped a local contractor 16X his service calls)."
      />
      <BannerPrimary
        to1="/"
        link1="Home"
        to2="/about"
        link2="About"
        title="about me"
        description="I do things differently here... I build websites to help your business get REAL results (just like how I helped a local contractor 16X his service calls)"
      />
      <Section>
        <Container>
          <Text className="spacing">
            <h2 className="title center">
              more information coming soon to this page!
            </h2>
            <p className="center">
              I'm currently working on this about page. When it's live, you'll
              find more information about how I might be able to help your
              business website or SEO. In the meantime, use the{" "}
              <ButtonInline to="/services/web-design-calgary">
                web design service page
              </ButtonInline>{" "}
              for more information.
            </p>
            <p>
              Or, check out my{" "}
              <AnchorInline
                href="https://www.google.com/search?q=aaron+tonner+web+solutions&rlz=1C1JZAP_enCA1008CA1008&oq=aaron+tonn&aqs=chrome.0.69i59j69i57j69i59j69i65j69i60l2j69i65.1553j0j7&sourceid=chrome&ie=UTF-8"
                target="_blank"
              >
                Google Business Profile
              </AnchorInline>{" "}
              to read customer reviews, or visit my{" "}
              <ButtonInline to="/portfolio">
                website design portfolio
              </ButtonInline>{" "}
              to see some of my recent work, and case studies.
            </p>
          </Text>
        </Container>
      </Section>
      <FormContact />
    </Layout>
  )
}
