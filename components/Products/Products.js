class Products {
  constructor() {
    this.productList = [];
    this.filteredProductList = [];
  }

  filterProducts(searchString) {
    if (!searchString) {
      this.filteredProductList = this.productList;
      this.updateCatalog();
      return;
    }

    const filtered = this.productList.filter(({ name }) =>
      name.toLowerCase().includes(searchString)
    );

    this.filteredProductList = filtered;
    this.updateCatalog();
  }

  updateCatalog() {
    let htmlCatalog = "";
    this.filteredProductList.forEach(({ id, name, img }) => {
      htmlCatalog += `
                <li class="products-element">
                    <img class="products-element__img" src="${img}"/>
                    <h2 class="products-element__title">${name}</h2>
                </li>
            `;
    });

    const html = `
        <div class="products-container">     
            <ul class="products-container__ul" id="productList">
                ${htmlCatalog}
            </ul>
        </div>
        `;

    ROOT_PRODUCTS.innerHTML = html;
  }

  render() {
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", () => {
      this.filterProducts(searchInput.value.toLowerCase());
    });

    fetch("data.php")
      .then((res) => res.json())
      .then((body) => {
        this.productList = body;
        this.filteredProductList = this.productList;
        this.updateCatalog();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

const productsPage = new Products();
