import { QueryResolvers } from './type-defs.graphqls'
import { ResolverContext } from './with-apollo'

const Query: Required<QueryResolvers<ResolverContext>> = {
  prompts(_parent, _args, _context, _info) {
    return [{ id: String(1), header: 'Basketball is the best ', word: 'Noun', footer: 'in the world' },
            { id: String(2), header: 'BBQ at my house! Everyones invited, and its Bring Your Own', word: 'Noun', footer: '' }]
  },
}

export default { Query }
