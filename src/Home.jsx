import React from 'react'
import Header from './assets/components/Header'
import Hero from './assets/components/Hero'
import Mission from './assets/components/Mission'
import CommunityPower from './assets/components/CommunityPower'
import ImportantSteps from './assets/components/ImportantSteps'
import PeopleToKnow from './assets/components/PeopleToKnow'
import Network from './assets/components/Network'
import Footer from './assets/components/Footer';
import { Helmet } from 'react-helmet';
import Popup from './assets/components/Popup'

function Home() {
  return (
    <>
    <Helmet>
      <title>LASU MBA - Home</title>
      <meta name="description" content="Welcome to the LASU MBA community!" />
      <meta name="keywords" content="LASU, MBA, Community, Education" />
    </Helmet>
    <Header />
    <Popup />
    <Hero />
    <Mission />
    <CommunityPower />
    <ImportantSteps />
    <PeopleToKnow />
    <Network />
    <Footer />
    </>
  )
}

export default Home