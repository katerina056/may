document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('magicBtn');
  const message = document.getElementById('message');
  const title = document.getElementById('title');

  const messages = [
    '🎉 Отлично! JS работает!',
    '✨ Ты настоящий мастер!',
    '🚀 Код ожил!',
    '💜 Спасибо за клик!',
    '🔥 Так держать!',
    '🌟 Магия JavaScript!'
  ];

  let clickCount = 0;

  btn.addEventListener('click', () => {
    clickCount++;
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = `${randomMsg} (клик: ${clickCount})`;

    // лёгкая анимация "тряски" заголовка
    title.style.transform = 'scale(1.1)';
    setTimeout(() => {
      title.style.transform = 'scale(1)';
    }, 200);
  });

  // плавное появление карточек при скролле
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(card);
  });
});