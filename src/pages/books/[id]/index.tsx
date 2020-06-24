import * as React from 'react';
import Page from '~/components/Page';
import BookView from '~/components/BookView';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import FullscreenLoading from '~/components/FullscreenLoading';
import { useBookQuery, BookDocument } from '~/lib/book.graphql';
import { initializeApollo } from '~/lib/apollo';
import { books } from '~/config';

interface Props {
  id: string;
}

export default function BookPage({ id }: Props) {
  const router = useRouter();

  const { data, loading } = useBookQuery({ variables: { id: id } });

  if (router.isFallback || loading) {
    return <FullscreenLoading />;
  }

  React.useEffect(() => {
    if (!data) router.push('/');
  }, [router.isFallback]);

  const { book } = data;

  if (book) {
    return (
      <Page>
        <BookView book={book} />
      </Page>
    );
  }

  return null;
}

export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: BookDocument,
    variables: { id },
  });

  return {
    props: {
      id,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export async function getStaticPaths() {
  const paths = books.edges.map(({ node }) => ({
    params: { id: node.id },
  }));

  return { paths, fallback: false };
}
