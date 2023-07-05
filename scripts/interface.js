//Verificar se o documento já foi carregado e executar a função
document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll(".square");

    //verificar se foi clicado
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})


function handleClick(event) {

    //Pegando a poisção que foi clicada
    let square = event.target;
    let position = square.id;

    //Se o handleMove for verdadeiro é pq o jogo acabou
    if(handleMove(position)) {

        //Para o último emoji aparecer antes do alert
        setTimeout(()=>{
            alert(" O Jogo acabou! - O vencedor foi " + playerTime)
        }, 10)
        
    }

    updateSquare(position);
}

function updateSquare (position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

//function updateSquares(){
//    let squares = document.querySelectorAll(".square");

//    squares.forEach((square) => {
//        let position = square.id;
//        let symbol = board[position];

//        if (symbol != '') {
//            square.innerHTML = `<div class='${symbol}'></div>`
//        }
//    })
// } 