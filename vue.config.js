const mockData = require("./data/data.json");
// const ListData = require("./data/List.json");
module.exports = {
  //...
  devServer: {
    port: 8080,
    before(app) {
      app.get("/api/data", (req, res) => {
        res.json(mockData);
      });
    }
  },
  publicPath: './'
};
