function changeTheme() {
  let body = document.querySelector("body");
  /*if (body.classList.contains("dark")) {
          body.classList.remove("dark");
        } else {
          body.classList.add("dark");
        }*/

  body.classList.toggle("dark");
}

let themeButton = document.querySelector(".change-theme");
themeButton.addEventListener("click", changeTheme);

function exploreArt() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");

  alert(
    "Hi, " +
      name +
      "👋🏾. " +
      "Thank you for choosing us. We'll be in touch soon!"
  );
}

let exploreButton = document.querySelector(".buy-art");
exploreButton.addEventListener("click", exploreArt);
