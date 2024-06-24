import axios from "axios"
import dataStore from "./dataStore"


export async function CheckLogin(name, password) {
  try {
    const res = await axios.post('http://localhost:8787/login', { name, password })
    if (res.status === 200) {
      console.log("vvvvvvvvvv")

      dataStore.setIsLogin(true);
    }
  }
  catch (error) {
    if (error.response.status === 401) {
      console.log('failed')
    }
    else {
      console.log(error)
    }
  }
}



