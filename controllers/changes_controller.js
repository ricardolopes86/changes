var redis = require("redis");
var client = redis.createClient();

client.on("error", function (err) {
  console.log(err);
});
client.on("connect", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to redis");
  }

})
exports.getAllChanges = function (req, res) {
  
};
