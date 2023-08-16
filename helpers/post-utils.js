import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postsDirectory = path.join(process.cwd(), 'posts');

const getPostData = (fileName) => {
  const filePath = path.join(postsDirectory, fileName);

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const {data, content} = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, '');

  return {
    slug: postSlug,
    ...data,
    content,
  }
}

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory);

  return postFiles
    .map(postFile => getPostData(postFile))
    .sort((a, b) => a.data > b.data ? -1 : 1);
}

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  return allPosts.filter(post => post.isFeatured);
}
