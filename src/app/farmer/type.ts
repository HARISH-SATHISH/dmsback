export const type=`#graphql

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
  
`