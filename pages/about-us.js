import Head from 'next/head'
import Link from 'next/link'
import { Toolbar } from '@mui/material';
import Login from '../Components/Login/login';
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About-Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Toolbar className={styles.toolbar}>
          <Link className={styles.linkHome} href="/">Home</Link> &nbsp;&nbsp;&nbsp;<Link className={styles.linkSettings} href="/settings">Settings</Link>
          <Link className={styles.courses} href="/courses">Courses</Link>
          <Link className={styles.linkHome} href="/about-us">About-Us</Link> 
          <Login className={styles.header} />
        </Toolbar>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The Inquirio Team
        </h1>

        <p className={styles.description}>
          {/* <code className={styles.code}></code> */}
        </p>

        <div className={styles.grid}>

          <a href="https://www.linkedin.com/in/branden-ge/" className={styles.card}>
            <h2 className={styles.title} >Branden Ge</h2 >
            <h3><li>Software Developer</li></h3>
            <Image
              src='/Branden.jpg' alt='gene' width={250} height={250} />
            <p>
              Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API
            </p>
          </a>

          <a href="https://www.linkedin.com/in/brandomoki/" className={styles.card}>
            <h2 className={styles.title} >Brandon Pitts</h2>
            <h3><li>Software Developer</li></h3>
            <Image
              src='/Brandon.jpg' alt='gene' width={250} height={250} />
            <p>
              Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API
            </p>
          </a>

          <a href="https://www.linkedin.com/in/dsfrey/" className={styles.card}>
            <h2 className={styles.title} >Daniel Frey</h2>
            <h3><li>Software Developer</li></h3>
            <Image
              src='/Daniel.jpg' alt='gene' width={250} height={250} />
            <p>
            Daniel graduated from Iowa State University in 2013 with a degree in materials engineering and a minor in music. He has worked a wide variety of jobs, from retail sales to warehouse work to church ministry. He frequently finds himself chasing rabbit trails of knowledge, learning a little bit about a wide variety of topics. One such excursion down the rabbit trail of logic and design led him to computer programming, where he is now pursuing a career in software development as a student at Delta V and Code Fellows.
            </p>
          </a>

          <a href="https://www.linkedin.com/in/keelen-fisher-b63766148/" className={styles.card}>
            <h2 className={styles.title} >Keelen Fisher</h2>
            <h3><li>Software Developer</li></h3>
            <Image
              src='/Keelen.jpg' alt='gene' width={250} height={250} />
            <p>
              Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API
            </p>
          </a>

          <a href="https://www.linkedin.com/in/stephnihill/" className={styles.card}>
            <h2 className={styles.title} >Stephanie Hill</h2>
            <h3><li>Software Developer</li></h3>
            <Image
              src='/Stephanie.jpg' alt='gene' width={250} height={250} />
            <p>
              Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a href="https://www.linkedin.com/in/hsp20tim/" className={styles.card}>
            <h2 className={styles.title} >Timothee Odushina</h2>
            <h3><li>Software Developer</li></h3>
            <Image
              src='/Timothee.jpg' alt='gene' width={250} height={250} />
            <p>
              Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API.Find in-depth information about Next.js features and API
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
        </a>
      </footer>
    </div>
  )
}
