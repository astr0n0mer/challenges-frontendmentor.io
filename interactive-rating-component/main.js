document.querySelector(".form__submit").onclick = () => {
  try {
    let rating = document.querySelector(".rating__radio:checked").value;
    document.querySelector(".selected-rating").textContent = rating;
    document.querySelector(".form").classList.add("d-none");
    document.querySelector(".submit-pg").classList.remove("d-none");
  } catch (e) {
    alert("Oops...please select a rating before submitting.");
  }
};
