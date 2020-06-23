import * as React from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

const SeoConfig = {
  title: 'Libby App',
  description:
    'Books and resources for developers ',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://libby-app.herokuapp.com',
    site_name: 'Libby App',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1546953304-5d96f43c2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        alt: 'Spec.fm',
      },
    ],
  },
  twitter: {
    handle: '@mbstroms',
    site: '@mbstroms',
    cardType: 'summary_large_image',
  },
}

export default function SEO() {
  return (
    <React.Fragment>
      <DefaultSeo {...SeoConfig} />
      <Head>
        <meta name="theme-color" content={'#fefefe'} />
        <link rel="apple-touch-icon" href="/static/meta/apple-touch-icon.png" />
        <link
          rel="mask-icon"
          href="/static/meta/safari-pinned-tab.svg"
          color={'#050505'}
        />
        <link rel="manifest" href="/static/meta/site.webmanifest" />
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩‍💻</text></svg>`}
        />
      </Head>
    </React.Fragment>
  )
}
