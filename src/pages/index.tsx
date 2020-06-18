import withApollo from '../lib/with-apollo';
import '~/components/GlobalStyles/theme.css'
import Providers from '~/components/Providers'
import { usePromptsQuery } from '../lib/viewer.graphql';
import { Prompt } from '../lib/type-defs.graphqls';

const Index = ({ Component, ctx }) => {
  // const { data } = usePromptsQuery()
    return (
      <Providers>
        <Component {...ctx} />
      </Providers>
    )
}

Index.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

export default withApollo(Index)
