import * as React from 'react';
import Page from '~/components/Page';
import {
  Container,
  ContentContainer,
  PostHeader,
  Title,
} from '~/components/Blog';

export default function About() {
  return (
    <Page showEmailCapture={false} dataCy="about-view">
      <Container>
        <ContentContainer style={{ paddingTop: '88px' }}>
          <PostHeader>
            <Title>About</Title>
          </PostHeader>

          <h3>Benign Heroism</h3>
          <p>Being heroic is boring, but by staying at home we are saving lives.</p>
          <p>
            You can{' '}
            <a
              href="https://twitter.com/mbstroms"
              target="_blank"
              rel="noreferrer noopener"
            >
              follow me Twitter
            </a>{' '}
            for updates.
          </p>

          <h3>The team</h3>
          <p>
            This is possible thanks to an incredible cast of students, teachers and entrepreneurial minds.
          </p>
        </ContentContainer>
      </Container>
    </Page>
  );
}
