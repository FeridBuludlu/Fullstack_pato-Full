import React from "react";
import Card from "../../../components/site/Card/Card";
import Carousel from "../../../components/site/Carousel/Carousel";
import Section1 from "../../../components/site/Section/Section1";
import Section2 from "../../../components/site/Section/Section2";
import Section3 from "../../../components/site/Section/Section3";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Section1/>
      <Section2/>
      <Section3/>
      <Card />
    </div>
  );
};

export default Home;
