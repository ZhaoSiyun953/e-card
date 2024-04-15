document.addEventListener('DOMContentLoaded', () => {
    // Array of Bible verses
    const verses = [
        "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. - John 3:16",
        "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up, Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil; Rejoiceth not in iniquity, but rejoiceth in the truth; Beareth all things, believeth all things, hopeth all things, endureth all things.-1Corinthians13:4-7",
        "I can do all things through Christ which strengtheneth me.-philippians4:13",
        "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.-Romans 8:2",
        "Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.-Proverbs3:5-6",
        "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.- Jeremiah29:11",
        "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.-Isaiah 40:31",
        "God is our refuge and strength, a very present help in trouble. Psalm46:1",
        "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me. -2Corinthians12:9",
        "Come unto me, all ye that labour and are heavy laden, and I will give you rest.-Mattthew11:28",
    ];



    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || 'Guest';

    const randomVerse = verses[Math.floor(Math.random() * verses.length)];

    const verseDisplay = document.getElementById('verseDisplay');
    verseDisplay.innerHTML = `<div class="personalized-greeting">Dear ${name},</div><div class="verse">${randomVerse}</div>`;
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
