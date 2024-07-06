import mongoose , {Schema, Document} from "mongoose";

export interface IUser extends Document{
    username: string;
    email: string;
    password: string;
    fullname: string;
};
const userSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    fullname: {type: String, required: true},
});

export default mongoose.model<IUser>('User', userSchema);