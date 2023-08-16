import React from 'react';
import AllPosts from "@/components/Posts/AllPosts/AllPosts";
import {DUMMY_POST} from "@/data";

const AllPostsPage = () => {
  return (
    <AllPosts posts={DUMMY_POST}/>
  );
};

export default AllPostsPage;
