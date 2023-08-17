import React from 'react';
import Logo from "@/components/Lauout/Logo/Logo";
import Link from "next/link";
import s from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={s.header}>
      <Link href="/">
        <Logo />
      </Link>

      <nav>
        <menu>
          <li><Link href="/posts">Posts</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </menu>
      </nav>
    </header>
  );
};

export default MainNavigation;
