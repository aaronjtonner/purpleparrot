import React from "react"
import styled from "styled-components"
import BannerPrimary from "../components/banners/bannerPrimary"
import BannerSecondary from "../components/banners/bannerSecondary"
import { AnchorInline, ButtonInline } from "../components/buttons"
import FormContact from "../components/forms/formContact"
import Layout from "../components/layout"
import { Container, GridAuto, Section } from "../components/layoutComponents"
import SEO from "../components/seo"
import { FaStar, FaGoogle } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import Cta1 from "../components/components/Cta1"

const Text = styled.div`
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
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

export default function Reviews() {
  return (
    <Layout>
      <SEO
        title="Reviews | Aaron Tonner Web Solutions | Websites & SEO"
        description="Have a look at some of the 5-star reviews that other local business owners have written based on their experience in working with me on their website or SEO. Call 587-437-9161."
      />
      <BannerPrimary
        to1="/"
        link1="Home"
        to2="/reviews"
        link2="Reviews"
        title="Reviews"
        description="I do things differently here... I build websites to help your business get REAL results (just like how I helped a local contractor 16X his service calls). That's probably why I'm so highly reviewed (yeah, I said it)."
      />
      <Section>
        <Container>
          <Text className="spacing">
            <h2 className="title center">5-star reviews</h2>
            <p className="center">
              {/* I'm currently working on this about page. When it's live, you'll
              find more information about how I might be able to help your
              business website or SEO. In the meantime, use the{" "}
              <ButtonInline to="/services/web-design-calgary">
                web design service page
              </ButtonInline>{" "}
              for more information. */}
            </p>
          </Text>
          <div className="spacing-md">
            <Review
              name="Nick Holder, Megasets.ai"
              review="We couldn't be happier with our choice to hire Aaron for our web design project. We were asking a lot as not only did we want the finished site to look great, but we wanted it to be very easy for us to customise and add to ourselves. Aaron exceeded our expectations in both regards and kept us updated on a daily basis often by making demo videos to show the direction he was taking and give us insight into how we would be able to work with the site moving forward. One of the best things about working with Aaron was the ideas and suggestions he came up with to take our project to a more professional level. We really wanted someone who could show us the way and come up with ideas for us and this is exactly what we got. We threw all sorts of challenges Aaron's way and each time he came back with a number of options for us and was even willing to create iterations to help us choose the best solution. An example that springs to mind is our choice of homepage image which created problems when making overlaying text readable across all the devices. Aaron was able to fix this so that not only could we use the image we had chosen but the text is beautifully displayed on whichever device it is viewed from. We had a tight deadline for this project and Aaron was very conscious of this and organised the project in such a way that we comfortably achieved that. We can not recommend Aaron highly enough and already have plans to work with him in the future. Many thanks Aaron!"
            />

            <Review
              name="Andrew Baker, IT Done Right"
              review="As an IT Professional working in Cyber Security and Networking, Website maintenance and security is another necessary aspect of protecting a businesses revenue and reputation.  I've been happy to recommend Aaron Tonner Web Solutions as not only do they accel at looking forward for keyword searches(SEO), scale, and developing for funneled marketing campaigns - they also ensure the steps are taken to protect a website to prevent it from getting compromised.  5 stars for this great company!"
            />
            <Review
              name="Patrick Pierre"
              review="Communication is the biggest challenge in successfully completing projects with other web designers and developers, but Aaron always makes communication online to be effortless. Aaron Tonner Web Solutions provides the best web design and development services in Calgary and I highly recommend him for your next website project. Not only does he provide web design work, but also quality SEO services so that a business can easily be found online."
            />
            <Review
              name="J Camier"
              review="Aaron, is an excellent, Web UX developer. He was able to refactor my front-end website html/css/js code and make it mobile responsive and professional."
            />
            <Review
              name="Jay P"
              review="Aaron is amazing. Very knowledgeable and professional. I would recommend him to any business owner I know. He gets results and has the proof to back them up."
            />
            <Review
              name="Wayne Weskin"
              review="Aaron is full of creativity, knowledge and more importantly care for his clients.  Highly recommend Aaron!
"
            />
            <Review
              name="Parvaneh Vejdani"
              review="Aaron Tonner is very professional and knowledgeable. He does care for his clients and love to help them to solve their problems. I Higley recommend Aaron for all your website needs."
            />
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
          </div>
        </Container>
      </Section>
      <FormContact />
      <Cta1 />
    </Layout>
  )
}
