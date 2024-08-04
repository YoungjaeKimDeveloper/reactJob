import React from "react";
import Hero from "../components/Hero";
import Joblistings from "../components/Joblistings";
import HomeCards from "../components/HomeCards";
import ViewAllJobs from "../components/ViewAllJobs";
const Homepage = () => {
  return (
    <>
      <Hero
        title={"Become a Web developer"}
        subtitle={"Find Your dream in here"}
      />
      <HomeCards />
      <Joblistings isHomePage={true} />
      <ViewAllJobs />
    </>
  );
};

export default Homepage;
