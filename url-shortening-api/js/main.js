const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav--mobile");
const form = document.querySelector(".shortener__form");
const results = document.querySelector(".results");
let shortUrls = JSON.parse(localStorage.getItem("shortUrls")) ?? [];

hamburger.addEventListener("click", toggleMobileNav);
navMobile.addEventListener("click", (e) => e.stopPropagation());
document.body.addEventListener("click", handleBodyClick);

form.addEventListener("submit", handleFormSubmit);

results.addEventListener("click", handleResultsClick);

function toggleMobileNav(e) {
  hamburger.classList.toggle("hamburger--active");
  navMobile.classList.toggle("nav--active");
  e.stopPropagation();
}

function handleBodyClick(e) {
  // hide mobile nav if it's open
  if (navMobile.classList.contains("nav--active")) {
    toggleMobileNav(e);
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  const fullUrl = form.querySelector(".form__full-url").value;
  let shortUrlKeyword = form.querySelector(".form__short-url-input").value;
  const isShortUrlKeywordProvided = Boolean(shortUrlKeyword);
  shortUrlKeyword = shortUrlKeyword || generateRandomString(5);

  fetch(
    `https://api.shrtco.de/v2/shorten?url=${fullUrl}&custom_code=${shortUrlKeyword}`
  )
    .then((blob) => blob.json())
    .then((data) => {
      if (data.ok) {
        console.log(data);
        shortUrls.unshift({
          fullUrl: fullUrl,
          shortUrl: data.result.full_short_link,
        });
        setShortUrls(shortUrls);
        addNewResult(shortUrls[0]);
        e.target.reset();
        e.target.setCustomValidity("");
      } else {
        if (isShortUrlKeywordProvided) {
          alert(data.error);
        } else {
          handleFormSubmit(e);
        }
      }
    });
}

function generateRandomString(
  length = 5,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function setShortUrls(shortUrls) {
  localStorage.setItem("shortUrls", JSON.stringify(shortUrls));
}

function addNewResult(result) {
  const html = `<div class="result">
    <a
      class="result__full-url"
      href="${result.fullUrl}"
      target="_blank"
      >${result.fullUrl}
    </a>
    <a
      class="result__short-url"
      href="${result.shortUrl}"
      target="_blank"
      >${result.shortUrl}
    </a>
    <button class="result__copy-btn">
      <i class="fa-regular fa-clone"></i>
    </button>
    <button class="result__trash-btn">
      <i class="fa-regular fa-trash-can"></i>
    </button>
  </div>`;
  results.insertAdjacentHTML("afterbegin", html);
}

function handleResultsClick(e) {
  const classList = e.target.classList;
  if (classList.contains("result__copy-btn")) {
    copyShortUrl(e.target);
  } else if (classList.contains("result__trash-btn")) {
    removeResult(e.target);
  }
}

function copyShortUrl(copyButton) {
  const shortUrl =
    copyButton.parentElement.querySelector(".result__short-url").href;
  try {
    navigator.clipboard.writeText(shortUrl);
    toggleCopyIcon(copyButton);
    copyTimeout = setTimeout(() => {
      toggleCopyIcon(copyButton);
    }, 800);
  } catch (e) {
    alert("Unable to access clipboard.");
  }
}

function removeResult(trashButton) {
  const resultToRemove = trashButton.parentElement;
  const indexOfResultToRemove = Array.from(results.children).indexOf(
    resultToRemove
  );
  shortUrls.splice(indexOfResultToRemove, 1);
  setShortUrls(shortUrls);
  setTimeout(() => {
    results.removeChild(results.children[indexOfResultToRemove]);
  }, 300);
}

function toggleCopyIcon(copyButton) {
  const icon = copyButton.querySelector("i");
  icon.classList.toggle("fa-clone");
  icon.classList.toggle("fa-circle-check");
}

for (let i = shortUrls.length - 1; i >= 0; i--) {
  addNewResult(shortUrls[i]);
}
