/* eslint-disable @next/next/no-img-element */
import { SignInButton } from '../SignInButton';
import Styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  return (
    <header className={Styles.headerContainer} >
      <div className={Styles.headerContent} >
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={Styles.active} href="/" >
          <a>Home</a>
          </ActiveLink>
          <ActiveLink  activeClassName={Styles.active} href="/posts" >
          <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}