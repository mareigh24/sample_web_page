document.addEventListener("DOMContentLoaded", function () {
  const counterElement = document.getElementById("n40");
  const targetNumber = 40;
  const duration = 1000; // Animation duration in milliseconds
  const interval = duration / targetNumber;

  let count = 0;

  const incrementCounter = () => {
    counterElement.textContent = count;
    count++;

    if (count <= targetNumber) {
      setTimeout(incrementCounter, interval);
    }
  };

  incrementCounter();
});
