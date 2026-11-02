const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

const copyEmail = document.getElementById("copy-email");
copyEmail.addEventListener("click", async event => {
  event.preventDefault();
  const email = "210701505@rajalakshmi.edu.in"; // Replace this with your real email.
  const feedback = document.getElementById("copy-feedback");
  try {
    await navigator.clipboard.writeText(email);
    feedback.textContent = "Email address copied.";
  } catch {
    feedback.textContent = "Please update the email address in index.html and copy it manually.";
  }
});
