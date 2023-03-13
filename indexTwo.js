function renderPage() {
  headerPage.render();
  productsPageTwo.render();
  footerPage.render();
}

let CATALOG = [];

fetch("dataTwo.php")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    renderPage();
  })
  .catch((error) => {
    console.log(error);
  });
  
  
  



 

