function validate() {

  const mainContainer = document.querySelector(".main-container");
  const thanksContainer = document.querySelector(".thanks-section");
  const subscribeButton = document.getElementById("subscribe");
  const dismissButton = document.getElementById("dismiss");
  const emailInput = document.getElementById("email").value;
  const invalidEmail = document.querySelector(".invalid-email");


let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)[.]([a-z]{2,4})$/

  if (regx.test(emailInput)) {
    mainContainer.style.display = "none";
    thanksContainer.classList.remove("hidden");
  } else {
    invalidEmail.innerHTML ="Valid email required";
    invalidEmail.style.color ="hsl(4, 100%, 67%)";
    emailInput.classList.add("active");
  }

  dismissButton.addEventListener("click", () => {
    thanksContainer.classList.add("hidden");
    mainContainer.style.display ="flex";
  })
}