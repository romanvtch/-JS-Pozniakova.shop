function renderPage() {
  headerPage.render();
  productsPage.render();
  footerPage.render();
}

let CATALOG = [];

fetch("data.php")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    renderPage();
  })
  .catch((error) => {
    console.log(error);
  });
  
  
  



 

