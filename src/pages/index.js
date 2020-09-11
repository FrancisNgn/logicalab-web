import React from "react"
import { Link } from "gatsby"
import Header from "components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/about/">About</Link><br/>
      <Link to="/about-css/">About css</Link><br/>
      <Link to="/contact/">Contact</Link>
      <Header title="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}