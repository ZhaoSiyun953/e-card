// script.js for index.html
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('nameForm');
  form.addEventListener('submit', function(e) {
      e.preventDefault(); 
      const name = document.getElementById('name').value.trim();
      if (name) {
          
          window.location.href = `verse.html?name=${encodeURIComponent(name)}`;
      } else {
          
          alert('Please enter your name.');
      }
  });
});

function createDot() {
  const dot = document.createElement('div');
  dot.classList.add('dot');

  // Set a random size 
  const size = Math.random() * 11 + 2; 
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;

  // Set a random color
  const colors = ['#E02020', '#FA6400', '#44D7B6', '#6236FF', '#FF5FC2']; 
  const color = colors[Math.floor(Math.random() * colors.length)];
  dot.style.backgroundColor = color;

  // Set a random position 
  const container = document.getElementById('floating-dots-container');
  const posX = Math.random() * container.offsetWidth;
  const posY = Math.random() * container.offsetHeight;
  dot.style.left = `${posX}px`;
  dot.style.top = `${posY}px`;

  // Set a random animation duration between 5 and 10 seconds
  const animationDuration = Math.random() * 5 + 5;
  dot.style.animation = `floatAnimation ${animationDuration}s ease-in-out infinite`;

  container.appendChild(dot);
}

// Create multiple dots
function generateDots(numberOfDots) {
  for (let i = 0; i < numberOfDots; i++) {
    createDot();
  }
}

// Call generateDots  number of dots
generateDots(20); 



var music = document.getElementById('background-music');
var playPauseButton = document.getElementById('play-pause-button');
var playIcon = playPauseButton.querySelector('.play-icon');
var pauseIcon = playPauseButton.querySelector('.pause-icon');

playPauseButton.addEventListener('click', function() {
  if (music.paused) {
    music.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  } else {
    music.pause();
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  }
});

