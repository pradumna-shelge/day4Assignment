export interface dataformat{
    id:number,
    name:string,
    address?:Address,
    gender?:string,
    skills?:string[]

}

export interface Address{
    flat:number,
    building:string,
    city:string,
    state:string
}