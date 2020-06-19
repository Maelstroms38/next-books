import * as React from 'react';
import { Container, Grid } from './style';
import { BookNodeEdge } from '../../lib/type-defs.graphqls';
import BookCard from '~/components/BookCard';

interface Props {
  books: BookNodeEdge[];
}

export default function BooksGrid(props: Props) {
  const { books } = props;

  return (
    <Container>
      <Grid>
        {books.map((edge) => {
          if (!edge) return null;
          return <BookCard key={edge.node.id} book={edge.node} />;
        })}
      </Grid>
    </Container>
  );
}
