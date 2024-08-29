const sideMenu = document.querySelector("#sideMenu");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

// copy right year

var currentYear = new Date().getFullYear();
document.getElementById("year").textContent =
currentYear + " " + "Vijay. All rights reserved";


// data-aos="fade-down-right"
// data-aos="fade-up-left"

// scroll nav bar bg-color change
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop=blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
    navLinks.classList.remove(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  } else {
    navBar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop=blur-lg",
      "shadow-sm"
    );
    navLinks.classList.add(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  }
});

// darkmode and lightmode

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}

// Form submit alert message and reset input

document.getElementById("myForm").addEventListener('submit', function(e){
  e.preventDefault();
  Swal.fire({
    title: "Custom animation with Animate.css",
    showClass: {
      popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
    },
  });

  this.reset();
});

// typing text

 var typing = new Typed(".text", {
   strings: ["", "Frontend Developer", "React JS Developer", "Fresher"],
   typeSpeed: 100,
   backSpeed: 40,
   loop: true,
 });

// nav active link 

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // Function to set the active link
  function setActiveLink(link) {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    link.classList.add("active");
  }

  // Intersection Observer callback
  function onSectionIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeLink = document.querySelector(
          `a[href="#${entry.target.id}"]`
        ).parentElement;
        setActiveLink(activeLink);
      }
    });
  }

  // Setting up Intersection Observer
  const observer = new IntersectionObserver(onSectionIntersection, {
    threshold: 0.6, // Adjust this value based on when you want the active link to change
  });

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Handle click event to set active class manually when link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      setActiveLink(this);
    });
  });
});
