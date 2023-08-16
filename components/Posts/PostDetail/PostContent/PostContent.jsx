import React from 'react';
import s from './PostContent.module.css';
import PostHeader from "@/components/Posts/PostDetail/PostHeader/PostHeader";
import {DUMMY_POST_1} from "@/data";
import ReactMarkdown from "react-markdown";

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST_1.slug}/${DUMMY_POST_1.image}`

  return (
    <article className={s.content}>
      <PostHeader title={DUMMY_POST_1.title} image={imagePath}/>
      <ReactMarkdown>{DUMMY_POST_1.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
