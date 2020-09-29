import React from "react"
import Header from "../components/header"
import Container from "../components/containers"

export default function Contact() {
  return (
    <Container>
      <Header title="Contact" />
      <h4>I'd love to talk! Email me at the address below</h4>
      <p>
        <a href="mailto:info@logicalab.com">info@logicalab.com</a>
      </p>
    </Container>
  )
}