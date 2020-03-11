
import axios from "axios"
export default {
  getListByCategory (cb, { category }) {
    axios.get("/api/data").then(res => {
      let result = []
      switch (category) {
        case '':
          result = res.data.List.data
          break
        case '推荐':
          result = res.data.List.data.filter(item => item.isRec)
          break
        case '热点':
          result = res.data.List.data.filter(item => item.isHot)
          break
        default:
          result = res.data.List.data.filter(item => item.category === category)
          break
      }
      cb(result)
    });
  },
  getListByKeyword (cb, { keyword }) {
    axios.get("/api/data").then(res => {
      cb(res.data.List.data.filter(item => item.title.indexOf(keyword) > -1))
    });
  }
}
