import NextHead from "next/head"
import React from "react"

type HeadProps = {
  title1?: string
  description1?: string | null
  image1?: string | null
}

const Head: React.FC<HeadProps> = ({ title1, description1, image1 }) => {
  return (
    <NextHead>
      <title>OS FRAGILES</title>
      <meta name="description" content="by cammi casino" />
      <meta itemProp="twitter:card" content="by cammi casino" />
      <meta itemProp="og:title" content="OS FRAGILES" />
      <meta itemProp="og:description" content="by cammi casino"/>
      <meta itemProp="og:image" content="/osf-logo.jpeg" />
      {/* {description1 && <meta itemProp="description" content="by cammi casino" />} */}
      {image1 && <meta itemProp="image" content="/osf-logo.jpeg" />}
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}

export default Head
