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
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const db_1 = require("../../client/db");
const query = {
    getFarmer: (parent, { token }) => __awaiter(void 0, void 0, void 0, function* () {
        const farmer = yield db_1.prismaClient.farmer.findUnique({ where: { id: token.id } });
        return farmer;
    }),
    verifyFarmer: (parent, { payload }) => __awaiter(void 0, void 0, void 0, function* () {
        const farmer = yield db_1.prismaClient.farmer.findUnique({ where: { id: payload.id } });
        if ((farmer === null || farmer === void 0 ? void 0 : farmer.pass) == payload.pass) {
            return farmer;
        }
        else {
            return null;
        }
    })
};
const extraResolvers = {
    Farmer: {
        cow: (parent) => db_1.prismaClient.cow.findMany({ where: { farmerId: parent.id } }),
        raw: (parent) => db_1.prismaClient.rawMaterial.findMany({ where: { farmerId: parent.id } }),
        milk: (parent) => db_1.prismaClient.milk.findMany({ where: { farmerId: parent.id } }),
    }
};
exports.resolvers = { query, extraResolvers };
