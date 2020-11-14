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
    return res.redirect(`/${hash}/estadisticas`);
  } else {
    console.log("HASH", hash);
    Url.findHash(hash).then((item) => {
      console.log(item);
      Url.changeCounter(item).then((id) => {
        console.log(id);
      });
      return res.redirect(item.url);
    });
  }
};

exports.estadisticas = async (req, res) => {
  const hash = req.params.hash;
  console.log("HASH", hash);
  Url.findHash(hash.slice(0, -1)).then((item) => {
    console.log(item);

    res.render("homepage/estadisticas", { item: item });
  });
};
