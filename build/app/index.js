"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initServer = void 0;
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const body_parser_1 = __importDefault(require("body-parser"));
const farmer_1 = require("./farmer");
const cow_1 = require("./cow");
const milk_1 = require("./milk");
const raw_1 = require("./raw");
const employee_1 = require("./employee");
const cors_1 = __importDefault(require("cors"));
function initServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use(body_parser_1.default.json());
        app.use((0, cors_1.default)());
        const graphqlServer = new server_1.ApolloServer({
            typeDefs: `
    ${farmer_1.farmer.type}
    ${cow_1.cow.type}
    ${milk_1.milk.type}
    ${raw_1.raw.type}
    ${employee_1.emp.type}
    type Query{
        hello: String ,
        ${farmer_1.farmer.query},
        ${employee_1.emp.query}
    }
    type Mutation{
      ${milk_1.milk.mutation},
      ${raw_1.raw.mutation},
      ${cow_1.cow.mutation}
    }
    
    `,
            resolvers: Object.assign({ Query: Object.assign(Object.assign({ hello: () => 'Hello, GraphQL!' }, farmer_1.farmer.resolvers.query), employee_1.emp.resolvers.query), Mutation: Object.assign(Object.assign(Object.assign({}, milk_1.milk.resolvers.mutation), raw_1.raw.resolvers.mutation), cow_1.cow.resolvers.mutation) }, farmer_1.farmer.resolvers.extraResolvers)
        });
        yield graphqlServer.start();
        app.use('/graphql', (0, express4_1.expressMiddleware)(graphqlServer));
        return app;
    });
}
exports.initServer = initServer;
