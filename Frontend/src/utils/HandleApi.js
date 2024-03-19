import axios from "axios";

const baseUrl = "http://localhost:3000";

const getAllToDo = (setToDo) => {
  axios
    .get(`${baseUrl}/`)
    .then((response) => {
      console.log("Data:", response.data);
      setToDo(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
// const addToDo =(text,setText,setToDo)=>{
// axios.post(`${baseUrl}/save`,{text}).then((data)=>{
//   console.log(data);
//   setText("")
//   getAllToDo(setToDo)
// })
// }
export { getAllToDo};
