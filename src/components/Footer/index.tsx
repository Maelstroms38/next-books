import * as React from 'react'
import { Container, Description, Icons } from './style'
import Icon from '../Icon'

export default function Footer() {
  return (
    <Container>
      <Icons>
        <a
          href="https://twitter.com/mbstroms"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon glyph="twitter" />
        </a>

        <a
          href="https://github.com/maelstroms38"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon glyph="github" />
        </a>
      </Icons>

      <Description>
        Copyright {new Date().getFullYear()} Michael Stromer.
      </Description>
    </Container>
  )
}
