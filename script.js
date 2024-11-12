document.addEventListener('DOMContentLoaded', () => {
    // Función para manejar el smooth scroll
    function smoothScrollToTarget(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Ajuste para encabezado fijo
                behavior: 'smooth'
            });
        }
    }

    // Añadir evento a todos los enlaces, excepto al de 'integrantes.html'
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (!link.href.endsWith('integrantes.html')) {
            link.addEventListener('click', smoothScrollToTarget);
        }
    });

    // Función para mostrar la diapositiva actual
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
            slide.style.opacity = i === index ? '1' : '0';
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    // Manejar el clic en el botón siguiente
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Manejar el clic en el botón anterior
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // Mostrar la primera diapositiva
    showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', function() {
    const galleryLightbox = document.getElementById('gallery-lightbox');
    const galleryLightboxImg = document.getElementById('gallery-lightbox-img');
    const galleryCloseBtn = document.querySelector('#gallery-lightbox .close');
    const galleryPrevBtn = document.querySelector('#gallery-lightbox .prev');
    const galleryNextBtn = document.querySelector('#gallery-lightbox .next');
    const galleryImages = document.querySelectorAll('#gallery img');

    const assemblyLightbox = document.getElementById('assembly-lightbox');
    const assemblyLightboxImg = document.getElementById('assembly-lightbox-img');
    const assemblyCloseBtn = document.querySelector('#assembly-lightbox .close');
    const assemblyPrevBtn = document.querySelector('#assembly-lightbox .prev');
    const assemblyNextBtn = document.querySelector('#assembly-lightbox .next');
    const assemblySlides = document.querySelectorAll('#assembly .slide');

    let currentGalleryIndex = 0;
    let currentAssemblyIndex = 0;

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            openGalleryLightbox(index);
        });
    });

    galleryCloseBtn.addEventListener('click', closeGalleryLightbox);
    galleryPrevBtn.addEventListener('click', showPrevGalleryImage);
    galleryNextBtn.addEventListener('click', showNextGalleryImage);

    assemblySlides.forEach((slide, index) => {
        slide.addEventListener('click', function() {
            openAssemblyLightbox(index);
        });
    });

    assemblyCloseBtn.addEventListener('click', closeAssemblyLightbox);
    assemblyPrevBtn.addEventListener('click', showPrevAssemblySlide);
    assemblyNextBtn.addEventListener('click', showNextAssemblySlide);

    function openGalleryLightbox(index) {
        currentGalleryIndex = index;
        galleryLightbox.style.display = 'block';
        galleryLightboxImg.src = galleryImages[currentGalleryIndex].src;
    }

    function closeGalleryLightbox() {
        galleryLightbox.style.display = 'none';
    }

    function showPrevGalleryImage() {
        currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
        galleryLightboxImg.src = galleryImages[currentGalleryIndex].src;
    }

    function showNextGalleryImage() {
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
        galleryLightboxImg.src = galleryImages[currentGalleryIndex].src;
    }

    function openAssemblyLightbox(index) {
        currentAssemblyIndex = index;
        assemblyLightbox.style.display = 'block';
        assemblyLightboxImg.src = assemblySlides[currentAssemblyIndex].querySelector('img').src;
    }

    function closeAssemblyLightbox() {
        assemblyLightbox.style.display = 'none';
    }

    function showPrevAssemblySlide() {
        currentAssemblyIndex = (currentAssemblyIndex - 1 + assemblySlides.length) % assemblySlides.length;
        assemblyLightboxImg.src = assemblySlides[currentAssemblyIndex].querySelector('img').src;
    }

    function showNextAssemblySlide() {
        currentAssemblyIndex = (currentAssemblyIndex + 1) % assemblySlides.length;
        assemblyLightboxImg.src = assemblySlides[currentAssemblyIndex].querySelector('img').src;
    }
});




