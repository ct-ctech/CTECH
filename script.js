{
    const wrapper = document.querySelector('.gallery-celebrations-carousel-wrapper');
    const slides = document.querySelectorAll('.gallery-celebrations-carousel-slide');

    let currentIndex = 0;

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }

    function updateCarousel() {
      const translateValue = -currentIndex * (100 / slides.length) + '%';
      wrapper.style.transform = 'translateX(' + translateValue + ')';
    }

    // Automatically advance to the next slide every 2 seconds (adjust as needed)
    setInterval(nextSlide, 3000);
}



{
    const wrapper = document.querySelector('.gallery-ctech23-carousel-wrapper');
    const slides = document.querySelectorAll('.gallery-ctech23-carousel-slide');

    let currentIndex = 0;

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }

    function updateCarousel() {
      const translateValue = -currentIndex * (100 / slides.length) + '%';
      wrapper.style.transform = 'translateX(' + translateValue + ')';
    }

    // Automatically advance to the next slide every 3 seconds
    setInterval(nextSlide, 2000);
}
    
    
    

/**Scroll animation */
const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));



