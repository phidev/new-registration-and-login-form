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

function ValidEmail() {
  let email = document.getElementById("email").value;
  let regex = RegExp("^[^s@]+@[^s@]+.[^s@]+$").test(email); // Matcht nicht !

  if (regex) {
    document.getElementById("email").style.backgroundColor = "green";
  } else {
    document.getElementById("email").style.backgroundColor = "red";
  }
}

$(document).ready(function () {
  $("p").click(function () {
    $(".imprint").hide("slow");
  });
});

//new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
