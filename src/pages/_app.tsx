import * as React from 'react';
import { AppProps } from 'next/app';
import Providers from '~/components/Providers';
import '~/components/GlobalStyles/theme.css';
import { useApollo } from '../lib/apollo';
import { ApolloProvider } from '@apollo/client'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <Providers>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Providers>
  );
}
