const express = require("express");
const ejs = require("ejs");
const path = require("path");
const Data = require("./models/Data");
const mongoose = require("mongoose");
// Methodoverride modülü tarayıcıda çalışmayan put ve delete'in post ve get şeklinde ifadesini sağlar.
const methodOverride = require("method-override");
const datacontroller = require("./controller/datacontrollers");
const pagecontroller = require("./controller/pagecontrollers");

const app = express();

mongoose.connect("mongodb+srv://Koray:Oe2xlm1n0LrPMhsY@cluster0.mwdot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.set("view engine", "ejs");

// İsteklerimizi Controller klasöründe birleştirip aşağıdaki istekleri oradan import ettik, bu şekilde dosya okunmasını kolaylaştırdık.

app.get("/", datacontroller.getalldatas);
app.get("/datas/:id", datacontroller.getdata);
app.post("/datas", datacontroller.postdata);
app.put("/datas/:id", datacontroller.updatedata);
app.delete("/datas/:id", datacontroller.deletedata);

app.get("/about", pagecontroller.getaboutpage);
app.get("/add", pagecontroller.getaddpage);
app.get("/datas/Edit/:id", pagecontroller.geteditpage);

app.get("/", (req, res) => {
  const blog = {
    id: 1,
    title: "Blog title",
    description: "Blog description",
  };
  res.send(blog);
});

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
