import * as React from 'react';
import Link from 'next/link';
import {
  Grid,
  Sidebar,
  Content,
  Title,
  Description,
  Divider,
  Label,
  MobileArt,
} from './style';
import BookArt from '../BookArt';
import { NextSeo } from 'next-seo';
import { BookNode } from '~/lib/type-defs.graphqls';

interface Props {
  book: BookNode;
}

export default function BookView(props: Props) {
  const { book } = props;

  return (
    <Grid data-cy="book-view">
      <NextSeo
        title={book.title}
        description={book.summary}
        openGraph={{
          title: book.title,
          description: book.summary,
          images: book.bookimageSet,
        }}
        additionalMetaTags={[
          {
            property: 'theme-color',
            content: '#FFF',
          },
        ]}
      />
      <Sidebar>
        <Link href="/books/[id]" as={`/books/${book.id}`}>
          <a>
            {book.bookimageSet?.length && (
              <BookArt src={book.bookimageSet[0].url} alt={book.title} />
            )}
          </a>
        </Link>
      </Sidebar>

      <Content>
        <MobileArt>
          <Link href="/books/[id]" as={`/books/${book.id}`}>
            <a>
              {book.bookimageSet?.length && (
                <BookArt src={book.bookimageSet[0].url} alt={book.title} />
              )}
            </a>
          </Link>
        </MobileArt>
        <Title>{book.title}</Title>
        <Description>{book.summary}</Description>
      </Content>
    </Grid>
  );
}
