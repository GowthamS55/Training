async function sampleData() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    console.log(data);
    
    let divdata = document.createElement('div'); 
    divdata.className = 'container text-center';

    let row = document.createElement('div');
    row.className = 'row row-cols-1 row-cols-md-4';

    data.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col mb-4';

        const card = document.createElement('div');
        card.className = 'card'; 
        card.style.width = '100%';

        card.innerHTML = `  
            <img src="${item.image}" class="card-img-top" alt="${item.title}" style="border-radius: 0.5rem; height: 200px; object-fit: contain;">
            <div class="card-body" style="background-color: #f8f9fa;">
                <h5 class="card-title" style="color: #007bff;">${item.title}</h5>
                <p class="card-text">${item.description}...</p>
                <p><strong>Price:</strong> $${item.price}</p>
                <p><strong>Rating:</strong> ⭐ ${item.rating.rate} (${item.rating.count} reviews)</p>
                <a href="detail.html" class="btn btn-primary" onclick="storeProduct(${item.id})">Buy Now</a>
            </div>
        `;

        col.appendChild(card);
        row.appendChild(col);
    });

    divdata.appendChild(row);
    document.body.appendChild(divdata); 

}

sampleData();

function storeProduct(productId) {
    sessionStorage.setItem("selectedProduct", productId);
}

