import { PrismaClient } from ".prisma/client";
import { userRegisterDto } from "../models/user"; 

const prisma = new PrismaClient()



export const addUser = (user: userRegisterDto) => {
    
}



export const findUserByNickname = (nickname: string) => {

}



