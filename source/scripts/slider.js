document.addEventListener('DOMContentLoaded', () => {
  const comparisonContainer = document.querySelector('.example__comparison');
  const sliderButton = document.querySelector('.example__slider');

  if (!comparisonContainer || !sliderButton) {
    return;
  }

  const setPosition = (position) => {
    const clampedPosition = Math.min(Math.max(position, 0), 100);
    comparisonContainer.style.setProperty('--comparison-position', `${clampedPosition}%`);
  };

  let isDragging = false;

  const updateFromPointer = (event) => {
    const rect = comparisonContainer.getBoundingClientRect();
    const pointerPosition = ((event.clientX - rect.left) / rect.width) * 100;
    setPosition(pointerPosition);
  };

  setPosition(50);

  sliderButton.addEventListener('pointerdown', (event) => {
    isDragging = true;
    sliderButton.setPointerCapture(event.pointerId);
    updateFromPointer(event);
  });

  sliderButton.addEventListener('pointermove', (event) => {
    if (!isDragging) {
      return;
    }

    updateFromPointer(event);
  });

  sliderButton.addEventListener('pointerup', () => {
    isDragging = false;
  });

  sliderButton.addEventListener('pointerleave', () => {
    isDragging = false;
  });

  sliderButton.addEventListener('click', (event) => {
    if (isDragging) {
      event.preventDefault();
      return;
    }

    const rect = comparisonContainer.getBoundingClientRect();
    const clickPosition = ((event.clientX - rect.left) / rect.width) * 100;
    setPosition(clickPosition);
  });
});
