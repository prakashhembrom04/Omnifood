// Mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const btnCloseEl = document.querySelector(".btn-close-nav");
const headerEl = document.querySelector(".header");
const mainNavEl = document.querySelector(".main-nav");

btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");

    const isExpanded = headerEl.classList.contains("nav-open");
    btnNavEl.setAttribute("aria-expanded", isExpanded);

    document.body.style.overflow = isExpanded ? "hidden" : "";
});

// Close mobile nav when clicking a link
document.querySelectorAll(".main-nav-link").forEach(link => {
    link.addEventListener("click", () => {
        if (headerEl.classList.contains("nav-open")) {
            headerEl.classList.remove("nav-open");
            btnNavEl.setAttribute("aria-expanded", false);
            document.body.style.overflow = "";
        }
    });
});

// Close button logic
btnCloseEl.addEventListener("click", function () {
    headerEl.classList.remove("nav-open");
    btnNavEl.setAttribute("aria-expanded", false);
    document.body.style.overflow = "";
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
    entries => {
        const ent = entries[0];
        document.body.classList.toggle("sticky", !ent.isIntersecting);
    },
    {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
obs.observe(sectionHeroEl);



btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
    const isExpanded = headerEl.classList.contains("nav-open");
    btnNavEl.setAttribute("aria-expanded", isExpanded);
    document.body.style.overflow = isExpanded ? "hidden" : "";
});
