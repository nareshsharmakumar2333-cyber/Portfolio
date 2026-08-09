document.addEventListener("DOMContentLoaded", () => {
  // Current year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Active navbar link while scrolling
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const setActiveLink = () => {
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 130;
      if (window.scrollY >= top) current = section.getAttribute("id");
    });

    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  };

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  // Close mobile navbar after clicking a link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Back to top
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 500 ? "flex" : "none";
    backToTop.style.alignItems = "center";
    backToTop.style.justifyContent = "center";
  });
  backToTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

  // Contact form: opens the user's email client with the message
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim() || "Portfolio Enquiry";
    const message = document.getElementById("message").value.trim();

    const body =
      `Hello Naresh Sharma,%0D%0A%0D%0A` +
      `Name: ${encodeURIComponent(name)}%0D%0A` +
      `Email: ${encodeURIComponent(email)}%0D%0A%0D%0A` +
      `${encodeURIComponent(message)}`;

    window.location.href =
      `mailto:nareshsharmakumar2333@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
});
