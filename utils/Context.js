
import axios from "axios";

export  const fetchmovie = async (APIURL) => {


 try {
    const response =await axios.get(APIURL)
    return response.data
 } catch (error) {
    console.log(error)
 }   
};