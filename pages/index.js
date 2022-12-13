import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = ({ photo }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Social Media Preview</title>
        <meta property="og:url" content="https://team-place.com/" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="2747726002141483" />
        <meta property="og:title" content={photo?.title} />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hurray!! Yes Social Media Preview is Working"
        />
        <meta property="og:image" content={photo?.url} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  let photo = null;
  await fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then((response) => response.json())
    .then((json) => {
      photo = json
    })

  const meta = {
    "title": "Art With Me - デジタル空間で障害者アートを発信中",
    "url": "https://dev.art-with.me/",
    "card": "summary_large_image",
    "description": "Art With Meは障害者によるデジタールアート作品を売買する全く新しい空間です。",
    "keywords": "Art With Me,福祉NFT,デジタルアート,絵画,イラスト,写真,デザイン",
    "image": "https://dev-api.art-with.me/v1/public/resources?type=article_series&filename=2022-12-05_18:20:46.jpeg",
    "type": "website"
  }

  return {
    props: {
      meta,
    },
  };
};