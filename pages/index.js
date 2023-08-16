import React from 'react';
import Hero from "@/components/Hero/Hero";
import FeaturedPosts from "@/components/FeaturedPosts/FeaturedPosts";
import {getFeaturedPosts} from "@/helpers/post-utils";

const HomePage = (props) => {
  const {posts} = props;

  return (
    <>
      <Hero/>
      <FeaturedPosts posts={posts}/>
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
  }
}

export default HomePage;
