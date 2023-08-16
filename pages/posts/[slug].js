import React from 'react';
import PostContent from "@/components/Posts/PostDetail/PostContent/PostContent";
import {getPostData, getPostsFiles} from "@/helpers/post-utils";

const PostDetailPage = (props) => {
  const { post } = props;

  return <PostContent post={post} />;
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
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  }
}

export default PostDetailPage;
