function clicou(){
    //return alert("Obrigado por clicar no botão");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));b
}


function redirecionar(){
    //window.open("https://sitevisao.herokuapp.com/");
    window.location.href ="https://sitevisao.herokuapp.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
}

function voltar(elemento){
    //document. getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function gets(elemento){

    let line = elemento.split(" ");
    let A = parseInt(line[0]);
    let B = parseInt(line[1]);
    let total = A + B; // Altere o valor da variável com o cálculo esperado
    alert("X = " + total);
    console.log("X = " + total);
 
}


function load(){
   //alert("Página carregada");


}

function funcaoChange(elemento){
  console.log(elemento.value)
}




/*function soma(n1, n2){
    return n1 + n2;
};

console.log(soma(12,2));

function validaidade(idade){
    var validar = true;

    if (idade >=18){
        validar =true;
    }else {
        validar = false;
    }
    return(validar);
}

var idade = prompt("Qual a sua idade");
console.log(validaidade(idade));
*/