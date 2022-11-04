import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'

const BlogStyling = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
margin: 3rem;
height: 100rem;`
const Blog = () => {
  return (
    <>
      <Helmet>
      <title>Blog</title>
      <meta name="description" content="Peculiar Richard Blog"></meta>
      <link rel="canonical" href="/blog"></link>
    </Helmet>
    <BlogStyling>
      <h2>Coming Soon!</h2>
    </BlogStyling>
    </>
  )
}

export default Blog