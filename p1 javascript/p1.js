function media(){
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    

    var media = (nota1 + nota2 + nota3)/3 ;

    if(media >= 5)
     if(media==10)
      alert("Uau! Aprovado ");
     else
      alert("Parabens, aprovado! Media "+media);
    else
     alert("Exame! Media "+media);

   }