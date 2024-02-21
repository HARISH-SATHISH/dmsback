"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
exports.type = `#graphql

input farmerdata{
  id:Int
}

type Farmer{
    id:Int 
    pass:String
    name:String
    cow:[Cow]
    milk:[Milk]
    raw:[RawMaterial]
  }
  
`;
