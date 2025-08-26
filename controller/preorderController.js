import { preorderservices } from "../services/preorderService.js";

export let preordercontoller = async (req, res) => {
    let { name, mobile,email, numberofcycle, company } = req.body;
    console.log(
    `user ${name} mobile ${mobile} email${email} quantity ${numberofcycle}  description ${company}`);
try {
    let preorder = await preorderservices(name, mobile,email, numberofcycle, company);
    if (preorder=="success") {
    res.send(`preorder create successfully ${preorder}`);
    } else {
    res.send(`preorder not created`);
    }
} catch (error) {
    console.log(`error occured at preordercontoller ${error.message}`);
}
};
