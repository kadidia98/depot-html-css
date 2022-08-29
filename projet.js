let colors= ['white', 'brown', 'grey', 'red','blue'];
let button= document.getElementById('button');
button.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]

    let bloc1 = document.getElementById('bloc1');
    if(randomColor == 'white'){
        bloc1.style.color ='black';
    }
else{
bloc1.style.color = 'white';
}
        bloc1.style.background = randomColor;
    
    let bloc2=document.getElementById('bloc2');
    if(randomColor == 'white'){
        bloc2.style.color ='black';
    }
else{
bloc2.style.color = 'white';
}
    bloc2.style.background = randomColor;

    let bloc3=document.getElementById('bloc3');
    if(randomColor == 'white'){
        bloc3.style.color ='black';
    }
else{
bloc3.style.color = 'white';
}
    bloc3.style.background = randomColor;

    let bloc4=document.getElementById('bloc4');
    if(randomColor == 'white'){
        bloc4.style.color ='black';
    }
else{
bloc4.style.color = 'white';
}
    bloc4.style.background = randomColor;
})
function affiche(){
    var prenom=document.getElementById("prenom").value;
    var nom=document.getElementById("nom").value;
    var email=document.getElementById("email").value;
    var num=document.getElementById("num").value;
    var commentaire=document.getElementById("comment").value;
    var formu=document.getElementById("formulaire");
    formu.innerHTML=nom+" <br> \n"+prenom+" <br> \n"+email+" <br> \n"+num+" <br> \n"+commentaire;
    
    let tableau=[
        { Nom:nom, PRENOM:prenom,  Email:email, Num:num
    }
    ];
    console.table(tableau);
    if (prenom.length===0) {
        alert("veuiller renseigner votre prénom");
}
else if (nom.length===0) {
    alert("veuiller renseigner votre nom");
}
else if (email.length===0) {
    alert("veuiller renseigner votre mail");
}
else if (num.length===0) {
    alert("veuiller renseigner votre numéro");
}
else{
    alert("saisie valide ");
}
}