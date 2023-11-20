const animateButton = document.getElementById('animateButton');
    const aboutImage = document.querySelector('.about-image');
    animateButton.addEventListener('click', function () {
      // pone una pequeña animacion junto a css
      aboutImage.classList.toggle('animated');
    });
  