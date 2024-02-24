import { prismaClient } from "../../client/db"

interface creddata{
    id:number,
    pass:string
  }

const query={
    verifyEmp:async (parent:any,{payload}:{payload:creddata})=>{
        const emp = await prismaClient.employee.findUnique({where:{id:payload.id}})
        if(emp?.pass==payload.pass){
          return emp
        }
        else
        {
          return null
        }
      }
}

export const resolvers={query}