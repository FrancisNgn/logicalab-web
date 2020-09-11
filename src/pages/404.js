import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="404" />
      <p>Page not found !</p>
      <p>Go to <Link to="/">Home</Link></p>
    </div>
  )
}