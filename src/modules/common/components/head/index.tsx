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
      <meta name="description" content="by cammi casino" />
      <meta itemProp="twitter:card" content="by cammi casino" />
      <meta itemProp="og:title" content="OS FRAGILES" />
      <meta itemProp="og:description" content="by cammi casino"/>
      <meta property="og:image" content="/osf-logo.jpeg" />
      {description && <meta itemProp="description" content="by cammi casino" />}
      {image && <meta itemProp="image" content={image} />}
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}

export default Head
