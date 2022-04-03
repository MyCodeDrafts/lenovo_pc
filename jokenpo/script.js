function enviar(){
   /*  
    const pedra = document.getElementById('pedra');
    const papel = document.getElementById('papel');
    const tesoura= document.getElementById('tesoura'); */

    
    
    
    
    
    
    
}

const btn = document.querySelector('.btn');

btn.onclick = () => {

    
    const res = document.querySelector('.res');
    const jogador = document.querySelector('.escolha').value;
    
    
    const pc = ['Papel',  'Pedra', 'Tesoura'];
    const jogadaPc = Math.round(Math.random() * pc.length);

    
    
   //res.innerHTML += `Você jogou ${jogador()}<br>`;

    console.log(`O Computador jogou ${pc[jogadaPc]}<br>`);
    
    if (jogador === 'pedra' || jogador === 'Pedra' || jogadaPc === 1) {

       res.innerHTML += '<br>Você jogou pedra <br>';
       res.innerHTML += `<br>Computador jogou ${pc[jogadaPc]}<br>`;
       res.innerHTML += `<br>Computador Ganhou!<br>`;
       
    
    } else if (jogador === 'papel' || jogador === 'Papel' || jogadaPc === 1) {

        res.innerHTML += '<br>Você jogou papel <br>';
        res.innerHTML += `<br>Computador jogou ${pc[jogadaPc]}<br>`;
        res.innerHTML += `<br>Parabéns você Ganhou!<br>`;
    } 
    
}