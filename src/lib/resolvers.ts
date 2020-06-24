import {
  QueryResolvers,
  BookNodeConnection,
  BookNode,
} from './type-defs.graphqls';
import { ResolverContext } from './apollo';
import { books } from '~/config';

const Query: Required<QueryResolvers<ResolverContext>> = {
  book(_parent, args, _context, _info): BookNode {
    const { id } = args;
    const { node } = books.edges.find((book) => book.node.id == id);
    if (!node) {
      throw new Error("Book Not Found") 
    }
    return node;
  },
  books(_parent, _args, _context, _info): BookNodeConnection {
    return books;
  },
};

export default { Query };
