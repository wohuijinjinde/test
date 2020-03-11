
import axios from "axios"
export default {
  getCategories (calllback) {
    let data = {};
    axios.get("/api/data").then(res => {
      // data = res.data.Category
      console.log(res.data.Category);
      calllback(res.data.Category)
    });
  }
}
