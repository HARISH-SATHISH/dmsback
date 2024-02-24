"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
exports.type = `#graphql

input milkdata{
  quantity:Int!
    date:String!
    price:Int!
    amt:Int!
    farmerId:Int!
    
}


type Milk{
    id:Int 
    quantity:String
    date:String
    price:String
    amt:String
   
    farmerId:Int
    
    
  }


`;
