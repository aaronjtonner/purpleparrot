import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonInline } from "../buttons"
import { Container, Section } from "../layoutComponents"

const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  grid-gap: 2em;

  & > * {
    justify-self: center;
    align-self: center;
  }
`

export default function Clients() {
  return (
    <Section>
      <Container className="spacing">
        <GridAuto>
          <StaticImage
            src="../../images/clients/web-design-calgary-client-1.svg"
            alt="web design calgary, AB client"
          />
          <StaticImage
            src="../../images/clients/calgary-web-design-client-2.svg"
            alt="calgary web design client"
          />
          <StaticImage
            src="../../images/clients/calgary-website-design-client-3.svg"
            alt="calgary website design client"
          />
          <StaticImage
            src="../../images/clients/website-design-calgary-client-4.svg"
            alt="website design calgary client"
          />
          <StaticImage
            src="../../images/clients/web-designer-calgary-client-5.svg"
            alt="web designer calgary client"
          />
          <StaticImage
            src="../../images/clients/calgary-web-designer-client-6.svg"
            alt="calgary web designer client"
          />
          <StaticImage
            src="../../images/clients/best-calgary-web-design-client-7.svg"
            alt="best calgary web design client"
          />
          <StaticImage
            src="../../images/clients/best-calgary-website-designer-client-8.svg"
            alt="best calgary website designer client"
          />
          <StaticImage
            src="../../images/clients/website-designers-calgary-client-9.svg"
            alt="website designers calgary client"
          />
          <StaticImage
            src="../../images/clients/calgary-website-designers-client-10.svg"
            alt="calgary website designers client"
          />
          <StaticImage
            src="../../images/clients/web-designers-calgary-client-11.svg"
            alt="website designers calgary client"
          />
          <StaticImage
            src="../../images/clients/web-design-calgary-client-12.svg"
            alt="web design calgary client"
          />
          <StaticImage
            src="../../images/clients/web-design-calgary-client-13.svg"
            alt="web design calgary client"
          />
          <StaticImage
            src="../../images/clients/web-design-calgary-client-14.svg"
            alt="web design calgary client"
          />
          <StaticImage
            src="../../images/clients/web-design-calgary-client-15.svg"
            alt="web design calgary client"
          />
        </GridAuto>
      </Container>
    </Section>
  )
}
