"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
exports.type = `#grapgql

input cowdata{
  age:Int
  vacination:String
  hstar:String
  farmerId:Int
}

type Cow{
    id:Int 
    age:Int
    vacination:String
    hstar:String
    farmerId:Int
    raw:[RawMaterial]
  }
`;
