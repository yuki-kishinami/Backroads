import React from 'react'
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        siteUrl
        image
        twitterUsername
      }
    }
  }
`

const SEO = ({title,description}) => {
    const {site} = useStaticQuery(getData);

    const {siteDesc, siteTitle, siteUrl, image, twitterUsername} = site.siteMetadata

    return (
        <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}>
            <meta name="description" content={description | siteDesc} />
            <meta name="image" content={image} />
            {/* Twitter card */}
            <meta name="Twitter:card" content="summary_large_image" />
            <meta name="Twitter:creater" content={twitterUsername} />
            <meta name="Twitter:title" content={siteTitle} />
            <meta name="Twitter:description" content={description} />
            <meta name="Twitter:image" content={`${siteUrl}${image}`} />
        </Helmet>
    )
}

export default SEO
