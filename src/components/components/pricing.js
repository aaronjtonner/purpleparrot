import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container, GridAuto, GridThree, Section } from "../layoutComponents"
import { ButtonInline, ButtonPrimary, ButtonSecondary } from "../buttons"

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

const Item = styled.div`
  padding: 2em;
  border-radius: var(--br);
  border: 1px solid var(--clr-accent);
  background: var(--clr-light);
  color: var(--txt-dark);

  ul {
    list-style-type: none;

    & > * + * {
      margin-top: var(--spacer-sm);
    }
    li {
      text-transform: capitalize;
    }
    li:before {
      content: "✓";
    }
  }
`

const Pricing = () => {
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
                <h2 className="title">choose a plan that works for you</h2>
                <p>
                  The Purple Parrot Website leasing service is everything you
                  need to leave your target audience helpless in the face of
                  your offer, and your competition in the dust, in multiple
                  convenient and affordable packages suited for any business.{" "}
                </p>
              </div>
            </Text>
            <GridThree>
              <Item className="spacing">
                <h2 className="title accent upper">basic</h2>
                <p className="bold">$249 per month</p>
                <p className="body--small italics">
                  For businesses just getting started
                </p>
                <ButtonSecondary to="/contact">
                  get started &#8594;
                </ButtonSecondary>
                <ul>
                  {/* <li>24/7 Support and maintenance</li>
                  <li>Monthly performance report</li>
                  <li>Daily site backups</li>
                  <li>Google Analytics</li> */}
                  {/* <li>Accept payments online</li> */}
                  {/* <li>FREE ticket to our monthly web class</li>
                  <li>Exclusive access to our weekly newsletter</li> */}
                  <li>3 Website templates to choose from</li>
                  <li>Up to a 5 page website</li>
                  <li>Up to 1,000-word text copy upfront</li>
                  {/* <li>Google Business Profile & Optimizations</li> */}
                  <li>30 minutes of changes per month (we work FAST)</li>
                  <li>1 search engine optimized blogs per month</li>
                  {/* <li>
                    +500 words of content added each month that target new and
                    existing keywords
                  </li> */}
                </ul>
                <p className="italics">
                  *** You will own your content forever!
                </p>
              </Item>
              <Item className="spacing">
                <div>
                  <h2 className="title accent upper">pro</h2>
                </div>
                <p className="bold">$497 per month</p>
                <p className="body--small italics">
                  For businesses investing in marketing with search engine
                  optimization{" "}
                </p>
                <ButtonPrimary to="/contact">get started &#8594;</ButtonPrimary>
                <ul>
                  {/* <li>24/7 Support and maintenance</li> */}
                  <li>Monthly performance report</li>
                  <li>Daily site backups</li>
                  <li>Google Analytics</li>
                  {/* <li>Accept payments online</li>
                  <li>FREE ticket to our monthly web class</li>
                  <li>Exclusive access to our weekly newsletter</li> */}
                  <li>10 Website templates to choose from</li>
                  <li>Up to a 10 page website</li>
                  <li>Up to 3,000-word text copy</li>
                  <li>
                    Google Business Profile, Yellow Pages, Yelp, and 5+ more
                  </li>
                  <li>90 minutes of changes per month (we work FAST)</li>
                  {/* <li>1 complimentary consultation per month</li> */}
                  <li>2 search engine optimized blogs per month</li>
                  {/* <li>
                    +1200 words of content added each month that target new and
                    existing keywords
                  </li> */}
                </ul>
                <p className="italics">
                  *** You will own your content forever!
                </p>
              </Item>
              <Item className="spacing">
                <h2 className="title accent upper">advanced</h2>
                <p className="bold">Custom pricing</p>
                <p className="body--small italics">
                  For businesses looking to build a lasting brand and drive
                  growth{" "}
                </p>
                <ButtonSecondary to="/contact">
                  contact us &#8594;
                </ButtonSecondary>
                <ul>
                  <li>24/7 Support and maintenance</li>
                  <li>Monthly performance report</li>
                  <li>Daily site backups</li>
                  <li>Google Analytics</li>
                  <li>Accept payments online</li>
                  <li>FREE ticket to our monthly web class</li>
                  <li>Exclusive access to our weekly newsletter</li>
                  <li>Fully customizable website </li>
                  <li>Unlimited website pages</li>
                  <li>Unlimited website content</li>
                  <li>
                    Google Business Profile, Yellow Pages, Yelp, and 30+ more
                  </li>
                  <li>Unlimited minutes of changes per month (we work FAST)</li>
                  <li>Unlimited complimentary consultation per month</li>
                  <li>Unlimited search engine optimized blogs per month</li>
                  <li>Competitor and market analysis</li>
                  <li>Complete branding kit included</li>
                </ul>
              </Item>
            </GridThree>
          </Container>
        </Content>
      </GridWrapper>
    </Section>
  )
}

export default Pricing
