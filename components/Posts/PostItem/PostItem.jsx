import React from 'react';
import s from './PostItem.module.css';
import Link from "next/link";
import Image from 'next/image';

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: "numeric",
    month: 'long',
    year: "numeric"
  })

  const imagePosts = `/images/posts/${slug}/${image}`;
  const linkPath = `/post/${slug}`;

  return (
    <li className={s.post}>
      <Link href={linkPath}>
        <div className={s.image}>
          <Image
            src={imagePosts}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
            priority={true}
          />
        </div>
        <div className={s.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
