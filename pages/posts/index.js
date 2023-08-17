import React from 'react';
import AllPosts from "@/components/Posts/AllPosts/AllPosts";
import { getAllPosts } from "@/helpers/post-utils";
import Head from "next/head";

const AllPostsPage = (props) => {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programing-related tutorials and posts!"/>
      </Head>
      <AllPosts posts={posts}/>
    </>
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default AllPostsPage;
