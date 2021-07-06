import {Resolver, Query} from 'type-graphql'

//graphql types and typescript types 
@Resolver()
export class UserResolver {
    @Query(() => String)
    hello() {
        return 'hi!'
    }   
}
