import { GraphQLServer } from 'graphql-yoga'


// Type definitions {schema} - where we define operations that can be perfomred on api
//  and what data look like
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`


// Resolvers -  set of functions

const resolvers = {
    Query: {
        hello() {
            return 'This is my first query'
        },
        name() {
            return 'My name es debin'
        },
        location() {
            return 'My location is nebraska'
        },
        bio() {
            return 'Hey its me devon'
        }
    }
}




const server = new GraphQLServer({
    typeDefs, 
    resolvers
})

server.start(() => {
    console.log('The server is up')
})