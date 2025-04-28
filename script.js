// script.js
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("feature-video");
  const playIcon = document.getElementById("play-icon");

  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playIcon.style.display = "none";
    } else {
      video.pause();
      playIcon.style.display = "block";
    }
  });

  playIcon.addEventListener("click", () => {
    video.play();
    playIcon.style.display = "none";
  });
});

    // Testimonial Carousel
    const testimonials = document.querySelectorAll(".testimonial-slider > div");
    const dots = document.querySelectorAll(".dot");
    let current = 0;
  
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(-${index * 100}%)`;
        dots[i].classList.toggle("active", i === index);
      });
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        current = index;
        showTestimonial(current);
      });
    });
  
    setInterval(() => {
      current = (current + 1) % testimonials.length;
      showTestimonial(current);
    }, 5000);
  
    // Modal for Contact Form
    const form = document.getElementById("contact-form");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("close-modal");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });

