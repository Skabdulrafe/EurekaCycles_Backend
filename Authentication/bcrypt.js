import bcrypt from 'bcrypt'
export let hashPassword =async (plainpassword) => {
    try {
        let hashPass = await bcrypt.hash(plainpassword,10)
        return hashPass;
    } catch (error) {
        console.log(`erropr occured at hashPassword ${error.message}`)
    }
}
export let comparePassword =async(password,dbPassword) => {
    try {
        let compare = await bcrypt.compare(password,dbPassword)
        return compare;
    } catch (error) {
        console.log(`errror occured at compare password ${error.message}`)
    }
}