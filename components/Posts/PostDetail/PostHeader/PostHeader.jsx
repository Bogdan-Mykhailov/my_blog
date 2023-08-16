import React from 'react';
import s from './PostHeader.module.css';
import Image from "next/image";

const PostHeader = (props) => {
  const { title, image } = props;

  return (
    <header className={s.header}>
      <h1>{title}</h1>
      <Image
        src={image}
        alt={title}
        width={200}
        height={150}
        priority={true}
      />
    </header>
  );
};

export default PostHeader;
