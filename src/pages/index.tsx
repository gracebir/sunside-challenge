import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/banner/Banner'
import Client from '../components/client/Client'
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
     <Client/>
    </div>
  )
}

export default Home
