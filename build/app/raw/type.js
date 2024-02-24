"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
exports.type = `#graphql

input rawdata{
  feed:String
    drug:String
    
    farmerId:Int
   
    cowId:Int
}


type RawMaterial{
    id:Int 
    feed:String
    drug:String
    
    farmerId:Int
   
    cowId:Int
  }

`;
