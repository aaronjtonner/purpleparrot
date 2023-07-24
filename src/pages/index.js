import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Hero from "../components/heros/hero"
import FormContact from "../components/forms/formContact"
import SEO from "../components/seo"
import Clients from "../components/components/clients"
import AllReviews from "../components/reviews"
import {
  Container,
  Section,
  Flex,
  FlexMobileOpp,
} from "../components/layoutComponents"
import { ButtonPrimary } from "../components/buttons"
import { StaticImage } from "gatsby-plugin-image"
import ComponentA from "../components/components/componentA"
import Cta1 from "../components/components/Cta1"
import Benefits from "../components/components/benefits"
import Team from "../components/team"
import Gallery from "../components/components/gallery"
import Pricing from "../components/components/pricing"

export default function index() {
  return (
    <Layout>
      <SEO
        title="Purple Parrot Websites | SEO + Free Websites For $0 Down"
        description="A one-of-a-kind SEO + free website service that enables you to have a website without the large upfront cost and practically no work on your part. "
      />
      <Hero />
      <Clients />
      <ComponentA />
      <Section>
        <Container className="spacing-lg">
          <hr />
          <Flex>
            <div className="spacing">
              <div>
                <p className="subheader dark italics">
                  websites without the birdin'
                </p>
                <h2 className="title dark">
                  SEO websites that are live before you can say “purple parrots”
                </h2>
              </div>
              <p>
                We offer prebuilt SEO websites that will get your business
                online before you can say "Purple Parots"! Our custom,
                hand-coded SEO websites come prebuilt which means you don’t have
                to go through the excruciating pain of working with your typical
                web design company as they take 3+ months to build out your
                website from scratch. Instead, finally experience an effortless,
                7-days-or-less website build to launch process where you still
                get to have as much input as you would like so the website is
                completely aligned with the vision of your brand. 
              </p>
              <ButtonPrimary to="/contact">
                book a free call now &#8594;
              </ButtonPrimary>
            </div>
            <StaticImage
              className="stretch img-right"
              src="../images/calgary-seo-services.jpg"
              alt="custome website design calgary, AB"
            />
          </Flex>
          <hr />
          <FlexMobileOpp>
            <StaticImage
              className="stretch img-left"
              src="../images/calgary-seo-services.jpg"
              alt="calgary seo services"
            />
            <div className="spacing">
              <div>
                <p className="subheader bold caps dark italics">
                  websites without the birdin'
                </p>
                <h2 className="title dark">
                  custom SEO websites without the massive investment
                </h2>
              </div>
              <p>
                Start outshining, outranking, and outperforming your online
                competition within 7 days of working with the Purple Parrot's.
                Your website will be custom coded without the typical bulky page
                building tools. Your website is going to be lightning quick and
                you can cut through your online competition and get seen by more
                customers, fast.
              </p>
              <ButtonPrimary to="/contact">
                talk to the parrot's &#8594;
              </ButtonPrimary>
            </div>
          </FlexMobileOpp>
          <hr />
        </Container>
      </Section>
      <AllReviews
        subheader="does SEO elude you?"
        title="dedicated to transforming the way SEO works for our beloved clients"
      />
      <Benefits />
      <Cta1 />
      {/* <Team /> */}
      <Pricing />
      <FormContact title="Write us a message!" />
    </Layout>
  )
}
