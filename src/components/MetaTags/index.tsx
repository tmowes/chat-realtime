import Head from 'next/head'

import { MetaTagsProps } from './types'

export const MetaTags = (props: MetaTagsProps) => {
  const { title, description, canonical, image } = props
  const pageTitle = title ? `${title} | socket-IO` : 'socket-IO'
  const pageDescription =
    description ??
    `socket-IO => A app to help you chat in real time with strangers around the world.`
  const pageImage = image ?? `/thumb.svg`

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="chat real, time,strangers, tmowes" />

      <meta property="og:site_name" content="socket-IO" />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={pageTitle} />
      <meta
        name="og:description"
        property="og:description"
        content={pageDescription}
      />
      <meta property="og:url" content={`${canonical}`} />
      <meta property="og:image" content={pageImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="socket-IO" />
      <meta name="twitter:creator" content="Julius Mowes" />
      <meta name="twitter:image:alt" content="Thumbnail" />
      {pageImage && <meta name="twitter:image" content={pageImage} />}

      {canonical && <link rel="canonical" href={canonical} />}

      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.png" type="image/png" />
    </Head>
  )
}
