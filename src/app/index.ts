import express from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from "body-parser";
import {farmer} from './farmer'
import {cow} from './cow'
import {milk} from './milk'
import {raw} from './raw'

import cors from 'cors'

export async function initServer() {
  const app = express()
  app.use(bodyParser.json())
  app.use(cors())

  const graphqlServer = new ApolloServer({
    typeDefs: `
    ${farmer.type}
    ${cow.type}
    ${milk.type}
    ${raw.type}
    type Query{
        hello: String ,
        ${farmer.query}
    }
    
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello, GraphQL!',
        ...farmer.resolvers.query
      },
    //   Mutation: {
       
    //   },
     
    }
  });

  await graphqlServer.start()
  app.use('/graphql', expressMiddleware(graphqlServer))
  return app
}