import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/banner/Banner'
import Section from '../components/sections/Section'

// import styles from '../styles/Home.module.css'


const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Sun Side</title>
      </Head>
     <Banner/>
     <Section/>
    </div>
  )
}

export default Home
