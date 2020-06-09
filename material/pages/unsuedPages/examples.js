import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

//This page is a playground to learn GraphQL

// the commented two lines are replaced below:
// const examples = props => {
// console.log(props)
const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <h1>hello from exmaples page</h1>
      {/* <h1>title: {data.site.siteMetadata.title}</h1> */}
      <h1>{author}</h1>
    </Layout>
  )
}

// the line below: pageQuery
export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`
export default examples