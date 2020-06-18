import withApollo from '../lib/with-apollo';
import '~/components/GlobalStyles/theme.css'
import Providers from '~/components/Providers'
import { usePromptsQuery } from '../lib/viewer.graphql';
import { Prompt } from '../lib/type-defs.graphqls';

function Index(props, {Component, pageProps}) {
  // const { data } = usePromptsQuery()
    return (
      <Providers>
        <Component {...pageProps} />
      </Providers>
    )
}

export default withApollo(Index);
