import NextHead from "next/head"
import React from "react"

type HeadProps = {
  title?: string
  description?: string | null
  image?: string | null
}

const Head: React.FC<HeadProps> = ({ title, description, image }) => {
  return (
    <NextHead>
      <title>OS FRAGILES</title>
      <meta itemProp="name" content={title} />
      <meta name="twitter:card" content="by cammi casino" />
      <meta property="og:image" content="/osf-logo.jpeg" />
      {/* {description && <meta itemProp="description" content={description} />}
      {image && <meta itemProp="image" content={image} />} */}
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}

export default Head
