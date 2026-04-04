import axios from "axios";

async function Login(details) {
  try {
    const response = await axios.post("http://localhost:3000/login", details, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}
async function checkAuthentication(){
  try{
  const response=await axios.get("http://localhost:3000/authentication",{
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.Authenticated;
  }
  catch(err){
    throw err;
  }
}

async function tokencheck(hashed) {
  try {
    const response = await axios.post("http://localhost:3000/tokenCheck", {
      token: hashed,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

async function register(details) {
  try {
    const response = await axios.post(
      "http://localhost:3000/register",
      details,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (err) {
    throw err;
  }
}

async function SignOut(){
  try{
    const response =await axios.get("http://localhost:3000/signout",{
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }
  catch(err){
    throw err;
  }
}

export default {checkAuthentication,Login,tokencheck,register,SignOut};