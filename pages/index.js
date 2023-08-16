import React from 'react';
import Hero from "@/components/Hero/Hero";
import FeaturedPosts from "@/components/FeaturedPosts/FeaturedPosts";
import {DUMMY_POST} from "@/data";

const HomePage = () => {
  return (
    <>
      <Hero/>
      <FeaturedPosts posts={DUMMY_POST}/>
    </>
  );
};

export default HomePage;
