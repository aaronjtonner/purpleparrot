import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { AnchorInline, ButtonInline, ButtonPrimary } from "../buttons"
import { Container, GridTwo, Section } from "../layoutComponents"

const Text = styled.div`
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const Item = styled.a`
  text-decoration: none;
  position: relative;
  .project-img {
    z-index: 2;
  }
  h3 {
    font-family: var(--ff-alfa);
    font-size: var(--fs-2);
    color: var(--txt-light);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: var(--clr-dark);
  }

  &:hover {
    .overlay {
      opacity: 0.8;
      z-index: 2;
    }
    h3 {
      z-index: 3;
    }
  }
`

export default function Gallery() {
  return (
    <Section>
      <Container className="spacing">
        <Text>
          <h2 className="title">
            the <span className="text-shadow italics">perfect</span> website for
            your business
          </h2>
          <p>
            Below are a few recent{" "}
            <ButtonInline
              to="/services/web-design-calgary"
              className="italics bold"
            >
              Calgary Alberta website design
            </ButtonInline>{" "}
            and development projects that I’ve launched to help local businesses
            just like yours grow and expand their online presence and get seen
            by more customers that are searching for their services on the
            internet. Simply click on the images below and you will be taken to
            the corresponding live website.
          </p>
        </Text>
        <GridTwo>
          <Item target="_blank">
            <StaticImage
              className="stretch project-img"
              src="../../images/projects/calgary-web-design-for-landscaper.jpg"
              alt="calgary web design service for landscaper"
            />
            <h3 className="subheader caps">in progress</h3>
            <div className="overlay"></div>
          </Item>
          <Item href="https://innerspiritphoto.com/" target="_blank">
            <StaticImage
              className="stretch project-img"
              src="../../images/projects/calgary-web-design-for-photographer.jpg"
              alt="calgary website design service for photographer"
            />
            <h3 className="subheader caps">visit website</h3>
            <div className="overlay"></div>
          </Item>
          <Item href="https://bfirenovations.ca/" target="_blank">
            <StaticImage
              className="stretch project-img"
              src="../../images/projects/calgary-web-design-for-renovator.jpg"
              alt="calgary website design service for renovator"
            />
            <h3 className="subheader caps">visit website</h3>
            <div className="overlay"></div>
          </Item>
          <Item href="https://www.roycoelectric.com/" target="_blank">
            <StaticImage
              className="stretch project-img"
              src="../../images/projects/calgary-web-design-for-electrician.jpg"
              alt="calgary web designer service for electrician"
            />
            <h3 className="subheader caps">visit website</h3>
            <div className="overlay"></div>
          </Item>
          <Item href="https://www.klaadglass.ca/" target="_blank">
            <StaticImage
              className="stretch project-img"
              src="../../images/projects/calgary-web-design-for-contractor.jpg"
              alt="web designer calgary service for contractor"
            />
            <h3 className="subheader caps">visit website</h3>
            <div className="overlay"></div>
          </Item>
          <Item href="https://www.3drtinc.com/" target="_blank">
            <StaticImage
              className="stretch project-img"
              src="../../images/projects/calgary-web-design-for-3d-printing.jpg"
              alt="web designer calgary service for 3d printing"
            />
            <h3 className="subheader caps">visit website</h3>
            <div className="overlay"></div>
          </Item>
          <Item href="https://www.iconformingsystems.com/" target="_blank">
            <StaticImage
              className="stretch project-img"
              src="../../images/projects/calgary-web-design-for-concrete.jpg"
              alt="web designer calgary service for concrete contractor"
            />
            <h3 className="subheader caps">visit website</h3>
            <div className="overlay"></div>
          </Item>
          <Item href="https://www.mistyridgeretreatbandb.com/" target="_blank">
            <StaticImage
              className="stretch project-img"
              src="../../images/projects/calgary-web-design-for-bb.jpg"
              alt="calgary web design service for alberta based b&b"
            />
            <h3 className="subheader caps">visit website</h3>
            <div className="overlay"></div>
          </Item>
          <Item href="https://www.bookwithkathryn.com/" target="_blank">
            <StaticImage
              className="stretch project-img"
              src="../../images/projects/calgary-web-design-for-massage.jpg"
              alt="calgary web design service for foothills based massager"
            />
            <h3 className="subheader caps">visit website</h3>
            <div className="overlay"></div>
          </Item>
          <Item href="https://www.truenorthautoloans.com/" target="_blank">
            <StaticImage
              className="stretch project-img"
              src="../../images/projects/calgary-web-design-for-finance.jpg"
              alt="calgary web design service for canadian auto loaner"
            />
            <h3 className="subheader caps">visit website</h3>
            <div className="overlay"></div>
          </Item>
        </GridTwo>
        <div className="center spacing">
          <h3 className="italics caps">request a quote</h3>
          <p>
            Call me at{" "}
            <AnchorInline href="tel: 587-437-9161">587-437-9161</AnchorInline>{" "}
            or fill out my{" "}
            <ButtonInline to="/contact">contact form</ButtonInline> to request a
            service or free Calgary website quote!
          </p>
          <ButtonPrimary to="/contact">request quote &#x2192;</ButtonPrimary>
        </div>
      </Container>
    </Section>
  )
}
