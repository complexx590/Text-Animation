const tl = gsap.timeline({
  default: { duration: 0.75, ease: "Power3.easeout" },
});

tl.fromTo(
  ".building-img",
  { scale: 1.3, borderRadius: "0rem" },
  {
    scale: 1,
    borderRadius: "2rem",
    delay: 0.45,
    duration: 1,
    ease: "elastic.out(1.2,1)",
  }
);

tl.fromTo(".cta1", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta3", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta2", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta4", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<30%");
tl.fromTo(".cta6", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta5", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".btn", { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "<");

const logo = document.querySelector(".logo");
const letters = logo.textContent.split("");

//as now we dont want our old words as we split the word below
logo.textContent = "";
letters.forEach((letter) => {
  const a = (logo.innerHTML += '<span class="letter">' + letter + "</span>");
});

gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
  ".letter",
  { y: "-100%", opacity: 0 },
  { y: 0, opacity: 1, delay: 0.8, stagger: 0.05, ease: "back.out(3)" }
);
