// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (3 images)
const slides = [
{ src: 'images/image01.jpg', 
 alt: 'car01',
 caption: 'Because mine eyes can never have their fill'
},
{ src: 'images/image02.jpg', 
 alt: 'car02',
 caption:'Of looking at my lady\'s lovely face,'
},
{ src: 'images/image03.jpg', 
 alt: 'car03',
 caption: 'I will so fix my gaze'
},
{ src: 'images/image04.jpg',
  alt:'car04', 
 caption:'So I may become blessed beholding her',
},
{ src:'images/image05.jpg', 
  alt:'car05', 
  caption:'Even as an angel, up at this great height'
},
{ src:'images/image06.jpg', 
 alt:'car06', 
 caption:'Standing amid the light,'
},
{src:'images/image07.jpg',
 alt:'car07', 
 caption:'Becometh blessed by only seeing God:--'},
{src:'images/image08.jpg',
 alt:'car08',
 caption:'So though I may be a simple earthly wight,'
},
{src:'images/image09.jpg',
 alt:'car09',
 caption:'Yet none the less I might,'
},
{src: 'images/image10.jpg',
 alt:'car10',
 caption: 'Beholding her is my heart\'s dear load,'
},
{src:'images/image11.jpg', 
 alt:'car11', 
 caption:'Be blessed, and in the spirit soar abroad.'
},
{src:'images/image12.jpg', 
 alt:'car12',
 caption:'Such power abideth in that gracious one;'
},
{src:'images/image13.jpg', 
 alt:'car13', 
 caption:'Albeit felt of none'
},
{src:'images/image14.jpg',
 alt:'car14',
 caption:'Save of him who, desiring, honours her.<br> -Dante Alighieri'
},
];
let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src;
mainImage.alt = slide.alt;
caption.textContent = slide.caption; // updates caption text
	
caption.innerHTML = slide.caption.replace(/\n/g, "<br>");
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);