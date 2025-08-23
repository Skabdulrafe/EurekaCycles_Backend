import jwt from 'jsonwebtoken'
export let genrateToken=async(payload,secreatekey)=>{
  try {
     let jwtToken =await jwt.sign(payload,secreatekey)
     return jwtToken
  } catch (error) {
      console.log(`error occured at ganToken ${error.message}`)
  }
   
}

export let veriFyJwtToken=async(token,privatekey)=>{
  try {
    let verify= await jwt.verify(token,privatekey)
    return verify
  } catch (error) {
    console.log(`error occured at veriFyJwtToken ${error.message}`)
  }
}