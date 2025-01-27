const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Move to the next slide
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

// Move to the previous slide
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
window.addEventListener("load", () => {
  // Hide the preloader after 2 seconds
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    preloader.style.display = "none"; // Remove the preloader
    mainContent.style.display = "block"; // Show the main content
  }, 2000); // Adjust delay as needed
});
document.addEventListener("DOMContentLoaded", function () {
  const logoPopup = document.getElementById("logo-popup");
  const mainContent = document.getElementById("main-content");
  const logoVideo = document.getElementById("logo-video");

  // Listen for the video to end
  logoVideo.onended = function () {
    logoPopup.style.display = "none"; // Hide the popup
    mainContent.style.display = "block"; // Show the main content
  };
});
document.querySelector('a[href="#about-us"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#about-us').scrollIntoView({ behavior: 'smooth' });
});
function showInfo(cardType) {
  // Hide all info paragraphs
  document.querySelectorAll('.detail-info').forEach(function(info) {
      info.style.display = 'none';
  });

  // Show the clicked card's information
  document.getElementById(cardType + '-info').style.display = 'block';
}

// Hide all details initially
window.onload = function() {
  document.querySelectorAll('.detail-info').forEach(function(info) {
      info.style.display = 'none';
  });
};
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  const container = document.querySelector('.carousel-container');

  currentSlide = (index + totalSlides) % totalSlides;
  container.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  if (currentSlide === document.querySelectorAll('.carousel-slide').length - 1) {
    showSlide(0); // Go back to the first slide
  } else {
    showSlide(currentSlide + 1);
  }
}

// Auto-slide every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000);
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
      item.classList.toggle('active');
  });
});
// Check if user has already visited the case study page
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("logo-popup");
  const closePopup = document.getElementById("close-popup");

  // Check if the popup has already been shown
  const hasVisited = localStorage.getItem("hasVisited");

  if (!hasVisited) {
    // Show the popup if it's the user's first visit
    popup.style.display = "block";

    // Set localStorage to indicate the popup has been shown
    localStorage.setItem("hasVisited", "true");
  }

  // Close the popup when the button is clicked
  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
  });
});
    // Handle newsletter form submission
    document.getElementById('newsletterForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const email = this.querySelector('input').value;

      if (email) {
          alert(`Thank you for subscribing with ${email}!`);
          this.reset(); // Clear the form
      } else {
          alert('Please enter a valid email address.');
      }
  });
    // Animate metrics when the section is in view
    document.addEventListener("DOMContentLoaded", () => {
        const metrics = document.querySelectorAll(".metric-number");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const metric = entry.target;
                    const targetNumber = parseInt(metric.getAttribute("data-target"));
                    animateNumber(metric, targetNumber);
                    observer.unobserve(metric); // Stop observing after animating
                }
            });
        }, options);

        metrics.forEach(metric => {
            const targetNumber = {
                "clientsServed": 200,
                "projectsCompleted": 50,
                "awardsWon": 15
            };
            metric.setAttribute("data-target", targetNumber[metric.id]);
            observer.observe(metric);
        });

        // Animate numbers incrementally
        function animateNumber(element, target) {
            let count = 0;
            const duration = 2000; // Animation duration in ms
            const interval = duration / target;

            const incrementCounter = setInterval(() => {
                count++;
                element.textContent = count;
                if (count >= target) {
                    clearInterval(incrementCounter);
                }
            }, interval);
        }
    });


    document.addEventListener("DOMContentLoaded", function () {
      const popup = document.getElementById("videoPopup");
  
      // Check if the user has visited before
      const hasVisited = sessionStorage.getItem("hasVisited");
  
      // If not visited before, show the popup
      if (!hasVisited) {
          popup.style.display = "block";
          sessionStorage.setItem("hasVisited", "true"); // Mark as visited
      }
  });
  
  // Close the popup
  function closePopup() {
      document.getElementById("videoPopup").style.display = "none";
  }
  function toggleChatWindow() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
}

// Handle user input and chat responses
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');
    const userMessage = chatInput.value.trim();

    if (userMessage) {
        // Add user message to chat
        const userMessageElement = document.createElement('div');
        userMessageElement.className = 'chat-message user';
        userMessageElement.textContent = userMessage;
        chatBody.appendChild(userMessageElement);

        // Simulate bot response
        setTimeout(() => {
            const botMessageElement = document.createElement('div');
            botMessageElement.className = 'chat-message bot';
            botMessageElement.textContent = getBotResponse(userMessage);
            chatBody.appendChild(botMessageElement);
            chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
        }, 500);

        chatInput.value = ''; // Clear the input
    }
}

// Handle enter key press for chat input
function handleChatInput(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Basic bot response logic
function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return 'Hello! How can I assist you today?';
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
        return 'Our pricing plans are tailored to your needs. Contact us for more details.';
    } else if (lowerMessage.includes('support')) {
        return 'You can reach out to our support team at support@hrstreamline.com.';
    } else {
        return 'Sorry, I didn’t understand that. Can you please rephrase?';
    }
}  
