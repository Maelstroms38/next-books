import * as React from 'react';
import Link from 'next/link';
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
            <Title>About Spec</Title>
          </PostHeader>

          <h3>Level Up</h3>
          <p>What does it mean to level up in your career?</p>

          <p>
            Spec exists to encourage the right conversations, promote the right
            tools and processes, and provide a culture of constant learning and
            improvement to the global community of developers and designers. We
            produce top-rated podcasts and content resources for developers and
            designers in every stage of their career, and we engage the
            community in discussion on a daily basis.
          </p>

          <h3>From industry professionals, for industry professionals</h3>

          <p>
            In January 2015, two independent podcasts — Design Details and
            Developer Tea — were started by three individuals who wanted to talk
            about the work they do every day. After an amazing response from the
            web community, we’ve teamed up to create the Spec Network to help
            designers and developers to learn, find great resources and connect
            with one another.
          </p>

          <p>
            Today our podcasts are downloaded more than 100,000 times per week
            and we’re working to create new shows to provide the most up-to-date
            resources and information for the design & development community!
          </p>

          <p>
            You can{' '}
            <a
              href="https://twitter.com/specfm"
              target="_blank"
              rel="noreferrer noopener"
            >
              follow us on Twitter
            </a>{' '}
            for updates on new episodes, or join our{' '}
            <a
              href="https://spectrum.chat/specfm"
              target="_blank"
              rel="noreferrer noopener"
            >
              community
            </a>{' '}
            to hang out with thousands of like-minded designers and developers.
          </p>

          <p>
            If your company or product would like to sponsor our shows, we’d
            love to chat!{' '}
            <Link href="/sponsors">
              <a>Learn more about sponsoring Spec</a>
            </Link>
            .
          </p>

          <h3>The team</h3>
          <p>
            Spec is possible thanks to our incredible cast of podcast hosts,
            designers, developers, writers, and producers.
          </p>
        </ContentContainer>
      </Container>
    </Page>
  );
}
