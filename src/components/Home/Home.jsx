import React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import CardBanner from "../CardBanner/CardBanner";
import CardBox from "../Cards/CardBox";
import MedalsBanner from "../MedalsBanner/MedalsBanner";
import MedalsBox from "../MedalsBox/MedalsBox";
import SEOBanner from "../SEOBanner/SEOBanner";
import SEO from "../SEOBox/SEO";

const Home = () => {
  return (
    <main>
      <Hero />
      {/* <HowToUse /> */}
      <CardBanner />
      <CardBox />
      <MedalsBanner />
      <MedalsBox />
      <SEOBanner />
      <SEO />
    </main>
  );
};

export default Home;
