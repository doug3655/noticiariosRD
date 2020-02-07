const API_KEY = "96beea9215544ce8a1ec47c281f401a9";
const corpo = document.getElementById("maxBox");
const btnCarregar = document.getElementById("carregar");
const topo = document.getElementById("topo");

let config = {
    method:"GET"
}

let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey='+ API_KEY,config)
.then((resposta)=>{
    return resposta.json();
})
.then((json)=>{
    btnCarregar.onclick =()=>{
        corpo.innerHTML="";
        mostrarNaTela(json.articles);
        window.scrollTo(0,0);
    };
});

function mostrarNaTela(listaNoticias){
    listaNoticias.forEach((noticias)=>{
        let noticia = `
        <div class="card col-lg-4" style="width: 18rem;">
                <img src="${noticias.urlToImage}" class="card-img-top" alt="imagem da noticia" title="imagem da noticia">
                <div class="card-body">
                <h5 class="card-title text-center">${noticias.title}</h5>
                <p id="texto"class="card-text text-wrap text-truncate">${noticias.description}</p>
                <a href="${noticias.url}" class="btn btn-primary">Ver noticia completa</a>
                </div>
        </div>`
        corpo.insertAdjacentHTML('beforeend',noticia);
    });
}

/*btnCarregar.onclick =()=>{
    let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey='+ API_KEY,config)
    .then((resposta)=>{
        return resposta.json();
    })
    .then((json)=>{
        mostrarNaTela(json.articles);
    });
};*/