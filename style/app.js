function isItemInView(item){
    var rect = item.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
  

     const btnTheme = document.querySelector('.theme-btn');
    let element = document.body;
    btnTheme.addEventListener('click', function() {
        element.classList.toggle('light-mode');
        var imageElement = document.getElementById('dlogo');
            if (imageElement.src.toLowerCase().endsWith('loogo.jpg')) {
            imageElement.src = 'img/loogo.jpg';
        } else {
            imageElement.src = 'img/logo.jpeg';
        }
    });

function animateWord(wordId, callback) {
  const word = document.getElementById(wordId);
  const letters = word.textContent.split('');
  word.innerHTML = '';
  word.style.visibility = 'visible';

  letters.forEach((letter, i) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.1}s`;
    word.appendChild(span);
  });

  const totalDuration = letters.length * 0.08 + 0.4;
  setTimeout(callback, totalDuration * 1000);
}

window.addEventListener('load', () => {
  animateWord('word1', () => {
    animateWord('word2', () => {
         animateWord('word3', () => {
      const splash = document.getElementById('splash');
      splash.style.transform = 'translateY(-100%)';

      setTimeout(() => {
        splash.style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.body.style.overflow = 'auto';
      }, 1000);
    });
  });
});
});


// Splash Screen
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx + 1) * 700)
            })
        }, 2000)

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)
    })

    //Hello Change
    const languages = ["Hello.", "مرحبا.", "नमस्ते.", "你好.", "Holá.", "привет."];

        let currentIndex = 0;

        function rotateText() {
            const rotatingTextElement = document.getElementById("rotating-text");
            rotatingTextElement.textContent = languages[currentIndex];
            currentIndex = (currentIndex + 1) % languages.length;
        }

        setInterval(rotateText, 400);

})




document.querySelector(".sidebar .toggle-btn").addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("active");
})

function scrollToSection(event, sectionId) {
    event.preventDefault(); 
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }


  document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in-up");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    });
  
    elements.forEach(el => {
      observer.observe(el);
    });
  });

const blogCards = document.querySelectorAll('.blog-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1 
});

blogCards.forEach(card => {
  observer.observe(card);
});

document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline li');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
  
    timelineItems.forEach(item => {
      observer.observe(item);
    });
  });
  


document.addEventListener('mousemove', (e) => {
    const circle = document.querySelector('.cursor');
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
});






// i have not added this i have commetit
const observerr = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showw');
      observer.unobserve(entry.target); // Optional: animate only once
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.liist li').forEach(li => {
  observer.observe(li);
});