import * as React from "react"
import styled from "styled-components"
import BannerPrimary from "../components/banners/bannerPrimary"
import { ButtonInline } from "../components/buttons"

import Layout from "../components/layout"
import { Container, Section } from "../components/layoutComponents"
import SEO from "../components/seo"

const Text = styled.div`
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
`

const NotFoundPage = () => (
  <Layout>
    <BannerPrimary
      title="This page has recently been updated"
      description="You can find the new web design page by scrolling down to click the new link, or you can use the top navigation and find it under Services > Web Design Calgary."
    />
    <Section>
      <Container>
        <Text>
          <h1>It's likely you're looking for my updated web design page. </h1>
          <ButtonInline to="/serivces/web-design-calgary">
            Simply click this link to navigate to the new page &#x2192;
          </ButtonInline>
        </Text>
      </Container>
    </Section>
  </Layout>
)

export const Head = () => <SEO title="This page has been updated" />

export default NotFoundPage
