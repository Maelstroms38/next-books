import * as React from 'react';
import { useRouter } from 'next/router';
import Page, { SectionHeading, Heading, Subheading } from '~/components/Page';
import { useBooksQuery, BooksDocument } from '../../lib/books.graphql';
import { initializeApollo } from '../../lib/apollo';
import BooksGrid from '~/components/BooksGrid';
import FullscreenLoading from '~/components/FullscreenLoading';

export default function BooksPage() {
  const { data, loading } = useBooksQuery();
  const router = useRouter();

  if (router.isFallback || loading)  {
    return <FullscreenLoading />
  }

  React.useEffect(() => {
    if (!data) router.push('/');
  }, [router.isFallback]);
  
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
