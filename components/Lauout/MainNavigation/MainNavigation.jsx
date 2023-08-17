import React from 'react';
import Logo from "@/components/Lauout/Logo/Logo";
import Link from "next/link";
import s from './MainNavigation.module.css';
import {PATH} from "@/constants";

const MainNavigation = () => {
  return (
    <header className={s.header}>
      <Link href={PATH.MAIN}>
        <Logo />
      </Link>

      <nav>
        <menu>
          <li><Link href={PATH.POSTS}>Posts</Link></li>
          <li><Link href={PATH.CONTACT}>Contact</Link></li>
        </menu>
      </nav>
    </header>
  );
};

export default MainNavigation;
