function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("active");
  }

function toggleMenu() {
  const navList = document.querySelector("nav ul");
  navList.classList.toggle("active");
}

  document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
      const question = item.querySelector(".question");
      const answer = item.querySelector(".faq-answer");
      const plusIcon = item.querySelector(".plus");

      question.addEventListener("click", () => {
        const isAnswerVisible = answer.style.display === "block";
        answer.style.display = isAnswerVisible ? "none" : "block";
        plusIcon.textContent = isAnswerVisible ? "+" : "-";
      });
    });
  });

