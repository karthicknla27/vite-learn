import axios from "axios";
import './style.css'


export const fetchRandomDogImage = () => {
  return axios.get("https://dog.ceo/api/breeds/image/random");
};

async function start() {
  try {
    const res = await fetchRandomDogImage();
    console.log(res.data.message);
    document.querySelector("#imgid").setAttribute("src", res.data.message);
  } catch (error) {
    console.log(error);
  }
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  start();
});