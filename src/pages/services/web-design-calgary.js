import React from "react"
import { Helmet } from "react-helmet"
import BannerSecondary from "../../components/banners/bannerSecondary"
import { ButtonPrimary } from "../../components/buttons"
import Layout from "../../components/layout"
import {
  Container,
  Flex,
  FlexMobileOpp,
  Section,
} from "../../components/layoutComponents"
import SEO from "../../components/seo"
import ComponentA from "../../components/components/componentA"
import AllReviews from "../../components/reviews"
import Clients from "../../components/components/clients"
import ComponentB from "../../components/components/componentB"
import Benefits from "../../components/components/benefits"
import ComponentC from "../../components/components/componentC"
import Gallery from "../../components/components/gallery"
import Cta1 from "../../components/components/Cta1"
import { StaticImage } from "gatsby-plugin-image"
import ComponentD from "../../components/components/componentD"
import Faq1 from "../../components/components/Faq1"
import ComponentE from "../../components/components/componentE"
import FormContact from "../../components/forms/formContact"

export default function WebDesignCalgary() {
  return (
    <Layout>
      <SEO
        title="Custom Web Design Calgary | Fully Optimized Custom Websites For Maximum Impact"
        description="High-performance custom Calgary website design services that implement winning SEO strategies for maximum online impact. Call me directly at 587-437-9161."
      />
      <Helmet>
        <script type="application/ld+json">
          {`
{
              "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Aaron Tonner Web Solutions",
  "url": "https://www.aarontonner.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "{search_term_string}",
    "query-input": "required name=search_term_string"
  }
            }, 
            {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Aaron Tonner Web Solutions",
  "image": "https://aarontonner.com/images/logo-white-bg.png",
  "@id": "",
  "url": "https://www.aarontonner.com/",
  "telephone": "5874379161",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Calgary",
    "addressRegion": "AB",
    "postalCode": "T2X 0G7",
    "addressCountry": "CA"
  },
"review": {
        {
      "@type": "Review",
      "author": "James Ross",
      "datePublished": "2021-09-28",
      "reviewBody": "Before I met Aaron we were operating under the radar relying on word of mouth and referrals. He reached out via email about his business solutions and his professionalism and confidence made for an easy decision. We hired him for our website / business solutions for better exposure and marketing and with very little input on my end his initial design and layout was spot on to our branding. A true start to finish turn key operation - answered emails promptly, took the time for video calls, handled our changes and suggestions almost instantly and was always patient and willing to go the extra mile for our needs. I highly recommend Aaron to any business not only looking for a great website but to increase revenue and exposure. The tools he installed have already increased our customer connections.",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "ratingValue": "5"
      }
    },
{
      "@type": "Review",
      "author": "Nick Holder",
      "datePublished": "2021-08-31",
      "reviewBody": "We couldn't be happier with our choice to hire Aaron for our web design project. We were asking a lot as not only did we want the finished site to look great, but we wanted it to be very easy for us to customise and add to ourselves. Aaron exceeded our expectations in both regards and kept us updated on a daily basis often by making demo videos to show the direction he was taking and give us insight into how we would be able to work with the site moving forward. One of the best things about working with Aaron was the ideas and suggestions he came up with to take our project to a more professional level. We really wanted someone who could show us the way and come up with ideas for us and this is exactly what we got. We threw all sorts of challenges Aaron's way and each time he came back with a number of options for us and was even willing to create iterations to help us choose the best solution. An example that springs to mind is our choice of homepage image which created problems when making overlaying text readable across all the devices. Aaron was able to fix this so that not only could we use the image we had chosen but the text is beautifully displayed on whichever device it is viewed from. We had a tight deadline for this project and Aaron was very conscious of this and organised the project in such a way that we comfortably achieved that. We can not recommend Aaron highly enough and already have plans to work with him in the future. Many thanks Aaron!",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "ratingValue": "5"
      }
    },
{
      "@type": "Review",
      "author": "Patrick Pierre",
      "datePublished": "2021-09-27",
      "reviewBody": "Communication is the biggest challenge in successfully completing projects with other web designers and developers, but Aaron always makes communication online to be effortless. Aaron Tonner Web Solutions provides the best web design and development services in Calgary and I highly recommend him for your next website project. Not only does he provide web design work, but also quality SEO services so that a business can easily be found online.",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "ratingValue": "5"
      }
    }
      },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.882110,
    "longitude": -114.077640
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "16:00"
  },
  "sameAs": [
    "https://www.facebook.com/AaronTonnerWebSolutions",
    "https://www.instagram.com/aaronjtonner/",
    "https://www.linkedin.com/in/aarontonner/",
    "https://www.aarontonner.com/"
  ] 
}
          `}
        </script>
      </Helmet>
      <BannerSecondary
        to1="/"
        link1="home"
        to2="/services"
        link2="services"
        to3="/services/web-design-calgary"
        link3="web design calgary"
        title="Transform Your Website Into A Sales Machine With Web Design Calgary, AB"
        description="Work with an independent and highly reviewed web design Calgary specialist focused on helping clients achieve increased online visibility and customer conversions to maximize business revenue."
      />
      <Section>
        <Container className="center spacing">
          <p className="title">
            <span className="text-shadow">oh yeah,</span> there's more where
            that came from...
          </p>
          <ButtonPrimary to="/portfolio">view portfolio &#8594;</ButtonPrimary>
        </Container>
      </Section>
      <ComponentA />
      <Clients />
      <AllReviews
        subheader="Does Creating a vital, viable website elude you?"
        title="dedicated to providing real results for calgary web design
                  clients"
      />
      <Benefits />
      <Cta1 />
      <Gallery />
      <ComponentC />
      <Cta1 />
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
              src="../../images/custom-website-design-calgary.jpg"
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
              src="../../images/calgary-website-development-services.jpg"
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
              src="../../images/website-maintenance-services-calgary.jpg"
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
              src="../../images/projects/free-web-hosting-services-calgary.jpg"
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
              src="../../images/calgary-seo-services.jpg"
              alt="calgary seo services"
            />
          </Flex>
        </Container>
      </Section>
      <Cta1 />
      <ComponentD />
      <Faq1 />
      <ComponentE />
      <FormContact />
      <Cta1 />
    </Layout>
  )
}
