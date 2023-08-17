import React from 'react';
import s from './PostItem.module.css';
import Link from "next/link";
import Image from 'next/image';
import {PATH} from "@/constants";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: "numeric",
    month: 'long',
    year: "numeric"
  })

  const imagePosts = `${PATH.IMAGES}${PATH.POSTS}/${slug}/${image}`;
  const linkPath = `${PATH.POSTS}/${slug}`;

  return (
    <li className={s.post}>
      <Link href={linkPath}>
        <div className={s.image}>
          <Image
            style={{ width: '100%', height: 'auto' }}
            src={imagePosts}
            alt={title}
            width={300}
            height={200}
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
