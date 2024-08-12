window.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#form2");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let message = document.querySelector("#message").value;

    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      phone === "" ||
      message === ""
    ) {
      alert("No field should be empty");
    } else {
      window.location.href = "Confirmation.html";
    }
  });
});
