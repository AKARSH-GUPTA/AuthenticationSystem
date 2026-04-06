import axios from "axios";

async function Login(details) {
  try {
    const response = await axios.post("https://authsystem-backend-c6q1.onrender.com/login", details, {
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
  const response=await axios.get("https://authsystem-backend-c6q1.onrender.com/authentication",{
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

async function register(details) {
  try {
    const response = await axios.post(
      "https://authsystem-backend-c6q1.onrender.com/register",
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
    const response =await axios.get("https://authsystem-backend-c6q1.onrender.com/signout",{
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

export default {checkAuthentication,Login,register,SignOut};