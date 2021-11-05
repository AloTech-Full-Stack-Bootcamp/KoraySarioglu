const Data = require('../models/Data')

exports.getalldatas = async (req, res) => {
    const datas = await Data.find({});
    res.render("index", {
      datas,
    });
  }; 
  
  exports.getdata = async (req, res) => {
    const datas = await Data.findById(req.params.id);
    res.render("post", {
      datas,
    });
  };

  exports.postdata = async (req, res) => {
    await Data.create(req.body);
    res.redirect("/");
  };

  exports.updatedata = async (req, res) => {
    const data = await Data.findOne({ _id: req.params.id });
    data.Title = req.body.Title;
    data.details = req.body.details;
    data.save();
    res.redirect("/");
  };

  exports.deletedata = async (req, res) => {
    await Data.findByIdAndRemove(req.params.id);
    res.redirect("/");
  };