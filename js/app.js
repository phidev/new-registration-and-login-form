function ValidEmail() {
  let email = document.getElementById("email").value;
  let regex = RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$").test(email); // Matcht nicht. Nach .de .com .deineMutter soll kein Leerzeichen erlaubt sein.
  if (regex) {
    console.log("Match");
  } else {
    console.log("No Match");
  }
}
function ValidPassword() {
  let password = document.getElementById("password").value;
  let regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,}$)"
  ).test(password);

  if (regex) {
    console.log("Match");
  } else {
    console.log("No Match");
  }
}
$(document).ready(function () {
  $("p").click(function () {
    $(".imprint").hide("slow");
  });
});