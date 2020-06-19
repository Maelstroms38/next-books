import * as React from 'react';
import Page, { SectionHeading, Heading, Subheading } from '~/components/Page';
import { useBooksQuery, BooksDocument } from '../../lib/books.graphql';
import { initializeApollo } from '../../lib/apollo';
import BooksGrid from '~/components/BooksGrid';

export default function BooksPage() {
  const { data } = useBooksQuery();
  const { books } = data!;
  return (
    <Page dataCy="books-view">
      <SectionHeading>
        <Heading>Books</Heading>
        <Subheading>
          Level up by listening to podcasts from the best in the industry
        </Subheading>
      </SectionHeading>

      {books && <BooksGrid books={books.edges} />}
    </Page>
  );
}

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
