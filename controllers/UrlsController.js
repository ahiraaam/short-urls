const Url = require("../models/Url");

exports.all = (req, res) => {
  let urls = Url.all().then((objects) => {
    res.render("homepage/index", { urls: objects });
  });
};

exports.store = (req, res) => {
  let urlObject = {};
  const { nanoid } = require("nanoid");
  urlObject.url = req.body.urlInicial;
  urlObject.hash = nanoid(10);
  Url.create(urlObject).then((id) => {
    // if the request is expecting an ajax or json response
    console.log("Url creado con id", id);
    return res.redirect("/");
  });
};

exports.getById = async (req, res) => {
  const hash = req.params.hash;
  const finalLetter = hash.toString();
  const isPlus = finalLetter.charAt(finalLetter.length - 1);
  if (isPlus == "+") {
    console.log("ES MAAAS");
    return res.redirect("/");
  } else {
    console.log("HASH", hash);
    Url.findHash(hash).then((item) => {
      console.log(item);
      return res.redirect(item.url);
    });
  }
};
