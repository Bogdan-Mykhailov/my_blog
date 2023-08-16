import React from 'react';
import s from './AllPosts.module.css'
import PostsGrid from "@/components/Posts/PostGrid/PostsGrid";

const AllPosts = (props) => {
  const { posts } = props;

  return (
    <section className={s.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts}/>
    </section>
  );
};

export default AllPosts;
