function storeUrl() {
  console.log("hola mundo");
  const urlInput = document.getElementById("urlInicial").value;
  let body = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ urlInicial: urlInput }),
  };

  fetch("/", body).then((response) => {
    if (response.ok) {
      console.log(response);
    } else {
      throw "Error en la llamada Ajax";
    }
  });
}
