const projects = [
  {
    title: "Launch countdown timer",
    subtitle:
      "The challenge is to build this countdown timer. There are lots of small CSS tests in the design as well. So it should keep you busy!",
    desktopScreenshot: "./launch-countdown-timer/public/screenshot-desktop.png",
    techstack: ["React JS", "Styled Components", "Vite"],
    demoLink: "./launch-countdown-timer/dist/index.html",
    codeLink:
      "https://github.com/astr0n0mer/challenges-frontendmentor.io/tree/main/launch-countdown-timer/",
  },
  {
    title: "Age calculator app",
    subtitle:
      "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!",
    desktopScreenshot: "./age-calculator-app/public/screenshot-desktop.png",
    techstack: ["React JS", "Styled Components", "Vite"],
    demoLink: "./age-calculator-app/dist/index.html",
    codeLink:
      "https://github.com/astr0n0mer/challenges-frontendmentor.io/tree/main/age-calculator-app/",
  },
  {
    title: "Huddle landing page with curved sections",
    subtitle:
      "Practice using pseudo-elements for styling extras and the CSS position property for the sections with curved edges.",
    desktopScreenshot:
      "./huddle-landing-page-with-curved-sections/public/screenshot-desktop.png",
    techstack: ["HTML", "Tailwind CSS", "Vite"],
    demoLink: "./huddle-landing-page-with-curved-sections/dist/index.html",
    codeLink:
      "https://github.com/astr0n0mer/challenges-frontendmentor.io/tree/main/huddle-landing-page-with-curved-sections/",
  },
  {
    title: "Four card feature section",
    subtitle:
      "A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.",
    desktopScreenshot:
      "./four-card-feature-section/public/screenshot-desktop.png",
    techstack: ["React JS", "SASS", "BEM", "Vite"],
    demoLink: "./four-card-feature-section/dist/index.html",
    codeLink:
      "https://github.com/astr0n0mer/challenges-frontendmentor.io/tree/main/four-card-feature-section/",
  },
  {
    title: "URL shortening API landing page",
    subtitle:
      "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge.",
    desktopScreenshot: "./url-shortening-api/screenshot-desktop.png",
    techstack: ["HTML", "SASS", "BEM", "JavaScript", "Cloud API"],
    demoLink: "./url-shortening-api/index.html",
    codeLink:
      "https://github.com/astr0n0mer/challenges-frontendmentor.io/tree/main/url-shortening-api/",
  },
  {
    title: "Bookmark landing page",
    subtitle:
      "This challenge will really test your layout skills. There are also areas that will require some JavaScript, such as the tabbed features section and the FAQ accordion.",
    desktopScreenshot: "./bookmark-landing-page/screenshot-desktop.png",
    techstack: ["HTML", "SASS", "BEM", "JavaScript"],
    demoLink: "./bookmark-landing-page/index.html",
    codeLink:
      "https://github.com/astr0n0mer/challenges-frontendmentor.io/tree/main/bookmark-landing-page/",
  },
  {
    title: "Interactive card details form",
    subtitle:
      "This fun project will be an excellent way to practice DOM manipulation and form validation while also putting your HTML and CSS skills to the test.",
    desktopScreenshot: "./interactive-card-details-form/screenshot-desktop.png",
    techstack: ["HTML", "SASS", "BEM", "JavaScript"],
    demoLink: "./interactive-card-details-form/index.html",
    codeLink:
      "https://github.com/astr0n0mer/challenges-frontendmentor.io/tree/main/interactive-card-details-form/",
  },
  {
    title: "Fylo data storage component",
    subtitle:
      "This component has some interesting CSS challenges in the design. If you're looking to test your CSS skills, this will be a great project for you!",
    desktopScreenshot: "./fylo-data-storage-component/screenshot-desktop.png",
    techstack: ["HTML", "CSS"],
    demoLink: "./fylo-data-storage-component/index.html",
    codeLink:
      "https://github.com/astr0n0mer/challenges-frontendmentor.io/tree/main/fylo-data-storage-component/",
  },
  {
    title: "Testimonials grid section",
    subtitle:
      "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",
    desktopScreenshot: "./testimonials-grid-section/screenshot-desktop.png",
    techstack: ["HTML", "SASS", "BEM"],
    demoLink: "./testimonials-grid-section/index.html",
    codeLink:
      "https://github.com/astr0n0mer/challenges-frontendmentor.io/tree/main/testimonials-grid-section/",
  },
  {
    title: "Advice generator app",
    subtitle:
      "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
    desktopScreenshot: "./advice-generator-app/screenshot-desktop.png",
    techstack: ["HTML", "CSS", "BEM", "JavaScript", "Cloud API"],
    demoLink: "./advice-generator-app/index.html",
    codeLink:
      "https://github.com/astr0n0mer/challenges-frontendmentor.io/tree/main/advice-generator-app/",
  },
  {
    title: "Interactive rating component",
    subtitle:
      "This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!",
    desktopScreenshot: "./interactive-rating-component/screenshot-desktop.png",
    techstack: ["HTML", "CSS", "BEM", "JavaScript"],
    demoLink: "./interactive-rating-component/index.html",
    codeLink:
      "https://github.com/astr0n0mer/challenges-frontendmentor.io/tree/main/interactive-rating-component/",
  },
  {
    title: "3-column preview card component",
    subtitle:
      "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
    desktopScreenshot:
      "./3-column-preview-card-component/screenshot-desktop.png",
    techstack: ["HTML", "CSS", "BEM"],
    demoLink: "./3-column-preview-card-component/index.html",
    codeLink:
      "https://github.com/astr0n0mer/challenges-frontendmentor.io/tree/main/3-column-preview-card-component/",
  },
  {
    title: "Product preview card component",
    subtitle:
      "This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.",
    desktopScreenshot:
      "./product-preview-card-component/screenshot-desktop.png",
    techstack: ["HTML", "CSS", "BEM"],
    demoLink: "./product-preview-card-component/index.html",
    codeLink:
      "https://github.com/astr0n0mer/challenges-frontendmentor.io/tree/main/product-preview-card-component/",
  },
  {
    title: "Order summary component",
    subtitle:
      "A perfect project for newbies who are starting to build confidence with layouts!",
    desktopScreenshot: "./order-summary-component/screenshot-desktop.png",
    techstack: ["HTML", "CSS", "BEM"],
    demoLink: "./order-summary-component/index.html",
    codeLink:
      "https://github.com/astr0n0mer/challenges-frontendmentor.io/tree/main/order-summary-component/",
  },
  {
    title: "QR code component",
    subtitle:
      "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
    desktopScreenshot: "./qr-code-component/screenshot-desktop.png",
    techstack: ["HTML", "CSS", "BEM"],
    demoLink: "./qr-code-component/index.html",
    codeLink:
      "https://github.com/astr0n0mer/challenges-frontendmentor.io/tree/main/qr-code-component/",
  },
];

const projectsHtml = projects
  .map((project) => {
    return `
    <figure class="project" tabindex="0">
        <picture class="project__picture">
            <img
              src="${project.desktopScreenshot}"
              alt="${project.title}"
              loading="lazy"
              class="project__img"
            />
        </picture>

        <figcaption class="project__content">
            <h2 class="project__title">${project.title}</h2>
            <p class="project__subtitle">
              ${project.subtitle}
            </p>
            <aside class="tech-stack">
              ${getProjectTechstack(project.techstack)}
            </aside>
            <div class="project__links">
              <a href="${
                project.demoLink
              }" class="project__link project__link--demo" target="_blank"
              >
                <img src="./images/demo.gif" alt="Site demo" /> Demo
              </a>
              <a href="${
                project.codeLink
              }" class="project__link project__link--code" target="_blank"
              >
                <img src="./images/code.gif" alt="Site code" >
                Code
              </a>
            </div>
        </figcaption>
    </figure>`;
  })
  .join("");

function getProjectTechstack(techstack) {
  return techstack
    .map((tech) => {
      return `
        <img
          src="./images/${tech.replace(/\s+/g, "-").toLowerCase()}.svg"
          alt="${tech}"
          title="${tech}"
          class="tech ${tech.replace(/\s+/g, "-").toLowerCase()}"
        />`;
    })
    .join("");
}

// insert all projects in the DOM
const projectsGallery = document.querySelector(".projects");
projectsGallery.insertAdjacentHTML("beforeend", projectsHtml);

// set up IntersectionObserver for toggling .fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    } else {
      entry.target.classList.remove("fade-in");
    }
  });
});

const projectElements = projectsGallery.querySelectorAll(".project");
projectElements.forEach((project) => {
  observer.observe(project);

  // set the max-height of <picture> equal to its adjacent <figure>
  const picture = project.querySelector(".project__picture");
  const content = project.querySelector(".project__content");
  picture.style.maxHeight = `${content.offsetHeight}px`;

  // set the image translate length for translating the project screenshot on hover & focus
  const imgTranslateLength = `min(calc((100% - ${content.offsetHeight}px) * -1), 1px)`;
  picture.style.setProperty("--img-translate-length", imgTranslateLength);
});
