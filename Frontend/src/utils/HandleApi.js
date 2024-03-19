import axios from "axios";

const baseUrl = "https://todoapp-xint.onrender.com";

const getAllToDo = (setToDo) => {
  axios.get(`https://todoapp-xint.onrender.com/`).then((response) => {
    console.log("Data:", response.data);
    setToDo(response.data);
  });
};
const addToDo = (text, setText, setToDo) => {
  axios.post(`${baseUrl}/save`, { text }).then((data) => {
    console.log(data);
    setText("");
    getAllToDo(setToDo).catch((error) => console.log(error));
  });
};
const updateToDo = (toDoID, text, setToDo, setText, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoID, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((error) => console.log(error));
};
const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((response) => {
      console.log(response.data);
      getAllToDo(setToDo);
    })
    .catch((error) => console.log(error));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
