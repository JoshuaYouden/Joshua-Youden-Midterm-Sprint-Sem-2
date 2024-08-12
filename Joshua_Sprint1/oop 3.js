window.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#form3");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    let email = document.querySelector("#email").value;
    let country = document.querySelector("#country").value;

    if (firstname === "" || lastname === "" || email === "" || country === "") {
      alert("No field should be empty");
    } else {
      window.location.href = "Confirmation.html";
    }
  });
});
