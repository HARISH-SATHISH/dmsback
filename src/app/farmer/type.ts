export const type=`#graphql

input farmerdata{
  id:Int
}
input creddata{
  id:Int
  pass:String
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