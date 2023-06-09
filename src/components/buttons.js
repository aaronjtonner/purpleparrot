import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Links & Anchors
// Links
export const ButtonPrimary = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  font-family: var(--ff-raleway);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: capitalize;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.25s linear;

  background: var(--clr-accent);
  color: #000;
  border: 1px solid var(--clr-accent);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;

  &:hover {
    background: var(--clr-accent-darker);
  }

  // this is for when an icon is used inside too
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    & > * + * {
      margin-left: 0;
      padding-left: 0;
    }
  }
`

export const ButtonPrimaryDark = styled(props => <Link {...props} />)`
  cursor: pointer;
  font-family: var(--ff-raleway);
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: var(--clr-dark);
  color: var(--txt-light);
  border: 1px solid var(--clr-dark);

  &:hover {
    opacity: 0.8;
  }
`

export const ButtonSecondary = styled(props => <Link {...props} />)`
  cursor: pointer;
  font-family: var(--ff-raleway);
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: transparent;
  color: var(--clr-accent);
  border: 1px solid var(--clr-accent);

  &:hover {
    opacity: 0.8;
  }
`
export const ButtonSecondaryLight = styled(props => <Link {...props} />)`
  cursor: pointer;
  font-family: var(--ff-raleway);
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: transparent;
  color: var(--txt-light);
  border: 1px solid var(--txt-light);

  &:hover {
    border: 1px solid var(--clr-light-secondary);
    color: var(--txt-light-secondary);
  }
`
export const ButtonSecondaryDark = styled(props => <Link {...props} />)`
  cursor: pointer;
  font-family: var(--ff-raleway);
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: transparent;
  color: var(--clr-dark);
  border: 1px solid var(--clr-dark);

  &:hover {
    opacity: 0.8;
  }
`

export const ButtonUnderline = styled(props => <Link {...props} />)`
  cursor: pointer;

  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  font-style: italic;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--clr-accent);

  // this is for when an icon is used inside too
  div {
    display: flex;
    align-items: center;

    & > * + * {
      margin-left: 0;
      padding-left: 0;
    }
  }
`
export const ButtonInline = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  color: var(--clr-accent);
  text-decoration: none;
`
export const ButtonInlineLight = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  color: var(--txt-light);
`

// Anchors
export const AnchorPrimary = styled.a`
  cursor: pointer;
  display: inline-block;
  font-family: var(--ff-raleway);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: capitalize;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: var(--clr-accent);
  color: var(--txt-light);
  border: 1px solid var(--clr-accent);

  // this is for when an icon is used inside too
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    & > * + * {
      margin-left: 5px;
    }
  }

  &:hover {
    background: var(--clr-accent-darker);
  }
`

export const AnchorSecondary = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: transparent;
  color: var(--txt-light);
  border: 1px solid var(--txt-light);

  &:hover {
    opacity: 0.8;
  }
`
export const AnchorSecondaryDark = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: transparent;
  color: var(--clr-dark);
  border: 1px solid var(--clr-dark);

  &:hover {
    opacity: 0.8;
  }
`

export const AnchorUnderline = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-family: var(--ff-raleway);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: var(--clr-accent);

  // this is for when an icon is used inside too
  div {
    display: flex;
    align-items: center;

    & > * + * {
      margin-left: 0;
      padding-left: 0;
    }
  }
`

export const AnchorInline = styled.a`
  cursor: pointer;
  display: inline;
  color: var(--clr-accent);
  text-decoration: none;

  span.light {
    color: var(--txt-light);
  }

  span.dark {
    color: var(--txt-dark);
  }
`
