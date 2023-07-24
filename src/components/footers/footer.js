import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Info } from "../info"
import { Container } from "../layoutComponents"
import { ButtonInline } from "../buttons"

import Logo from "../../images/purple-parrot-websites-light.svg"
import AaronTonnerWebSolutionsLogo from "../../images/aaron-tonner-web-solutions-logo-white-white.svg"
import Facebook from "../../images/socials/facebook.svg"
import Instagram from "../../images/socials/instagram.svg"
import Twitter from "../../images/socials/twitter.svg"
import Linkedin from "../../images/socials/linkedin.svg"
import Youtube from "../../images/socials/youtube.svg"

const device = {
  sm: "43em",
  md: "48em",
  lg: "57em",
}

const FooterWrapper = styled.footer`
  padding: 4em 0 1em 0;
  background: var(--clr-dark);
  color: var(--txt-light);
`

export const Flex = styled.div`
  display: flex;
  img {
    width: 100%;
  }
  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 500px;
  }
`

const Socials = styled.div`
  display: flex;

  & > * + * {
    margin-left: 15px;
  }

  div {
    display: flex;

    & > * + * {
      margin-left: 5px;
    }
  }

  img {
    width: 25px;
  }
`

const FlexContact = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 5px;
  }

  a {
    color: var(--clr-accent);
    text-decoration: none;
  }

  p {
    margin-bottom: 0;
  }
`

const FlexItem = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin: var(--spacer) 0;

    li {
      a {
        color: var(--txt-light);
        font-weight: var(--fw-500);
      }
    }
  }
`

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  @media screen and (max-width: ${device.lg}) {
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media screen and (max-width: ${device.md}) {
      flex-direction: column;
    }

    & > * + * {
      margin-left: 1em;

      @media screen and (max-width: ${device.md}) {
        margin-left: 0;
      }
    }

    li {
      a {
        text-transform: capitalize;
        color: var(--txt-light);
        font-weight: var(--fw-500);
      }
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-transform: capitalize;
  color: var(--txt-light);
  font-weight: var(--fw-400);

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.7;
  }
`

const Author = styled.div`
  color: var(--txt-light-secondary);

  div {
    display: flex;
    gap: 0.5em;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
  }

  a {
    display: inline;
    color: var(--txt-light-secondary);
  }

  img {
    width: 150px;
  }
`

export default function Footer() {
  return (
    <div className="spacing-lg">
      <FooterWrapper className="spacing">
        <Container className="spacing-lg">
          <LogoContainer>
            <img src={Logo} alt="" />
          </LogoContainer>
          <hr />
          <Flex>
            <FlexItem>
              <p className="heading">get in touch</p>
              <ul>
                <li>
                  <FlexContact>
                    <a href="tel: 587-437-9161">587-437-9161</a>
                  </FlexContact>
                </li>
                <li>
                  <FlexContact>
                    <a href="mailto: aaron@purpleparrotwebsites.com">
                      aaron@purpleparrotwebsites.com
                    </a>
                  </FlexContact>
                </li>
                {/* <li>
                  <FlexContact>
                    <p>{Info.hours}</p>
                  </FlexContact>
                </li> */}
              </ul>
              {/* <ul>
                <li>{Info.street1}</li>
                <li>{Info.city1}</li>
                <li>Canada</li>
              </ul> */}
              <Socials>
                <div>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/aarontonnerwebsolutions/"
                  >
                    <img src={Facebook} alt="web design company calgary, AB" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/aaronjtonner/"
                  >
                    <img src={Instagram} alt="web design company calgary, AB" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/aarontonner"
                  >
                    <img src={Linkedin} alt="web design company calgary, AB" />
                  </a>
                </div>
              </Socials>
            </FlexItem>
            <FlexItem>
              <p className="heading">quick links</p>
              <ul>
                <li>
                  <StyledLink to="/">home</StyledLink>
                </li>
                {/* <li>
                  <StyledLink to="/about">about</StyledLink>
                </li>
                <li>
                  <StyledLink to="/portfolio">portfolio</StyledLink>
                </li>
                <li>
                  <StyledLink to="/reviews">reviews</StyledLink>
                </li> */}
                <li>
                  <StyledLink to="/contact">contact</StyledLink>
                </li>
              </ul>
            </FlexItem>
            <FlexItem className="spacing">
              <p className="heading">about</p>
              <p>
                Save money and never get locked into a toxic contract again. Get
                a customized website for $0 down, $249 per month, no minimum
                monthly contract, and pay-as-you-go. Our prebuilt websites are
                less expensive compared to regular, custom-built websites while
                providing the same benefits to your business.
              </p>
            </FlexItem>
          </Flex>
          <hr />
          <Copyright>
            <ul>
              <li>Copyright&#169; 2023</li>
              <li>Purple Parrot Websites</li>
              <li>All Rights Reserved</li>
              <li>
                <a
                  target="blank"
                  href="https://www.aarontonner.com/terms-of-use"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.aarontonner.com/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Copyright>
        </Container>
      </FooterWrapper>
    </div>
  )
}
