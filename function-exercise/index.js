document.addEventListener('DOMContentLoaded', () => {

    const face = document.querySelector('.face')
    let count = 0
    function moveBob() {
        count += 50
        
        face.style.left = count + 'px'
          
    }
        face.addEventListener('click', moveBob)
   })