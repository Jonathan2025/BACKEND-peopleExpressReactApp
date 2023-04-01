//13 and 14 - setting up the database model , require mongoose
const mongoose = require("mongoose")
const {DATABASE_URL} = process.env


// 15 Establish Database connection, not much will change from unit 2 
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  // Connection Events
  mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error));


module.exports={
    People: require("./People.js")
    //17 now if we HAD another model in models folder then we could add it here 
}