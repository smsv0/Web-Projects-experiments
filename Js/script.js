const containerIcons = document.getElementById("container-icons");
const navList = document.getElementById("nav-list");
const cerrar = document.getElementById("close-icon");
const menu = document.getElementById("list-icon");

const  mostar_ocultar_nav = () => {
      navList.classList.toggle("nav-list--show");
      menu.classList.toggle("list-icon-hide")
      cerrar.classList.toggle("close-icon-show")
}

containerIcons.addEventListener("click", mostar_ocultar_nav);


const cards = document.querySelector('.cards-contain-h');

const observer = new IntersectionObserver (
      (entries) => {
           entries.forEach(entry => {
            if (entry.isIntersecting) {
                  cards.classList.add('active')
            } else {
                  cards.classList.remove('active')

            }

           });
      },
      {threshold: 0.3}
);

observer.observe(cards);

const inners = document.querySelectorAll('.cards-inner');

const flip = (event) => {
      event.currentTarget.classList.toggle('flipped');
}

inners.forEach(inner => {
    inner.addEventListener("click", flip);
});

const videos = document.querySelectorAll('video');

// Detectar si es dispositivo móvil
const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
    // En móvil: usar Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, observerOptions);

    videos.forEach(video => {
        videoObserver.observe(video);
    });
} else {
    // En desktop: reproducir solo al hacer hover
    videos.forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });
        
        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0; // Reiniciar al inicio
        });
    });
}

const faqItems = document.querySelectorAll('.faq-item');


faqItems.forEach(item => {
    const question = item.querySelector('.faq-question')
    
    question.addEventListener('click', () => {
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
          }
        });
    

    item.classList.toggle('active');
  });
});

    
