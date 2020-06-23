import * as React from 'react';
import Link from 'next/link';
import Logo from '~/components/Logo';
import { Container, LogoContainer, ButtonRowContainer } from './style';
import { PrimaryButton } from '../Button';
import Search from './Search';

export default function Header() {
  return (
    <Container>
      <Link href="/">
          <LogoContainer>
            <Logo />
          </LogoContainer>
      </Link>

      <Search />

      <ButtonRowContainer>
        <Link href="/about">
          <a>
            <PrimaryButton>About</PrimaryButton>
          </a>
        </Link>
      </ButtonRowContainer>
    </Container>
  );
}
