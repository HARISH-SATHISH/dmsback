"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const db_1 = require("../../client/db");
const mutation = {
    addCow: (pareant, { payload }) => {
        const cow = db_1.prismaClient.cow.create({ data: {
                age: payload.age,
                vacination: payload.vacination,
                hstar: payload.hstar,
                farmerId: payload.farmerId
            } });
        return cow;
    }
};
exports.resolvers = { mutation };
