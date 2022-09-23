import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../src/assets/apollo_img.png';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Apollo&apos;s Library</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>

      <main className={styles.main}>
        <Image
          src={profilePic}
          alt="Apollo's Library Image"
        />
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/oslabs-beta/apollos_library">Apollo&apos;s Library!</a>
        </h1>

        <p className={styles.description}>
        Apollo&apos;s Library is a developer tool that can take in a GraphQL query and generate mock data/schemas.
        </p>

        <div>

        </div>
        <div className={styles.grid}>
          <a href="https://github.com/oslabs-beta/apollos_library/blob/main/README.md" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Apollo&apos;s Library features.</p>
          </a>

          <a href="https://medium.com/@jamie.clignett/introducing-apollos-library-an-apollo-graphql-module-b060bb2688a9" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn more about Apollo&apos;s Library in a medium article!</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>NPM package &rarr;</h2>
            <p>We are currently working on converting the Repo into a downalodable NPM package. Coming soon!</p>
          </a>

          <div className={styles.box}>
            <h2>Support &rarr;</h2>
            <p className={styles.paragraph}> 
              Support our project by <a href="https://github.com/oslabs-beta/apollos_library">starring</a> on Github and <a href="medium_article">clapping</a> us on Medium.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://opensourcelabs.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Product developed under Tech Accelerator OS Labs
        </a>
      </footer>
    </div>
  )
}
