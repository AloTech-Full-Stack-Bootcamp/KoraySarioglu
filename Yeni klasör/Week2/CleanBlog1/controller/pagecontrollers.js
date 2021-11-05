exports.getaboutpage  = (req, res) => {
    res.render("about");
  };

exports.getaddpage  = (req, res) => {
    res.render("add");
  };

exports.geteditpage = async (req, res) => {
    const datas = await Data.findOne({ _id: req.params.id });
    res.render("edit", {
      datas,
    });
  };