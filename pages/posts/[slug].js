import React from 'react';
import PostContent from "@/components/Posts/PostDetail/PostContent/PostContent";
import {getPostData, getPostsFiles} from "@/helpers/post-utils";
import Head from "next/head";

const PostDetailPage = (props) => {
  const {post} = props;
  const {title, excerpt} = post;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt}/>
      </Head>
      <PostContent post={post}/>
    </>
  );
};

export const getStaticProps = (context) => {
  const {params} = context;
  const {slug} = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map(slug => ({params: {slug}})),
    fallback: false,
  }
}

export default PostDetailPage;
