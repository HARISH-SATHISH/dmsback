import { prismaClient } from "../../client/db"

interface milkdata{
    quantity:number,
    date:string,
    price:number,
    amt:number,
    farmerId:number,
    
}

const mutation={
    addMilkData:async (parent:any,{payload}:{payload:milkdata})=>{
           
           
            const milk = await prismaClient.milk.create({data:{
                quantity:payload.quantity,
                date:payload.date,
                price:payload.price,
                amt:payload.amt,
                farmerId:payload.farmerId
               }})
           return milk
    }
}

export const resolvers={mutation}