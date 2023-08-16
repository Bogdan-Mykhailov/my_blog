import React from 'react';
import s from './PostContent.module.css';
import PostHeader from "@/components/Posts/PostDetail/PostHeader/PostHeader";
import {DUMMY_POST_1} from "@/data";
import ReactMarkdown from "react-markdown";

const PostContent = (props) => {
  const { title, content, image, slug } = props.post;

  const imagePath = `/images/posts/${slug}/${image}`

  return (
    <article className={s.content}>
      <PostHeader title={title} image={imagePath}/>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
