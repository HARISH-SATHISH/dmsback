export const type=`#grapgql

input cowdata{
  age:Int
  vacination:String
  hstar:String
  farmerId:Int
}

type Cow{
    id:Int 
    age:Int
    vacination:String
    hstar:String
    farmerId:Int
    raw:[RawMaterial]
  }
`