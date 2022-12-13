import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // console.log("pageProps : ", pageProps.meta)
  // const meta = pageProps.meta

  const meta = {
    "title": "Art With Me - デジタル空間で障害者アートを発信中",
    "url": "https://dev.art-with.me/",
    "card": "summary_large_image",
    "description": "Art With Meは障害者によるデジタールアート作品を売買する全く新しい空間です。",
    "keywords": "Art With Me,福祉NFT,デジタルアート,絵画,イラスト,写真,デザイン",
    "image": "https://dev-api.art-with.me/v1/public/resources?type=article_series&filename=2022-12-05_18:20:46.jpeg",
    "type": "website"
  }

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} key="title" />
        <meta name="description" content={meta.description} key="description" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content={meta.type} key="og:type" />
        <meta property="og:url" content={meta.url} key="og:url" />
        <meta property="og:title" content={meta.title} key="og:title" />
        <meta property="og:description" content={meta.description} key="og:description" />
        <meta property="og:image" content={meta.image} key="og:image" />
        <meta property="og:keywords" content={meta.keywords} key="og:keywords" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content={meta.card} key="twitter:card" />
        <meta property="twitter:url" content={meta.url} key="twitter:url" />
        <meta property="twitter:title" content={meta.title} key="twitter:url" />
        <meta property="twitter:description" content={meta.description} key="twitter:description" />
        <meta property="twitter:image" content={meta.image} key="twitter:image" />
        <meta property="twitter:keywords" content={meta.keywords} key="twitter:keywords" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp