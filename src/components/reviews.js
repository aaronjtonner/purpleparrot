import React from "react"
import styled from "styled-components"
import { FaStar, FaGoogle } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { StaticImage } from "gatsby-plugin-image"
import { Container, GridAuto, Section } from "./layoutComponents"
import { ButtonInline, ButtonPrimary } from "./buttons"

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 2em auto 4em auto;
  grid-template-rows: 8em auto 4em;

  @media screen and (max-width: 48em) {
    display: flex;
    flex-direction: column;
    background: var(--clr-dark);
    padding-bottom: 4em;
  }
`

const Bg = styled.div`
  background: var(--clr-dark);
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 1;
  @media screen and (max-width: 48em) {
    display: none;
    
`

const Text = styled.div`
  padding: 4em 0;
  grid-row: 2 / -1;
  grid-column: 4 / -1;
  z-index: 2;

  .light {
    color: var(--txt-light);
  }
`

const Reviews = styled.div`
  grid-row: 1 / span 2;
  grid-column: 2 / span 1;
  z-index: 2;
`

const Wrapper = styled.div`
  background: var(--clr-light-secondary);
  color: var(--txt-dark);
  padding: 2em;
  border-radius: var(--br);
  box-shdaow: var(--shadow-bottom-light);
  height: 100%;
  a {
    text-decoration: underline;
    font-size: var(--fs-sm);
  }
`

const FlexStars = styled.div`
  display: flex;
  & > * + * {
    margin-left: 5px;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  & * + * {
    margin-left: 2px;
  }
`

const fontStyle = {
  color: "var(--clr-accent)",
}

const Review = props => {
  return (
    <Wrapper className="spacing">
      <FlexStars>
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
      </FlexStars>
      <p className="italics">"{props.review}"</p>

      <Flex>
        <FcGoogle size={35} />
        <div>
          <p className="caps bold">{props.name}</p>
          <a
            href="https://www.google.com/maps/place/Aaron+Tonner+Web+Solutions/@51.0276233,-114.087835,10z/data=!4m8!3m7!1s0x8984d19ad4196043:0xa41e3748c364663b!8m2!3d51.0276233!4d-114.087835!9m1!1b1!16s%2Fg%2F11p001rjcp"
            target="_blank"
            className="accent"
          >
            Read more Google reviews &#8594;
          </a>
        </div>
      </Flex>
    </Wrapper>
  )
}

const AllReviews = props => {
  return (
    <Section>
      <GridWrapper>
        <Bg />
        <Text>
          <Container className="spacing-lg">
            {/* <FlexStars>
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
            </FlexStars> */}
            <div className="spacing-md">
              <div>
                <p className="subheader accent">{props.subheader}</p>
                <h2 className="title light">{props.title}</h2>
              </div>
              <div className="spacing">
                <p className="light">
                  We understand that our clients are busier than ever, and they
                  don't have enough time to focus on building a website for
                  their business. That's why our websites are prebuilt - with
                  the Purple Parrot's, our clients don't have to spend a single
                  minute on getting a website launched.
                </p>
                <p className="light">
                  A lot of our clients don't have the cash flow for a large
                  upfront investment - our websites are $0 down, starting at
                  $195 per month with no minimum contract. Our clients love
                  saving money!
                </p>
                <p className="light">
                  For most of the websites we've worked on, our clients didn't
                  have any photos or content of their own - the Purple Parrot's
                  get your started with unique and customized SEO content
                  written by industry professionals, while sourcing unique,
                  high-quality photos online.
                </p>
              </div>
              <ButtonPrimary to="/contact">
                get started with a free trial &#8594;
              </ButtonPrimary>
            </div>
            {/* <FlexStars>
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
            </FlexStars> */}
          </Container>
        </Text>
        <Reviews className="spacing">
          <Container className="spacing">
            <Review
              name="Rob Thiessen, 3'D Revolution Technologies Inc"
              review="I really enjoyed working collaboratively with Aaron. He's very adept at what he does, and efficient as well. I also appreciated the professionalism he brought to my online communications with clients. His advise was always solid and thoughtful, and with his help I've been able to communicate my unique business and value proposition to clients much more effectively. This includes website and direct communications. I wouldn't hesitate to recommend Aaron Tonner Web Solutions to other business owners!"
            />
            <Review
              name="James Ross, Royco Electric Ltd"
              review="We hired him for our website / business solutions for better exposure and marketing and with very little input on my end his initial design and layout was spot on to our branding.  A true start to finish turn key operation - answered emails promptly, took the time for video calls, handled our changes and suggestions almost instantly and was always patient and willing to go the extra mile for our needs.  I highly recommend Aaron to any business not only looking for a great website but to increase revenue and exposure.  The tools he installed have already increased our customer connections."
            />
            <Review
              name="Kathryn Kessler, Pacha Mamma Massage & Misty Ridge Retreat B&B"
              review="Before seeking Aaron’s help, our websites (Misty Ridge Retreat B&B & Pacha Mamma Massage) were bare bones, made quickly without the bells and whistles or any SEO research. Creating a vital, viable website was something that eluded us as well as finding time to learn. Aaron recreated both sites masterfully. We would recommend Aaron to anyone who is having the same struggle as we did. Aaron is very knowledgeable, creative and patient with clients, like me, who do not know the technical side of website building."
            />
          </Container>
        </Reviews>
      </GridWrapper>
    </Section>
  )
}

export default AllReviews
