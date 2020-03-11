

import axios from "axios";

export default {
  getNews (cb, { id }) {
    axios.get("/api/data").then(res => {
      let profile = res.data.List.data.find(item => item.id === Number(id))
      let detail = res.data.News.data.find(item => item.id === Number(id))
      cb(Object.assign(profile, detail))
    });
  }
}
