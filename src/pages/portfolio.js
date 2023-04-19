import React from "react"
import styled from "styled-components"
import BannerPrimary from "../components/banners/bannerPrimary"
import BannerSecondary from "../components/banners/bannerSecondary"
import { AnchorInline, ButtonInline } from "../components/buttons"
import Gallery from "../components/components/gallery"
import FormContact from "../components/forms/formContact"
import Layout from "../components/layout"
import { Container, Section } from "../components/layoutComponents"
import SEO from "../components/seo"

const Text = styled.div`
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
`

export default function Portfolio() {
  return (
    <Layout>
      <SEO
        title="Portfolio | Aaron Tonner Web Solutions | Websites & SEO"
        description="See my portfolio to view high-performance custom websites that implement winning SEO strategies for my clients. Call me at 587-437-9161 to learn more."
      />
      <BannerPrimary
        to1="/"
        link1="Home"
        to2="/portfolio"
        link2="Web Design Portfolio"
        title="web design portfolio"
        description="I do things differently here... I build websites to help your business get REAL results (just like how I helped a local contractor 16X his service calls)"
      />
      <Gallery />
      <FormContact />
    </Layout>
  )
}
