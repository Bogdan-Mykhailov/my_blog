import React from 'react';
import AllPosts from "@/components/Posts/AllPosts/AllPosts";
import {getFeaturedPosts} from "@/helpers/post-utils";

const AllPostsPage = (props) => {
  const { posts } = props;

  return (
    <AllPosts posts={posts}/>
  );
};

export const getStaticProps = () => {
  const posts = getFeaturedPosts();

  return {
    props: {
      posts,
    },
  };
};

export default AllPostsPage;
