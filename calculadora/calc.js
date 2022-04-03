var colorButton = document.getElementById('colorButton');
const h1 = document.querySelector('#header');

const rgbRand = () => {
    return Math.round(Math.random() * 255);
}



colorButton.onclick = function() {

    
    // `rgb(${rgbRand(255)}, ${rgbRand(255)}, ${rgbRand(255)})`;
    
    
    
    
    
    // header.className = 'red-text';
}

/* colorButton.onclick = () => {
    const volta = document.body.className = 'red-text'
    
} */

let one = document.getElementById('one');
let res = document.getElementById('res');
one.onclick = function() {
    console.log('Clicked');
    res.className = `${one}`

}
