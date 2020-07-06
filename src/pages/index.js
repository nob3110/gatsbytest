import React from "react"

export const query = graphql`{
  microcmsTest {
    title
    text
    image {
      url
    }
  }
}`

const IndexPage = ({data}) => (
  <React.Fragment>
    <h1>{data.microcmsTest.title}</h1>
    <p>{data.microcmsTest.text}</p>
    {/* <img src={image && image.url} alt="" /> */}
  </React.Fragment>
)

export default IndexPage
