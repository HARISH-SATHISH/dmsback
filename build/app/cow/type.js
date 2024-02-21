"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
exports.type = `#grapgql

type Cow{
    id:Int 
    age:Int
    vacination:String
    hstar:String
    farmerId:Int
    milk:[Milk]
    raw:[RawMaterial]
  }
`;
