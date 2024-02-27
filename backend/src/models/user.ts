import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { UserType } from '../shared/types';


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
})

//It is a Mongoose schema pre-save hook that hashes the user's password before it is saved to the database.
userSchema.pre("save", async function (next) {
    //This line checks to see if the user's password has been modified.
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
})

const User = mongoose.model<UserType>("User", userSchema);

export default User;