import React from "react"
import styled from "styled-components"
import BannerPrimary from "../components/banners/bannerPrimary"
import BannerSecondary from "../components/banners/bannerSecondary"
import { AnchorInline, ButtonInline } from "../components/buttons"
import Gallery from "../components/components/gallery"
import FormContact from "../components/forms/formContact"
import Layout from "../components/layout"
import {
  Container,
  Flex,
  FlexMobileOpp,
  Section,
} from "../components/layoutComponents"
import SEO from "../components/seo"
import { ButtonPrimary } from "../components/buttons"
import { StaticImage } from "gatsby-plugin-image"
import Cta1 from "../components/components/Cta1"

const Text = styled.div`
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
`

export default function Services() {
  return (
    <Layout>
      <SEO
        title="Digital Marketing Services in Calgary, AB | Aaron Tonner Web Solutions"
        description="Next-level digital marketing services in Calgary, AB. Designed to help your business grow through custom SEO websites. Call 587-437-9161 to get started."
      />
      <BannerPrimary
        to1="/"
        link1="Home"
        to2="/services"
        link2="Services"
        title="Digital Marketing Services in Calgary"
        description="I am an independent digital marketer based in Calgary offering website design, website development, and local SEO services. I do things differently here... I build, manage, and market websites and SEO campaigns to help your business get REAL results (just like how I helped a local contractor 16X his service calls)."
      />
      <Section>
        <Container>
          <Flex>
            <div className="spacing">
              <div>
                <p className="subheader accent italics">
                  Drive your Sales and Growth
                </p>
                <h2 className="title">
                  high-performance custom website design calgary
                </h2>
              </div>
              <p>
                I have been highly reviewed after working with a variety of
                industries including tech startups, ecommerce businesses, home
                renovators, electricians, concrete contractors, 3D printing
                shops and other professional service providers. If you’re
                looking for reputable website design companies in Calgary, you
                have met your match! <br />
                <br /> It is my goal to create an outstanding website design
                that will help grow your business by getting more visibility and
                search traffic from quality customers online. <br />
                <br /> Your customers and clients have high expectations for
                your online appearance and it’s important that you stand out
                from your local competition with a custom website design. I’m
                not just going to choose a random template builder and throw
                your information into it. Whether you’re due for a redesign, or
                a new website altogether, I’m going to come up with a custom web
                design Calgary solution that your customers will love and
                remember. <br />
                <br /> An outstanding website will not only help you get
                recognized, it will help you land bigger and better sales for
                your business. The process that your new Calgary website
                designer has perfected over the years includes optimizing the
                web page for a fantastic user experience and user interface
                meant to optimize customer conversions directly through your
                website. <br />
                <br /> The goal is to help you{" "}
                <span className="italics bold">make sales in your sleep!</span> 
              </p>
              <ButtonPrimary to="/contact">
                get a custom website &#8594;
              </ButtonPrimary>
            </div>
            <StaticImage
              class="stretch"
              src="../images/custom-website-design-calgary.jpg"
              alt="custome website design calgary, AB"
            />
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <FlexMobileOpp>
            <StaticImage
              class="stretch img-left"
              src="../images/calgary-website-development-services.jpg"
              alt="calgary website development services"
            />
            <div className="spacing">
              <div>
                <p className="subheader bold italics caps accent">
                  make customers fall in love with you, FAST
                </p>
                <h2 className="title">
                  calgary website development services for Wicked-Fast Websites
                </h2>
              </div>
              <p>
                As your full-service web consultant, I provide high-quality
                Calgary web development services that will bring the design to
                life on a fully-functioning and error-free, wicked-fast website
                that provide an insanely friendly user experience for customers
                to remember you by. Along with website speed and performance
                optimization, my Calgary web development process includes
                responsive CSS for a mobile-friendly design that will add to a
                great user experience for your customers. I will have a live
                website staging link that you can use to check in on the
                progress of your project at any time. Along with that, I also
                provide weekly progress updates in order to keep you fully in
                the loop on your Calgary website design and development project.
              </p>
              <ButtonPrimary to="/contact">talk to me today</ButtonPrimary>
            </div>
          </FlexMobileOpp>
        </Container>
      </Section>
      <Section>
        <Container>
          <Flex>
            <div className="spacing">
              <div>
                <p className="subheader bold caps accent italics">
                  maintain customer trust
                </p>
                <h2 className="title">website maintenance & updates</h2>
              </div>
              <p>
                I provide regular website maintenance and updates to ensure that
                your customers remain up-to-date as your business evolves.
                Updating the content on your site builds trust between you and
                your customers. If you’re in need of website maintenance
                services Calgary, get in touch with me today!
              </p>
              <ButtonPrimary to="/contact">
                get a maintenance plan &#8594;
              </ButtonPrimary>
            </div>
            <StaticImage
              class="stretch img-right"
              src="../images/website-maintenance-services-calgary.jpg"
              alt="website maintenance services calgary, AB"
            />
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <FlexMobileOpp>
            <StaticImage
              class="stretch img-left"
              src="../images/projects/free-web-hosting-services-calgary.jpg"
              alt="web hosting services calgary"
            />
            <div className="spacing">
              <div>
                <p className="subheader bold caps accent italics">
                  keep the hackers away
                </p>
                <h2 className="title">website hosting & security</h2>
              </div>
              <p>
                Not only will you receive top-notch customer service from your
                web designer Calgary, you’ll also be provided with free website
                hosting solutions through the use of Netlify and Github. The
                combination of these technologies provide fast, secure, and
                reliable website hosting solutions that takes the work off your
                hands. 
              </p>
              <ButtonPrimary to="/contact">
                get hosting services &#8594;
              </ButtonPrimary>
            </div>
          </FlexMobileOpp>
        </Container>
      </Section>
      <Section>
        <Container>
          <Flex>
            <div className="spacing">
              <div>
                <p className="subheader bold caps accent italics">
                  get seen, EVERYWHERE
                </p>
                <h2 className="title">
                  search engine optimization (calgary SEO services)
                </h2>
              </div>
              <p>
                Need website SEO support service in Calgary Alberta? Included in
                my website services are image optimization and semantic HTML and
                quality code to make it easier for your business to be found on
                google. Along with that, I optimize page layout and create
                compelling SEO content and other internet marketing services to
                help increase your website visibility on search engines like
                google. I’ll set up google analytics for your website to monitor
                user engagement and interaction data, as well as submit your
                sitemap to the google search console so your website will get
                indexed by google to show up in the search results.
              </p>
              <ButtonPrimary to="/contact">
                get SEO services &#8594;
              </ButtonPrimary>
            </div>
            <StaticImage
              class="stretch img-right"
              src="../images/calgary-seo-services.jpg"
              alt="calgary seo services"
            />
          </Flex>
        </Container>
      </Section>
      <Cta1 />
      <Gallery />
      <FormContact />
    </Layout>
  )
}
