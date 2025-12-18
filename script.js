// Smooth scrolling for navigation links
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// Active menu highlight on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


// Dark mode toggle
const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const mode = document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";

    localStorage.setItem("theme", mode);
  });
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}


// Contact form validation
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    alert("Message sent successfully!");
    form.reset();
  });
}


// Typing effect (for hero text)
const typingText = document.getElementById("typing");

if (typingText) {
  const words = ["Frontend Developer", "React Learner", "Web Designer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    typingText.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting) {
      charIndex++;
      if (charIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
      }
    } else {
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(typeEffect, isDeleting ? 80 : 120);
  }

  typeEffect();
}
