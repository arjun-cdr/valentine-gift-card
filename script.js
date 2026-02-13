const noBtn = document.getElementById("no");
  const yesBtn = document.getElementById("yes");
  const success = document.getElementById("success");
  const card = document.querySelector(".card");

  // Absolute positioning needed
  noBtn.style.position = "absolute";

  function moveNoButton() {
    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = cardRect.width - btnRect.width;
    const maxY = cardRect.height - btnRect.height - 40;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }

  // Run away BEFORE hover
  card.addEventListener("mousemove", (e) => {
    const btnRect = noBtn.getBoundingClientRect();
    const distance = Math.hypot(
      e.clientX - (btnRect.left + btnRect.width / 2),
      e.clientY - (btnRect.top + btnRect.height / 2)
    );

    if (distance < 100) {
      moveNoButton();
    }
  });

  // Safety net: No can NEVER be clicked
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
  });

  yesBtn.addEventListener("click", () => {
    document.body.classList.add("accepted");
  });