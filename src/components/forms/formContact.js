import React from "react"
import styled from "styled-components"

import { Section, Container, Flex, FlexMobileOpp } from "../layoutComponents"
import { Label, Input, TextArea, Submit } from "./formItems"
import Map from "../map"
import { AnchorInline } from "../buttons"

const Text = styled.div`
  max-width: 90ch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const FormWrapper = styled.div`
  // background: var(--clr-dark);
  // color: var(--txt-light);
  // padding: 2em;
`

export default function FormContact(props) {
  return (
    <Section>
      <Container>
        <Text>
          <h3 className="title italics">
            Pinch Yourself, It's Real! Let's Chat and Make Your Dreams Come
            True!
          </h3>
          <p className="">
            Need to unload some burning questions, fears, or doubts? Reach out
            to your Purple Parrot's using the form below! We will handle your
            inquiry with the utmost care and attention - after all, we wouldn't
            want any rogue parrots flying around!
          </p>
        </Text>
        <Flex className="spacing-lg">
          {/* flex item 1 */}
          <FormWrapper>
            <form
              name="contact"
              className="spacing"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <Flex>
                <div className="spacing-sm">
                  <Label htmlFor="name">* Name:</Label>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="spacing-sm">
                  <Label htmlFor="email">* Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </Flex>
              <div className="spacing-sm">
                <Label htmlFor="phone">* Phone:</Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="spacing-sm">
                <Label htmlFor="subject">Subject:</Label>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="spacing-sm">
                <Label htmlFor="msg">* Message:</Label>
                <TextArea
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="10"
                  placeholder="Talk to us, we won't bite (promise!) - but we can't vouch for our resident office parrot!"
                  required
                />
              </div>
              <Submit type="submit" id="submit" value="send" />
            </form>
          </FormWrapper>
          {/* flex item 2 */}
          <Map className="stretch" />
        </Flex>
      </Container>
    </Section>
  )
}
