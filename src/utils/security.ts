import { createHash } from 'crypto';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
export const encryptString = (input: string) : string => {
    const hash = createHash('sha256');
    hash.update(input);
    const encrypted:string = hash.digest('hex');
    return encrypted;
}

// const key = process.env.SECRET_KEY;
const key = 'nmLfIhirNprAoNkGv7qaod1AotOXwMHq';
export const generateToken = (id: string) : string => {
    const payload = {userId: id}
    const token = jwt.sign(payload, key, {expiresIn: '1h'});
    return token;
}

export const verifyToken = (token: string) : boolean => {
    let isValid: boolean = true;
    jwt.verify(token, key, (err, decoded) => {
        if(err){
            isValid = false;
        }
    });
    return isValid;
}

// const revalidateToken = (token: string) : object => {
//     let isValid: boolean = true;
//     let data;
//     jwt.verify(token, key, (err, decoded) => {
//         if(err){
//             isValid = false; 
//             data = null;
//         }else{
//             isValid = true;
//             data = decoded;
//         }
//     });
//     // Token is valid, check the expiration time
//     const currentTime = Math.floor(Date.now() / 1000);
//     if (data.exp - currentTime < 60 * 10) {
//     // Token will expire in less than 10 minutes, issue a new one
//         const newUser = {
//             id: data.id,
//             username: data.username,
//             email: data.email,
//         };
//     }
// }