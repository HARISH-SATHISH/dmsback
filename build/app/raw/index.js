"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raw = void 0;
const type_1 = require("./type");
const mutation_1 = require("./mutation");
const resolver_1 = require("./resolver");
exports.raw = { type: type_1.type, mutation: mutation_1.mutation, resolvers: resolver_1.resolvers };
