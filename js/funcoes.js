/*//Criar uma variável para manipular o XML
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
    for(i=x.length-1;i>=0;i--){
        document.write(
            "<tr>" +
                "<td>"+ x[i].getAttribute("codigo") +"</td>" +
                "<td><img src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"'width='150'></td>" +
                "<td><a href='postagem.html?codigo_postagem=" + i + "'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</a></td>" +
                "<td>"+ x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,150) +"...</td>" +
            "</tr>");
    }
}

function postagem(){
    //Armazena a URL completa, ex: http://localhost:81/blog/postagem.html?codigo_postagem=2
    url = new URL(window.location.href);
    //Armazena o parâmetro, ex: codigo_postagem=2
    parametro = url.searchParams;
    //Armazena a id, ex: 2
    i = parametro.get("codigo_postagem");

        document.write(
            "<tr>" +
                "<td>"+ x[i].getAttribute("codigo") +"</td>" +
                "<td><img src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"'width='150'></td>" +
                "<td>"+ x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</td>" +
                "<td>"+ x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</td>" +
            "</tr>");
    
}*/

/*
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
    for(i=x.length-1;i>=0;i--){
        document.write(
            "<div class='card' style='width:400px'>" +
                "<div>" + 
                    "<img class='card-img-top' src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"'width='150'>" + 
                "</div>" + 
                "<div class='card-body'>" +
                    "<h4 class='card-title'><a href='postagem.html?codigo_postagem=" + i + "'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</a></h4>" +
                    "<p class='card-text'>"+ x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,28) +"...</p>" +
                 "</div>" +
            "</div>");
    }
}

function postagem(){
    //Armazena a URL completa, ex: http://localhost:81/blog/postagem.html?codigo_postagem=2
    url = new URL(window.location.href);
    //Armazena o parâmetro, ex: codigo_postagem=2
    parametro = url.searchParams;
    //Armazena a id, ex: 2
    i = parametro.get("codigo_postagem");

        document.write(
            "<div>" +
                "<div><img src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"'width='150'></div>" +
                "<div>"+ x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</div>" +
                "<div>"+ x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</div>" +
            "</div>");
    
}*/


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
    for(i=x.length-1;i>=0;i--){
        document.write(
            "<div class='c card mt-5' style='width:400px'>" +
                    "<div>" + 
                        "<img class='card-img-top' src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"'width='150'>" + 
                    "</div>" + 
                "<div class='card-body'>" +
                    "<h4 class='card-title'>" + 
                        x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + 
                    "</h4>" +
                    "<p class='card-text'>" +
                        x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,100) + 
                    "...</p>" +
                    "<div class='btn'>" +
                        "<a href='postagem.html?codigo_postagem=" + i + "'>" + x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue +"</a>" +
                    "</div>" +
                "</div>" +
            "</div>");
    }
}

function postagem(){
    //Armazena a URL completa, ex: http://localhost:81/blog/postagem.html?codigo_postagem=2
    url = new URL(window.location.href);
    //Armazena o parâmetro, ex: codigo_postagem=2
    parametro = url.searchParams;
    //Armazena a id, ex: 2
    i = parametro.get("codigo_postagem");

        document.write(
            "<div>" +
                        "<div class='inika titulop'>"+ x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</div>" +
                "<div class='container imagemp'>" +
                    "<div class='card'>" +
                        "<div class=''><img class='card-img-top' style='width:100%' alt='Card image' src='imgs/"+ x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue +"'width='1000'></div>" +
                    "</div>" +
                "</div>" +
                "<div class='corpop'>" +
                        "<i> <p class=''>"+ x[i].getElementsByTagName("comentario")[0].childNodes[0].nodeValue + "</p> </i>" +
                        "<p class=''>"+ x[i].getElementsByTagName("p1")[0].childNodes[0].nodeValue + "</p>" +
                        "<p class=''>"+ x[i].getElementsByTagName("p2")[0].childNodes[0].nodeValue + "</p>" +
                        "<p class=''>"+ x[i].getElementsByTagName("p3")[0].childNodes[0].nodeValue + "</p>" +
                "</div>" +
            "</div>");
    
}