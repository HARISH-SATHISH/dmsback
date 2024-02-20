import express from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from "body-parser";


import cors from 'cors'

export async function initServer() {
  const app = express()
  app.use(bodyParser.json())
  app.use(cors())

  const graphqlServer = new ApolloServer({
    typeDefs: `
    
    type Query{
        hello: String ,
     
    }
    
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello, GraphQL!',
       
      },
    //   Mutation: {
       
    //   },
     
    }
  });

  await graphqlServer.start()
  app.use('/graphql', expressMiddleware(graphqlServer))
  return app
}