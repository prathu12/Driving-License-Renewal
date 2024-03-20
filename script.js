document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.question');
  const progress = document.querySelector('.progress');

  let currentIndex = 0;

  questions.forEach((question, index) => {
    const inputs = question.querySelectorAll('.answer');
    
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        const charactersEntered = Array.from(inputs).reduce((acc, curr) => acc + curr.value.length, 0);
        if (charactersEntered >= 3 || (input.tagName === 'SELECT' && input.value !== '')) {
          currentIndex = index + 1;
          showNextQuestion();
        }
      });
    });
  });

  function showNextQuestion() {
    if (currentIndex < questions.length) {
      questions.forEach(question => {
        question.classList.remove('active');
      });
      questions[currentIndex].classList.add('active');
      updateProgressBar();
    }
  }

  function updateProgressBar() {
    const percentage = ((currentIndex + 1) / questions.length) * 100;
    progress.style.width = percentage + '%';
  }
});
