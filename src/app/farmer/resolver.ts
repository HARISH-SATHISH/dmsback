import { prismaClient } from "../../client/db"



interface farmerdata{
    id:number
  }

interface creddata{
  id:number,
  pass:string
}

const query={
    getFarmer:async (parent:any,{token}:{token:farmerdata})=>{
         const farmer = await prismaClient.farmer.findUnique({where:{id:token.id}})
         return farmer
    },
    verifyFarmer:async (parent:any,{payload}:{payload:creddata})=>{
      const farmer = await prismaClient.farmer.findUnique({where:{id:payload.id}})
      if(farmer?.pass==payload.pass){
        return farmer
      }
      else
      {
        return null
      }
    }
}

const extraResolvers={
  Farmer:{
    cow:(parent:farmerdata)=>prismaClient.cow.findMany({where:{farmerId:parent.id}}),
    raw:(parent:farmerdata)=>prismaClient.rawMaterial.findMany({where:{farmerId:parent.id}}),
    milk:(parent:farmerdata)=>prismaClient.milk.findMany({where:{farmerId:parent.id}}),
  }
}

export const resolvers ={query,extraResolvers}