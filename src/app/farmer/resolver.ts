import { prismaClient } from "../../client/db"



interface farmerdata{
    id:number
  }

const query={
    getFarmer:async (parent:any,{token}:{token:farmerdata})=>{
         const farmer = await prismaClient.farmer.findUnique({where:{id:token.id}})
         return farmer
    }
}


export const resolvers ={query}