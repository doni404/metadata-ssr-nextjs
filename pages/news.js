import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const News = (propsMeta) => {
    const meta = propsMeta.meta

    return (
        <div className={styles.container}>
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

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">NEWS PAGE!</a>
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

export default News

export const getServerSideProps = async () => {
    let photo = null;
    await fetch('https://jsonplaceholder.typicode.com/photos/2')
        .then((response) => response.json())
        .then((json) => {
            photo = json
        })

    const meta = {
        "title": "ニュース一覧 | Art With Me",
        "url": "https://dev.art-with.me/news",
        "card": "summary_large_image",
        "description": "Art With Meからのお知らせ、イベント等のご案内です。",
        "keywords": "Art With Me,福祉NFT,お知らせ,ニュース,イベント",
        "image": "https://dev-api.art-with.me/v1/public/resources?type=article_series&filename=2022-12-05_18:20:33.jpeg",
        "type": "website"
    }

    return {
        props: {
            meta,
        },
    };
};