import { getAllEpisodes } from '../lib/api'
import Head from 'next/head'

import Container from '../components/container'
import Layout from '../components/layout'
import Nav from '../components/nav'
import ListenOn from '../components/listen-on'
import EpisodeCard from '../components/episode-card'

export default function Index({ allEpisodes }) {
  const latestEpisode = allEpisodes[0]

  return (
    <>
      <Layout>
        <Head>
          <title>Behind the Stand</title>
          <meta property="og:image" content="/assets/og.png" />
        </Head>

        <header className="w-full bg-brand-gray-dark pb-40 px-40 text-brand-gray-light relative mb-64">
          <div className="relative z-20 h-full">
            <Nav />

            <div className="pt-40">
              <h1 className="text-brand-yellow text-7xl font-bold">
                When life gives you lemons
              </h1>

              <p className="text-3xl mb-20">
                Stories of grit, success, and failure from people behind great ventures.
              </p>

              <ListenOn />
            </div>
          </div>

          <div className="hero-image min-h-screen rounded-lg w-1/3 bg-cover bg-no-repeat bg-center absolute top-0 right-0 mr-20 mt-0">
            <div className="circle-bg w-56 h-56 absolute top-0 mt-10 z-10 rounded-lg"></div>
          </div>

          <div className="circle-bg w-40 h-40 absolute bottom-0 -mb-32 right-0 z-10 rounded-lg"></div>
        </header>

        <Container>
          <div className="grid grid-cols-3 gap-16 py-40 relative">
            <div className="circle-bg-black w-40 h-40 absolute top-0 left-0 -ml-20 mt-20 opacity-50 rounded-lg"></div>
            {allEpisodes.map(episode => <EpisodeCard episode={episode} />)}
          </div>
        </Container>
      </Layout>

      <style jsx>{`
        header {
        }

        .circle-bg {
          opacity: 0.8;
          background-color: #26282b;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c2c4ca' fill-opacity='0.29' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
        }

        .circle-bg-black {
          background-color: #0b0608;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c2c4ca' fill-opacity='0.29' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
        }
        
        
        header .hero-image .circle-bg {
          right: 32rem;
        }

        .hero-image {
          background-image: url('/assets/hero-woman-bw.png');
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const allEpisodes = getAllEpisodes([
    'title',
    'date',
    'slug',
    'excerpt',
    'guest',
    'venture',
    'number',
  ])

  return {
    props: { allEpisodes },
  }
}
