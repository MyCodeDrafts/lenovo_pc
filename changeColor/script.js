const btn = document.querySelector('.btn');

btn.onclick = () => {
    function randomColor() {
        const rdColor = Math.round(Math.random() * 255);
        return rdColor
    }

   document.body.style.backgroundColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`

   




}