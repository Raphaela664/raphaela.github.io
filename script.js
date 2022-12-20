function pickColor() {
              
    // Array containing colors
    var colors = [
        '#ff0000', '#00ff00', '#0000ff',
        '#ff3333', '#ffff00', '#ff6600'
    ];
      
    // selecting random color
    for(let i=0; i<4; i++){
    
        var random_color = colors[Math.floor(
            Math.random() * colors.length)];
      
    var x = document.getElementById('Intro');
    x.style.color = random_color;
    }
    
    
} 



const header = document.getElementById('summary');


window.addEventListener('scroll', () => {
 
  if (window.scrollY > 0) {
    
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
});



