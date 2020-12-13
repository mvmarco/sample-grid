const productsContainer = document.querySelector('.products-list');

const apiUrl = 'https://www.unisport.dk/api/products/batch/?list=201338,201481,202483,188894,193858,188896,201176,189188,205946,201450,206348,201440,198079,197237,204692,195932,197362,197250,193638,185253,205962,208030,194885,185256,193539,195935,201174,204085,195606,205949,203906,201337,194925,193652,204086,176719,206385,201447,205896,198575';
fetch(apiUrl).then(response => response.json()).then((data)=> {
  console.log(data);
  let rows = []
  while (data.products.length){
    rows.push(data.products.splice(0,3))
  }

  rows.forEach(row=>{
    let rowDiv = document.createElement('div')
    rowDiv.className = 'row'
    row.forEach((product) => {
      let colDiv = document.createElement('div')
      colDiv.className = 'col-lg-4 col-md-6 col-xs-12'
      colDiv.innerHTML = `
        <div class="card" >
          <img src="${product.product_main_image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.attribute_english.brand} ${product.attribute_english.boot_collection || product.attribute_english.team !== 'N/A' && product.attribute_english.team+' shirt' || '' } </h5>
            <p class="card-text">Price: ${product.prices.recommended_retail_price},00 DKK</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      `;
      rowDiv.appendChild(colDiv)
    })
    productsContainer.appendChild(rowDiv)
  })
});


