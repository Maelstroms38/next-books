import withApollo from '../lib/with-apollo';
import { usePromptsQuery } from '../lib/viewer.graphql';
import { Card } from '../components';
import { Prompt } from '../lib/type-defs.graphqls';

const Index = () => {
  const { data } = usePromptsQuery()

  if (data) {
    const { prompts } = data;
    return (
      <div className="container">
        <div className="row">
          {prompts.map((prompt: Prompt) => (
            <Card {...prompt} key={prompt.id} />
          ))}
        </div>
      </div>
    )
  }

  return <div>...</div>
}

export default withApollo(Index)
