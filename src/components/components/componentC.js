import React from "react"
import styled from "styled-components"
import { AnchorInline, ButtonInline } from "../buttons"
import ServiceForm from "../forms/serviceForm"
import { Container, Flex, Section } from "../layoutComponents"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 4em;

  @media screen and (max-width: 48em) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const Aside = styled.div`
  grid-column: 1 / span 1;

  .service-form {
    @media screen and (max-width: 48em) {
      display: none;
    }
  }
`

const Navigation = styled.div`
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  padding: 2em;

  ul {
    list-style-type: none;
    margin: var(--spacer) 0 0 0;
    padding: 0;
    text-transform: capitalize;

    & > * + * {
      margin-top: 0.2em;
    }
  }
`

const Content = styled.div`
  grid-column: 2 / -1;
  @media screen and (max-width: 48em) {
    grid-row: 1 / span 1;
  }
`

const Img = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`

const ServiceAreas = styled.div`
  padding: 2em;
  border: 1px solid var(--txt-dark-secondary);
  border-radius: var(--br);
`

export default function ComponentC(props) {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Aside className="spacing">
            <Navigation className="spacing">
              <h3 className="caps accent title bold">
                website <br /> services
              </h3>
              <ul>
                <li>
                  <ButtonInline to="/services/web-design-calgary">
                    custom web design calgary
                  </ButtonInline>{" "}
                  <hr />
                </li>
                <li>
                  <ButtonInline to="/services/calgary-seo-services">
                    search engine optimization (SEO)
                  </ButtonInline>{" "}
                  <hr />
                </li>
                <li>
                  <ButtonInline to="/services/web-design-calgary">
                    website development
                  </ButtonInline>{" "}
                  <hr />
                </li>
                <li>
                  <ButtonInline to="/services/web-design-calgary">
                    web maintenance & hosting
                  </ButtonInline>{" "}
                  <hr />
                </li>
              </ul>
            </Navigation>
            <div className="service-form">
              <ServiceForm />
            </div>
          </Aside>
          <Content className="spacing">
            <div>
              <p className="subheader accent caps italics">
                the aaron tonner web solutions difference
              </p>
              <h2 className="title">
                Unlock the Full Potential of Your calgary website design
              </h2>
            </div>
            <div className="spacing">
              <div>
                <h3 className="body--small upper  italics">
                  Boost your sales through a custom Calgary website design
                </h3>
                <p>
                  It is my mission to help local businesses grow and expand
                  their operations, look professional and trustworthy online,
                  boost their sales, and get better customers while cutting down
                  on time needed to book new clients through my Calgary website
                  design <ButtonInline to="/services">services</ButtonInline>.
                </p>
              </div>
              <div>
                <h3 className="body--small upper  italics">
                  Affordable web design Calgary that Creates a Lasting
                  Impression
                </h3>
                <p>
                  You can read{" "}
                  <ButtonInline to="/reviews">past client reviews</ButtonInline>
                  , or check out my{" "}
                  <ButtonInline to="/portfolio">portfolio</ButtonInline> to see
                  how I’ve been doing this. On your search for an affordable and
                  trustworthy Calgary web designer, you will notice that most
                  companies are looking to just provide you with a pretty
                  website. Here at Aaron Tonner Web Solutions, I certainly aim
                  to help your business look professional and trustworthy
                  online, but it’s not just about that when you work with me on
                  your web design and web development Calgary needs. It’s about
                  asking you the right questions prior to starting your project
                  that enables me to learn as much as I can about your business
                  goals and challenges. I use this information to determine how
                  a website and marketing solution can truly help you succeed in
                  reaching your business goals. That’s what sets me apart from
                  the other top Calgary web designers. 
                </p>
              </div>
              <div>
                <h3 className="body--small upper  italics">
                  Stand Out from the Crowd with Beautifully Designed Websites
                  that Drive Business Growth
                </h3>
                <p>
                  So, whether your goal is to grow your business, increase your
                  revenue, build better teams, get better customers, increase
                  brand visibility, or all of the above, I’m going to come up
                  with an affordable web design Calgary solution that’s tailored
                  to helping your business get massive results! That’s the Aaron
                  Tonner Web Solutions difference.
                </p>
              </div>
            </div>
            <Flex>
              <StaticImage
                src="../../images/calgary-web-designer-results-for-2-locals.jpg"
                alt="calgary web designer gets results"
              />
            </Flex>
            <ServiceAreas className="spacing">
              <p className="center bold">
                Are you a business owner who is struggling to grow and expand
                your operations? Are you having a hard time improving your brand
                awareness due to lack of time and marketing? Are you struggling
                to reach your sales goals? Do you want to get more high quality
                customers and increase your revenue?
              </p>
              <hr />
              <center>
                <ButtonInline to="/contact" className="italics caps">
                  get the website help you're looking for &#8594;
                </ButtonInline>
              </center>
            </ServiceAreas>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  )
}
