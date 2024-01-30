const all = document.querySelectorAll(".container div");

setInterval(() => {
  all.forEach((bubble) => {
    bubble.style.transform = `translate(${Math.random() * 100}vw, ${
      Math.random() * 100
    }vh)`;
    bubble.style.background = `hsl(${Math.random() * 360}, 20%, 90%)`;
  });
}, 2000);
