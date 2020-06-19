import * as React from 'react';
import Link from 'next/link';
import { BookNode } from '../../lib/type-defs.graphqls';
import BookArt from '~/components/BookArt';

interface Props {
  book: BookNode;
}

export default function BookCard(props: Props) {
  const { book } = props;

  if (!book) return null;

  return (
    <Link key={book.id} href="/books/[id]" as={`/books/${book.id}`}>
      <a data-cy={`${book.id}-book`}>
        <BookArt src={book.bookimageSet[0].url} alt={book.title} />
      </a>
    </Link>
  );
}
