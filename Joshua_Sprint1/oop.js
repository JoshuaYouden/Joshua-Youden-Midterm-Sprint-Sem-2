window.addEventListener("DOMContentLoaded", function () {
  class Beta {
    constructor(f, l, e, c, g) {
      this.firstname = f;
      this.lastname = l;
      this.email = e;
      this.country = c;
      this.games = g;
    }

    addBetaToList(beta) {
      if (
        beta.firstname === "" ||
        beta.lastname === "" ||
        beta.email === "" ||
        beta.country === "" ||
        beta.games === ""
      ) {
        this.showAlert("No field should be empty", "error");
      } else {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${beta.firstname}</td><td>${beta.lastname}</td><td>${beta.email}</td><td>${beta.country}</td><td>${beta.games}</td><td><button class="delete">X</button></td>`;
        document.querySelector("#beta-list").appendChild(row);
        this.showAlert("Data succesfully added", "success");
      }
    }

    clearFields() {
      document.querySelector("#firstname").value = "";
      document.querySelector("#lastname").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#country").value = "";
      document.querySelector("#games").value = "";
    }

    showAlert(m, c) {
      let div = document.createElement("div");
      div.innerText = m;
      div.className = c;
      div.id = "box";
      document.querySelector("#notification").appendChild(div);
      setTimeout(function () {
        document.querySelector("#box").remove();
      }, 3000);
    }

    deleteBeta(elemToDelete) {
      if (elemToDelete.className === "delete") {
        elemToDelete.parentElement.parentElement.remove();
        this.showAlert("Data removed successfully", "success");
      } else {
        this.showAlert("Wrong area clicked, please click on X", "error");
      }
    }
  }

  class Store {
    static addBeta(beta) {
      var betas = Store.getBeta();
      betas.push(beta);
      localStorage.setItem("beta", JSON.stringify(betas));
    }

    static getBeta() {
      var betas;
      if (localStorage.getItem("beta") === null) {
        betas = [];
      } else {
        betas = JSON.parse(localStorage.getItem("beta"));
      }
      return betas;
    }
    static displayBeta() {
      var betas = Store.getBeta();
      betas.forEach((beta) => {
        var objbeta = new Beta(
          beta.firstname,
          beta.lastname,
          beta.email,
          beta.country,
          beta.games
        );
        objbeta.addBetaToList(beta);
      });
    }

    static removeBeta(betaToRemove) {
      let betas = Store.getBeta();
      betas = betas.filter((beta) => beta.email !== betaToRemove.email);
      localStorage.setItem("beta", JSON.stringify(betas));
    }
  }

  let form = document.querySelector("#form1");

  form.addEventListener("submit", function (e) {
    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    let email = document.querySelector("#email").value;
    let country = document.querySelector("#country").value;
    let games = document.querySelector("#games").value;

    let beta = new Beta(firstname, lastname, email, country, games);

    beta.addBetaToList(beta);
    Store.addBeta(beta);
    beta.clearFields();
    beta.showAlert("Data successfully added", "success");

    e.preventDefault();
  });

  document.querySelector("#data").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.parentElement.remove();
    }
  });

  Store.displayBeta();
});
