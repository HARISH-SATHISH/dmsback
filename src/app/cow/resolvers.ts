import { prismaClient } from "../../client/db"


interface cowdata{
    age:number,
    vacination:string,
    hstar:string,
    farmerId:number
}

const mutation={
    addCow:(pareant:any,{payload}:{payload:cowdata})=>{
        const cow=prismaClient.cow.create({data:{
            age:payload.age,
            vacination:payload.vacination,
            hstar:payload.hstar,
            farmerId:payload.farmerId
        }})
        return cow
    }
}


export const resolvers={mutation}