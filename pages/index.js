import React from 'react';
import Hero from "@/components/Hero/Hero";
import FeaturedPosts from "@/components/FeaturedPosts/FeaturedPosts";
import {getFeaturedPosts} from "@/helpers/post-utils";
import Head from "next/head";

const HomePage = (props) => {
  const {posts} = props;

  return (
    <>
      <Head>
        <title>Bogdan's Blog</title>
        <meta name="description" content="I post about programing and web development." />
      </Head>
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
