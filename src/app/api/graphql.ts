import { ApolloServer } from "apollo-server-micro";

import { typeDefs } from "../../../graphql/schema";
import { resolvers } from "../../../graphql/resolver";
import cors from 'micro-cors';

const apolloServer = new ApolloServer({typeDefs, resolvers});

const startServer = apolloServer.start();

export default cors(async function handler(req, res){

    if(req.method ==='OPTIONS'){
        res.send()
        return false
    }

    await startServer;

    await apolloServer.createHandler({
        path:'api/graphql'
    })(req, res)
});



export const config = {
    api: {
        bodyParser: false,
    }
}