//Criar uma variável para manipular o XML
xmlhttp = new XMLHttpRequest();
//Seleciona o arquivo XML
xmlhttp.open("GET","xml/conteudo.xml",false);
//Enviar o arquivo para leitura
xmlhttp.send();
//Informar que o arquivo enviado é um XML
xmlDoc = xmlhttp.responseXML;

//Armazena as postagens do XML em um array
x = xmlDoc.getElementsByTagName("postagem");

function teste(){
    i=1;
        document.write(
            "<tr>" +
                "<td>"+ x[i].getAttribute("codigo") +"</td>" +
                "<td><img src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"'width='150'></td>" +
                "<td>"+ x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</td>" +
                "<td>"+ x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue +"</td>" +
            "</tr>");
}