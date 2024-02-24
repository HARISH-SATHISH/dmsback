import { prismaClient } from "../../client/db"


interface rawdata{
    feed:string,
    drug:string,
    farmerId:number
    cowId:number
}

const mutation={
    addRawData:async (parent:any,{payload}:{payload:rawdata})=>{
        
        const raw= await prismaClient.rawMaterial.create({data:{
            feed:payload.feed,
            drug:payload.drug,
            farmerId:payload.farmerId,
            cowId:payload.cowId
        }})
        return raw
    }}


export const resolvers={mutation}