const adviceNumber = document.getElementsByClassName("advice__id-number")[0];
const adviceText = document.getElementsByClassName("advice__text")[0];
const changeAdvice = document.getElementsByClassName("advice__change-btn")[0];

changeAdvice.onclick = async () => {
  let response = await fetch("https://api.adviceslip.com/advice");
  let responseJson = await response.json();
  adviceNumber.textContent = await responseJson["slip"].id;
  adviceText.textContent = await responseJson["slip"].advice;
};

changeAdvice.addEventListener("keypress", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    changeAdvice.onclick();
  }
});

changeAdvice.onclick();
