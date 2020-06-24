import * as React from 'react';
import { useRouter } from 'next/router';
import Page, { SectionHeading, Heading, Subheading } from '~/components/Page';
import ResourcesGrid from '~/components/ResourcesGrid';
import { useBooksQuery, BooksDocument } from '../lib/books.graphql';
import { initializeApollo } from '../lib/apollo';
import BooksGrid from '~/components/BooksGrid';
import FullscreenLoading from '~/components/FullscreenLoading';

const Home = () => {
  const { data, loading } = useBooksQuery();
  const router = useRouter();
  
  if (router.isFallback || loading)  {
    return <FullscreenLoading />
  }

  const { books } = data!;
  return (
    <Page dataCy="home-view">
      <SectionHeading>
        <Heading>Books</Heading>
        <Subheading>
          Diversify your shelves with a curated catalog.
        </Subheading>
      </SectionHeading>

      {books && <BooksGrid books={books.edges} />}

      <SectionHeading>
        <Heading>Resources</Heading>
        <Subheading>Curated resources, links to fun stuff.</Subheading>
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
