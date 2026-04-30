const ahBtn = document.getElementById("ah");
const laBtn = document.getElementById("la");
const questionText = [
  "Wach mat2akaad?",
  "Chof wkaan!",
  "Rah anskhaaf!! T2akad",
];
const speechBubbleText = [
  "AWILI AWILI!!",
  "Wach mnytk?",
  "ghi kada7k",
  "yak?",
  "z3ma z3ma",
  "3afak anbki!",
];
const question = document.querySelector(".question");
const speechbBubble = document.querySelector(".speech-bubble");

// speechbBubble.innerText = speechBubbleText[0];

let i = 0;
let x = 0;

laBtn.addEventListener("click", () => {
  const style = window.getComputedStyle(ahBtn);
  const fontSize = style.fontSize;
  const rect = ahBtn.getBoundingClientRect();
  const scale = 1.5;
  const newRect = {
    width: rect.width * scale,
    height: rect.height * scale,
    fontSize: parseFloat(fontSize) * scale + "px",
  };

  // console.log(newRect.fontSize);
  gsap.to(ahBtn, {
    duration: 0.5,
    width: newRect.width,
    height: newRect.height,
    fontSize: newRect.fontSize,
    ease: "back.out(5)",
  });
  gsap.fromTo(
    ".speech-bubble",
    { opacity: 0, y: 20 },
    { opacity: 0.8, y: 0, duration: 0.5, ease: "power1.out" },
  );

  if (i < 3) {
    question.innerText = questionText[i];
    i++;
  }

  if (x < 6) {
    speechbBubble.innerText = speechBubbleText[x];
    x++;
  } else {
    x = 0;
    speechbBubble.innerText = speechBubbleText[x];
  }
});
