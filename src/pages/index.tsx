import * as React from 'react';
import Page, { SectionHeading, Heading, Subheading } from '~/components/Page';
import ResourcesGrid from '~/components/ResourcesGrid';
import { useBooksQuery, BooksDocument } from '../lib/books.graphql';
import { initializeApollo } from '../lib/apollo';
import BooksGrid from '~/components/BooksGrid';

const Home = () => {
  const { data } = useBooksQuery();
  const { books } = data!;
  return (
    <Page dataCy="home-view">
      <SectionHeading>
        <Heading>Podcasts</Heading>
        <Subheading>
          Level up by listening to podcasts from the best in the industry
        </Subheading>
      </SectionHeading>

      {books && <BooksGrid books={books.edges} />}

      <SectionHeading>
        <Heading>Resources</Heading>
        <Subheading>Curated resources for designers and developers</Subheading>
      </SectionHeading>

      <ResourcesGrid />
    </Page>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: BooksDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Home;