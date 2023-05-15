import React from "react"
import BannerPrimary from "../components/banners/bannerPrimary"
import BannerSecondary from "../components/banners/bannerSecondary"
import FormContact from "../components/forms/formContact"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact | Purple Parrot Websites | Website Leasing Service"
        description="Whether you're ready to get a deal of your life with a brand new, custom SEO website, or you're just looking to get some questions answered, don't hesitate in reaching out."
      />
      <BannerPrimary
        to1="/"
        link1="Home"
        to2="/contact"
        link2="Contact"
        title="book your free call now!"
        description="Whether you're ready to get a deal of your life with a brand new, custom SEO website, or you're just looking to get some questions answered, don't hesitate in reaching out."
      />
      <FormContact />
    </Layout>
  )
}
