import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react"
import { Container, FlexMobileOpp, Section } from "../layoutComponents"
import styled from "styled-components"
import { ButtonSecondaryLight } from "../buttons"

const Wrapper = styled.div`
  background: var(--clr-dark);
  color: var(--txt-light);
`

const AccordionStyle = {
  background: "var(--clr-light)",
  color: "var(--txt-dark)",
  borderRadius: "var(--br)",
  border: "none",
}

export default function Faq1(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <Accordion className="spacing">
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      A Website Can Help Your Business Grow
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    <li>
                      A website will put your business online and in front of
                      customers who are constantly searching for the services or
                      products that you offer, leading to new business
                      opportunities and company growth.
                    </li>
                    <li>
                      A website can target high quality employees leading to
                      better teams for your business
                    </li>
                    <li>
                      A website is your online salesman and it’s answering
                      common questions and reducing the doubts and fears that a
                      customer might have when looking to make a hiring
                      decision, leading to more sales and growth opportunities
                    </li>
                    <li>
                      A professionally designed website builds trust within your
                      customers which can easily generate more sales for your
                      business
                    </li>
                    <li>
                      A website can directly help you business appear larger
                      than you are, making it easier to grow as a business
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      A Website Can Improve Your Brand Awareness
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    <li>
                      Customers won’t know about you if they can’t find you
                      online. A website is going to improve the chances that
                      your business is found by a customer online, thus
                      improving brand awareness
                    </li>
                    <li>
                      A website can be used for online advertising and
                      promotions in order to improve brand awareness and market
                      reach
                    </li>
                    <li>
                      Your website is a resource to customers by answering
                      common questions about a service or product that you offer
                    </li>
                    <li>
                      A website can directly help improve your business
                      reputation by helping you look more professional and
                      trustworthy online leading to more attention and awareness
                      from customers
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      A Website Can Help Increase Your Sales
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    <li>
                      An increase in online visibility = more potential sales
                    </li>
                    <li>
                      A website is showing all the good stuff about your
                      business leading to more trust from customers and better
                      reputation, therefore greater sales potential
                    </li>
                    <li>
                      Almost no time or effort has to be put in by you once your
                      website is complete - it’s working in the background as
                      the salesman for the business{" "}
                    </li>
                    <li>
                      A website can help you standout from the competition
                      leading to more attention from customers and greater sales
                      potential
                    </li>
                    <li>
                      A website can result in more leads for your business,
                      providing you with more opportunities to take on higher
                      paying customers
                    </li>
                    <li>
                      A website can reduce the overall workload for you as a
                      business owner, and you can focus on more revenue-building
                      activities
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      A Website Can Get Better Customers For Your Business
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    <li>
                      Your website is directly communicating with your ideal
                      customers in a way that is going to gain trust while
                      improving your reputation
                    </li>
                    <li>
                      A website is directly placing your business into a
                      marketplace loaded with ideal customers in need of your
                      services or products
                    </li>
                    <li>
                      A website can result in more leads, providing you with
                      more opportunities to filter out non-ideal customers
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <div className="spacing-md">
              <h2 className="title">
                why is a website so important for Calgary businesses?!
              </h2>
              <div className="spacing">
                <p>
                  Are you a business owner who is struggling to grow and expand
                  your operations? Are you having a hard time improving your
                  brand awareness due to lack of time and marketing? Are you
                  struggling to reach your sales goals? Do you want to get more
                  high quality customers and increase your revenue?
                </p>
                <p>
                  I speak with business owners of different professions on a
                  daily basis and the above are some of the most common
                  challenges that they come across. Partnering with website
                  designers Calgary should be your first step towards overcoming
                  any struggles you might be faced with in your business.
                </p>
              </div>
              <ButtonSecondaryLight to="/contact">
                get in touch
              </ButtonSecondaryLight>
            </div>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  )
}
