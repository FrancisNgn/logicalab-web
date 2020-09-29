import React from "react"
import { Link } from "gatsby"
import Container from "../components/containers"

export default function Contact() {
  return (
    <Container>
      <h1>404</h1>
      <p>Page not found !</p>
      <p>Go to <Link to="/">Home</Link></p>
    </Container>
  )
}