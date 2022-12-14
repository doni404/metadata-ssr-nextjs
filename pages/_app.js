import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log("pageProps : ", pageProps.meta)
  const meta = pageProps.meta

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{meta != null ? meta.title : "Art With Me - デジタル空間で障害者アートを発信中"}</title>
        <meta name="title" content={meta != null ? meta.title : "Art With Me - デジタル空間で障害者アートを発信中"} key="title" />
        <meta name="description" content={meta != null ? meta.description : "Art With Meは障害者によるデジタールアート作品を売買する全く新しい空間です。"} key="description" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content={meta != null ? meta.type : "website"} key="og:type" />
        <meta property="og:url" content={meta != null ? meta.url : "https://dev.art-with.me/"} key="og:url" />
        <meta property="og:title" content={meta != null ? meta.title : "Art With Me - デジタル空間で障害者アートを発信中"} key="og:title" />
        <meta property="og:description" content={meta != null ? meta.description : "Art With Meは障害者によるデジタールアート作品を売買する全く新しい空間です。"} key="og:description" />
        <meta property="og:image" content={meta != null ? meta.image : "https://dev-api.art-with.me/v1/public/resources?type=article_series&filename=2022-12-05_18:20:46.jpeg"} key="og:image" />
        <meta property="og:keywords" content={meta != null ? meta.keywords : "Art With Me,福祉NFT,デジタルアート,絵画,イラスト,写真,デザイン"} key="og:keywords" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content={meta != null ? meta.card : "summary_large_image"} key="twitter:card" />
        <meta property="twitter:url" content={meta != null ? meta.url : "https://dev.art-with.me/"} key="twitter:url" />
        <meta property="twitter:title" content={meta != null ? meta.title : "Art With Me - デジタル空間で障害者アートを発信中"} key="twitter:url" />
        <meta property="twitter:description" content={meta != null ? meta.description : "Art With Meは障害者によるデジタールアート作品を売買する全く新しい空間です。"} key="twitter:description" />
        <meta property="twitter:image" content={meta != null ? meta.image : "https://dev-api.art-with.me/v1/public/resources?type=article_series&filename=2022-12-05_18:20:46.jpeg"} key="twitter:image" />
        <meta property="twitter:keywords" content={meta != null ? meta.keywords : "Art With Me,福祉NFT,デジタルアート,絵画,イラスト,写真,デザイン"} key="twitter:keywords" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp