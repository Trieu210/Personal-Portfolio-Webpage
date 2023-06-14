function handleButtonClicks() {
  const navbarLinks = document.querySelectorAll('.navbar-link');
  const articles = document.querySelectorAll('article[data-page]');

  // Function to hide all articles
  function hideAllArticles() {
    articles.forEach((article) => {
      article.style.display = 'none';
    });
  }

  // Function to show the clicked article
  function showArticle(page) {
    const article = document.querySelector(`article[data-page="${page}"]`);
    if (article) {
      article.style.display = 'block';
    }
  }

  // Add click event listeners to the navbar links
  navbarLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const clickedLink = event.target;
      const page = clickedLink.textContent.toLowerCase();

      // Hide all articles
      hideAllArticles();

      // Show the corresponding article
      showArticle(page);
    });
  });
}

// Call the function to handle button clicks
handleButtonClicks();

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

