import React from "react"
import { Container, Section } from "../layoutComponents"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const GridWrapper = styled.div`
  //   display: grid;
  //   grid-template-rows: auto auto 4em;
`

const Text = styled.div`
  //   grid-row: 1 / span 2;
  //   grid-column: 1 / -1;
  //   z-index: 1;
  padding: 4em 0;
  max-width: 90ch;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`

const SliderWrapper = styled.div`
  //   grid-row: 2 / -1;
  //   grid-column: 1 / -1;
  //   z-index: 2;
`

const SliderItem = styled.div`
  padding: 1.5em;
  box-shadow: var(--shadow-light);
  h3 {
    text-transform: capitalize;
  }
`

export default function ComponentD() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Section>
      <GridWrapper>
        <Text className="spacing">
          <Container className="spacing">
            <div>
              <p className="subheader italics accent">
                Bringing a Fresh Perspective to Your Online Presence
              </p>
              <h2 className="title">
                Industry-Seasoned Web Designer in Calgary
              </h2>
            </div>
            <p>
              My Calgary Alberta web design services are meant to help a large
              variety of industries and professionals. So whether you run a
              local shop, or provide professional services, I’m here to build,
              manage, and market your professional business website.
            </p>
          </Container>
        </Text>
        {/* <SliderWrapper>
          <Container>
            <Slider {...settings}>
              <SliderItem className="spacing">
                <StaticImage
                  src="../../images/projects/calgary-web-design-for-concrete.jpg"
                  alt="calgary web design services for "
                />
                <h3 className="subheader">Home Service Professionals</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  commodi voluptatum praesentium provident neque nesciunt
                  distinctio sit voluptatem nemo inventore quod sed quas
                  reprehenderit perferendis eius quae eum odit, quisquam
                  pariatur alias? Assumenda dignissimos aspernatur, error porro
                  molestiae quas a quaerat iste quo! Veritatis minus cumque
                  facilis. Sequi, ad quaerat.
                </p>
              </SliderItem>
              <SliderItem className="spacing">
                <StaticImage
                  src="../../images/projects/calgary-web-design-for-concrete.jpg"
                  alt="calgary web design services for "
                />
                <h3 className="subheader">
                  Construction & General Contractors
                </h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  commodi voluptatum praesentium provident neque nesciunt
                  distinctio sit voluptatem nemo inventore quod sed quas
                  reprehenderit perferendis eius quae eum odit, quisquam
                  pariatur alias? Assumenda dignissimos aspernatur, error porro
                  molestiae quas a quaerat iste quo! Veritatis minus cumque
                  facilis. Sequi, ad quaerat.
                </p>
              </SliderItem>
              <SliderItem className="spacing">
                <StaticImage
                  src="../../images/projects/calgary-web-design-for-concrete.jpg"
                  alt="calgary web design services for "
                />
                <h3 className="subheader">engineers</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  commodi voluptatum praesentium provident neque nesciunt
                  distinctio sit voluptatem nemo inventore quod sed quas
                  reprehenderit perferendis eius quae eum odit, quisquam
                  pariatur alias? Assumenda dignissimos aspernatur, error porro
                  molestiae quas a quaerat iste quo! Veritatis minus cumque
                  facilis. Sequi, ad quaerat.
                </p>
              </SliderItem>
              <SliderItem className="spacing">
                <StaticImage
                  src="../../images/projects/calgary-web-design-for-concrete.jpg"
                  alt="calgary web design services for "
                />
                <h3 className="subheader">oil & gas</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  commodi voluptatum praesentium provident neque nesciunt
                  distinctio sit voluptatem nemo inventore quod sed quas
                  reprehenderit perferendis eius quae eum odit, quisquam
                  pariatur alias? Assumenda dignissimos aspernatur, error porro
                  molestiae quas a quaerat iste quo! Veritatis minus cumque
                  facilis. Sequi, ad quaerat.
                </p>
              </SliderItem>
              <SliderItem className="spacing">
                <StaticImage
                  src="../../images/projects/calgary-web-design-for-concrete.jpg"
                  alt="calgary web design services for "
                />
                <h3 className="subheader">law firms</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  commodi voluptatum praesentium provident neque nesciunt
                  distinctio sit voluptatem nemo inventore quod sed quas
                  reprehenderit perferendis eius quae eum odit, quisquam
                  pariatur alias? Assumenda dignissimos aspernatur, error porro
                  molestiae quas a quaerat iste quo! Veritatis minus cumque
                  facilis. Sequi, ad quaerat.
                </p>
              </SliderItem>
              <SliderItem className="spacing">
                <StaticImage
                  src="../../images/projects/calgary-web-design-for-concrete.jpg"
                  alt="calgary web design services for "
                />
                <h3 className="subheader">medical professionals</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  commodi voluptatum praesentium provident neque nesciunt
                  distinctio sit voluptatem nemo inventore quod sed quas
                  reprehenderit perferendis eius quae eum odit, quisquam
                  pariatur alias? Assumenda dignissimos aspernatur, error porro
                  molestiae quas a quaerat iste quo! Veritatis minus cumque
                  facilis. Sequi, ad quaerat.
                </p>
              </SliderItem>
              <SliderItem className="spacing">
                <StaticImage
                  src="../../images/projects/calgary-web-design-for-concrete.jpg"
                  alt="calgary web design services for "
                />
                <h3 className="subheader">manufacturing companies</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  commodi voluptatum praesentium provident neque nesciunt
                  distinctio sit voluptatem nemo inventore quod sed quas
                  reprehenderit perferendis eius quae eum odit, quisquam
                  pariatur alias? Assumenda dignissimos aspernatur, error porro
                  molestiae quas a quaerat iste quo! Veritatis minus cumque
                  facilis. Sequi, ad quaerat.
                </p>
              </SliderItem>
              <SliderItem className="spacing">
                <StaticImage
                  src="../../images/projects/calgary-web-design-for-concrete.jpg"
                  alt="calgary web design services for "
                />
                <h3 className="subheader">tech startups</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  commodi voluptatum praesentium provident neque nesciunt
                  distinctio sit voluptatem nemo inventore quod sed quas
                  reprehenderit perferendis eius quae eum odit, quisquam
                  pariatur alias? Assumenda dignissimos aspernatur, error porro
                  molestiae quas a quaerat iste quo! Veritatis minus cumque
                  facilis. Sequi, ad quaerat.
                </p>
              </SliderItem>
            </Slider>
          </Container>
        </SliderWrapper> */}
      </GridWrapper>
    </Section>
  )
}
