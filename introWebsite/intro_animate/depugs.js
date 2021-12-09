
$(document).ready(function () {

    

anime.timeline({loop: false})
.add({
  targets: '.ml8 .circle-white',
  scale: [0, 3],
  opacity: [1, 0],
  easing: "easeInOutExpo",
  rotateZ: 360,
  duration: 1100
}).add({
  targets: '.ml8 .circle-container',
  scale: [0, 1],
  duration: 1100,
  easing: "easeInOutExpo",
  offset: '-=1000'
}).add({
  targets: '.ml8 .circle-dark',
  scale: [0, 1],
  duration: 1100,
  easing: "easeOutExpo",
  offset: '-=600'
}).add({
  targets: '.ml8 .letters-left',
  scale: [0, 1],
  duration: 1200,
  offset: '-=550'
}).add({
  targets: '.ml8 .bang',
  scale: [0, 1],
  rotateZ: [45, 15],
  duration: 1200,
  offset: '-=1000'
}).add({
  targets: '.ml8',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1400
});

anime({
targets: '.ml8 .circle-dark-dashed',
rotateZ: 360,
duration: 8000,
easing: "linear",
loop: true
});

var eleheading  = document.createElement("h1"),
elespan = document.createElement('span'),
elespan1 = document.createElement('span'),
elespan2 = document.createElement('span'),
elespan3 = document.createElement('span'),
textnode = document.createTextNode("Book Store");  

   

    
eleheading.classList.add("ml1");
elespan.classList.add("text-wrapper");
elespan1.classList.add("line", "line1");
elespan2.classList.add("letters");
elespan3.classList.add("line", "line2");

elespan2.appendChild(textnode);
elespan.appendChild(elespan1);
elespan.appendChild(elespan2);
elespan.appendChild(elespan3);
eleheading.appendChild(elespan);

    
document.body.appendChild(eleheading);


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
 
anime.timeline({loop: false})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 500,
    delay: 5000
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000
  });

 

    
var link1 = document.createElement('a'),
textLink = document.createTextNode("UP"),
divcreate = document.createElement("div");
        
link1.classList.add("btn", "wow" );
    link1.setAttribute("href","../cardinfo.html");
link1.setAttribute("target","_self");

    
link1.appendChild(textLink);
divcreate.appendChild(link1);
document.body.appendChild(divcreate);
    
anime.timeline({loop: false}).add({ 
    targets: 'div .btn', 
    opacity: [0,1], 
    easing: "easeOutExpo",
    duration: 600, 
    delay: 9000, 
})
                
       
});
