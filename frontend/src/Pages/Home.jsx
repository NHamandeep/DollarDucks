

// import React from 'react'
// import PlansPricing from './Pricing'
// import Services from './Services'
// import WhoWeServe from './WhoWeServe'
// import Preloader from '../Components/Preloader'
// import FrontSlider from '../Components/frontslider'


// const Home = () => {
//   return (
//    <>
//    <Preloader/>
//    <FrontSlider/>
//    <PlansPricing/>
//    <Services/>
//    <WhoWeServe/>
//    </>
//   )
// }

// export default Home




import React from 'react'
import { Helmet } from 'react-helmet';  // Import Helmet
import PlansPricing from './Pricing'
import Services from './Services'
import WhoWeServe from './WhoWeServe'
import Preloader from '../Components/Preloader'
import FrontSlider from '../Components/frontslider'


const Home = () => {
  return (
    <>
      {/* SEO Tags with Helmet */}
      <Helmet>
        <title>Home Page | DollarDucks</title> {/* Page Title */}
        <meta name="description" content="Welcome to DollarDucks, your one-stop solution for digital marketing services." /> {/* Meta description */}
        <meta name="keywords" content="SEO, Digital Marketing, Web Design, Social Media Marketing, Lead Generation" /> {/* Meta Keywords */}
        
        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content="Home Page | DollarDucks" />
        <meta property="og:description" content="Explore the best digital marketing services with DollarDucks and grow your business." />
        <meta property="og:image" content="https://www.dollarducks.com/assets/logo-JQ-jHGEZ.png" /> {/* Replace with a real image URL */}
        <meta property="og:url" content="https://www.dollarducks.com/" />

        <meta name="author" content="DollarDucks Digital Agency" />
        <meta name="publisher" content="https://www.instagram.com/dollar_ducks/" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Page | DollarDucks" />
        <meta name="twitter:description" content="Explore the best digital marketing services with DollarDucks and grow your business." />
        <meta name="twitter:image" content="https://www.dollarducks.com/twitter-image.jpg" /> {/* Replace with a real image URL */}
      </Helmet>

      {/* Page Content */}
      <Preloader />
      <FrontSlider />
      <PlansPricing />
      <Services />
      <WhoWeServe />
    </>
  )
}

export default Home
