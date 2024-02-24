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
    verifyEmp: (parent, { payload }) => __awaiter(void 0, void 0, void 0, function* () {
        const emp = yield db_1.prismaClient.employee.findUnique({ where: { id: payload.id } });
        if ((emp === null || emp === void 0 ? void 0 : emp.pass) == payload.pass) {
            return emp;
        }
        else {
            return null;
        }
    })
};
exports.resolvers = { query };
