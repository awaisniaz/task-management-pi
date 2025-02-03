import * as bcrypt from 'bcrypt';
async function hashPassword(password:string,salt=10):Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

