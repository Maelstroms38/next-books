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
        <a style={{ display: 'flex', alignItems: 'center' }}>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </a>
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
