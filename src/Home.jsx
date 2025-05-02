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
import BackToTop from './assets/components/BackToTop'

function Home() {
  return (
    <>
    <Helmet>
      <title>LASU MBA - Home</title>
      <meta name="description" content="Welcome to the LASU MBA community! We are here to assist in providing necessary academic and social supports to all the incoming Managers" />
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
    <BackToTop />
    <Footer />
    </>
  )
}

export default Home