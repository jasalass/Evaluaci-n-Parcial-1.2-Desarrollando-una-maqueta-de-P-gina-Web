//Obtener y mostrar juegos destacados

async function  obtenerJuegos(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '969b29bd8fmsh11d54b0c9451712p16fc47jsn459bc844da4c',
            'X-RapidAPI-Host': 'epic-store-games.p.rapidapi.com'
        }
        };
        
    const searchWords = 'Mount';
    const locale = 'cl';
    const country = 'cl';
    
    const url = `https://epic-store-games.p.rapidapi.com/onSale?searchWords=${searchWords}&locale=${locale}&country=${country}`;
      
    let response = await fetch(url, options)
    const data = await response.json()
    return data
}

function crearCard(juegos){
    let lista = []
    for (let index = 0; index < 6; index++) {
        let precio =  juegos[index].currentPrice
        let titulo =  juegos[index].title
        let imagen =  juegos[index].keyImages[0].url
        let publisher =  juegos[index].publisherName
        let url = juegos[index].url
        
        let card = `  <div class="col">
                        <div class="card h-100">
                            <img src="${imagen}" class="card-img-top w-100" alt="${titulo}">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${titulo}</h5>
                                <p>Publisher: ${publisher}</p>
                                <p>Precio: $${precio}</p>
                                <a href=${url} class="btn btn-dark mt-auto" target="blank">Ir a Epic Store</a>
                            </div>
                        </div>
                    </div>`
        lista.push(card)
        
    }

    return lista
}

let juegos;

(async () =>{
     juegos = await obtenerJuegos()
     let arreglo = crearCard(await juegos)
     $(document).ready(function(){
        arreglo.forEach(element => {
            console.log(element)
            $("#juegos-destacados").append(element)
         });
       
    })
})();









