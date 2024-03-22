import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Article {
    id: ID
    title: String
    description: String
    author: String
    urlToImage: String
  }

  type Query {
    getAllNews: [Article]
    # getUser(name: String!): Article!
  }
`;
