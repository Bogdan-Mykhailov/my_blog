import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const {data, content} = matter(fileContent);


  return {
    slug: postSlug,
    ...data,
    content,
  }
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();

  return postFiles
    .map(postFile => getPostData(postFile))
    .sort((a, b) => a.data > b.data ? -1 : 1);
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  return allPosts.filter(post => post.isFeatured);
};
