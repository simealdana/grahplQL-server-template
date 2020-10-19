import { IResolvers } from "graphql-tools";

const query : IResolvers = {
    Query :{
        hola():string {
            return "hola"
        },
        holaConNombre(__: void, {nombre}):string{
            return "hola"+nombre;
        },
        holaAll():string {
            return "hola todos"
        },
    }
}
export default query;