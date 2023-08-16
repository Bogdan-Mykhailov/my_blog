import React from 'react';
import s from './PostsGrid.module.css';
import PostItem from "@/components/Posts/PostItem/PostItem";

const PostsGrid = (props) => {
  const { posts } = props;

  return (
    <ul className={s.grid}>
      {posts.map(post => <PostItem key={post.slug} post={post} />)}
    </ul>
  );
};

export default PostsGrid;
