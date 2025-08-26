import { comparePassword, hashPassword } from "../Authentication/bcrypt.js";
// import { GenerateToken, veriFyJwtToken } from "../Authentication/jwtToken.js";
import { getAllUserServices, userCreateServices, userLoginServices } from "../services/userService.js";

export let registerController = async (req, res) => {
    let { username, mobile, email, password } = req.body;
    console.log(`user ${username}, mobile${mobile},email ${email},password ${password}`)
    try {
        let hash = await hashPassword(password)
        console.log(hash)
        let userCreate = await userCreateServices(username, mobile, email, hash)
        if (userCreate) {
            res.send(`userCreate created succesfully! ${userCreate}`)
        } else {
            res.send(`userCreate not create`)
        }

    } catch (error) {
        console.log(`error occured at user ${error.message}`)
    }
}

export let userLoginController = async (req, res) => {
    let { email, password } = req.body;
    console.log(`email: ${email}, password: ${password}`);

    try {
        let dbUser = await userLoginServices(email);

        if (!dbUser) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        let userlog = await comparePassword(password, dbUser.password);

        if (!userlog) {
            return res.status(401).json({ success: false, message: "Incorrect password" });
        }

        let token = await genrateToken(email, process.env.PRIVATEKEY);
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token: token
        });

    } catch (error) {
        console.error(`Error occurred at userLogin: ${error.message}`);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export let getProfileController = async (req, res) => {

    let getToken = req.headers["authorization"]
    console.log(getToken)
    try {
        let verifyjwt = await veriFyJwtToken(getToken.split(` `)[1], process.env.PRIVATEKEY)
        if (verifyjwt) {
            let allUserData = await getAllUserServices()

            res.send(`token verify successfully  ${allUserData}`)
        } else {
            res.send(`token verify failed `)
        }
    } catch (error) {
        console.log(`erroe occured at  getProfile${error.message}`)
    }

}