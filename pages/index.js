import React from 'react';
import Hero from "@/components/Hero/Hero";
import FeaturedPosts from "@/components/FeaturedPosts/FeaturedPosts";

const DUMMY_POST = [
  {
    title: 'Getting started with Next.Js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next.Js is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-08-16',
    slug: 'getting-started-with-nextjs',
  },
  {
    title: 'Getting started with Next.Js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next.Js is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-08-16',
    slug: 'getting-started-with-nextjs2',
  },
  {
    title: 'Getting started with Next.Js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next.Js is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-08-16',
    slug: 'getting-started-with-nextjs3',
  },
  {
    title: 'Getting started with Next.Js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next.Js is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-08-16',
    slug: 'getting-started-with-nextjs4',
  },
]

const HomePage = () => {
  return (
    <>
      <Hero/>
      <FeaturedPosts posts={DUMMY_POST}/>
    </>
  );
};

export default HomePage;
