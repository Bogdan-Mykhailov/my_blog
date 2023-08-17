import React from 'react';
import s from './PostContent.module.css';
import PostHeader from "@/components/Posts/PostDetail/PostHeader/PostHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import { PATH } from "@/constants";
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

const PostContent = (props) => {
  const {title, content, image, slug} = props.post;

  const imagePath = `${PATH.IMAGES}${PATH.POSTS}/${slug}/${image}`;

  const customRenderers = {
    p(paragraph) {
      const {node} = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={s.image}>
            <Image
              style={{ width: '100%', height: 'auto'}}
              src={`${PATH.IMAGES}${PATH.POSTS}/${slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
              priority={true}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, '')}
          style={atomDark}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <article className={s.content}>
      <PostHeader title={title} image={imagePath}/>
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
