import { Types } from "mongoose";
import user from "../models/users.models";
import { IUser } from "../models/users.models";

export const createUser = async (userData: IUser) : Promise<IUser> => {
    try{
        const newUser = new user(userData);
        await newUser.save();
        return newUser;
    }catch (err) {
        throw err;
    }
};

export const getUsers = async () : Promise<IUser[]> => {
    try{
        const users = await user.find();
        return users;
    }catch (err) {
        throw err;
    }
}

export const getUserById = async (id:string) : Promise<IUser | null> => {
    try{
        if (!Types.ObjectId.isValid(id)) {
            return null;
          }
        const userById = await user.findById(id);
        return userById;
    }catch (err){
        throw err;
    }
}

export const updateUser = async (id:string, userData: Partial<IUser>) : Promise<IUser | null> => {
    try{
        if (!Types.ObjectId.isValid(id)) {
            return null;
          }
        const updatedUser = await user.findByIdAndUpdate(id, userData, {new: true});
        return updatedUser;
    }catch(err){
        throw err;
    }
}

export const deleteUser = async (id:string) : Promise<IUser | null> => {
    try{
        if (!Types.ObjectId.isValid(id)) {
            return null;
          }
        const deletedUser = await user.findByIdAndDelete(id);
        return deletedUser;
    }catch(err){
        throw err;
    }
}