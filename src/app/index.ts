import express from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from "body-parser";
import {farmer} from './farmer'
import {cow} from './cow'
import {milk} from './milk'
import {raw} from './raw'
import {emp} from './employee'

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
    ${emp.type}
    type Query{
        hello: String ,
        ${farmer.query},
        ${emp.query}
    }
    type Mutation{
      ${milk.mutation},
      ${raw.mutation},
      ${cow.mutation}
    }
    
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello, GraphQL!',
        ...farmer.resolvers.query,
        ...emp.resolvers.query
      },
      Mutation: {
       ...milk.resolvers.mutation,
       ...raw.resolvers.mutation,
       ...cow.resolvers.mutation
      },
     ...farmer.resolvers.extraResolvers
    }
  });

  await graphqlServer.start()
  app.use('/graphql', expressMiddleware(graphqlServer))
  return app
}