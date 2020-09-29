import React from "react"
import Header from "components/header"
import Container from "../components/containers"

export default function Home() {
  return (
    <Container>
      <div style={{ color: `purple` }}>
        <Header title="Hello Gatsby!" />
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    </Container>
  )
}