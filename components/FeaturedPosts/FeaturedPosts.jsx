import React from 'react';
import s from './FeaturedPosts.module.css';
import PostsGrid from "@/components/Posts/PostsGrid";

const FeaturedPosts = (props) => {
  const { posts } = props;

  return (
    <section className={s.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts}/>

    </section>
  );
};

export default FeaturedPosts;
