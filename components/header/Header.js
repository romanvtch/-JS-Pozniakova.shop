class Header {
  handleOpenMenu() {
    const button = document.querySelector("#buton");
    button.classList.toggle("change");

    const headerBg = document.querySelector('.header-container__bg');
    headerBg.classList.toggle('active');
    
    const headerSearch = document.querySelector('.header-search');
    headerSearch.classList.toggle('active');
  }

  render() {
    const html = `
        <div class="header-container">
        <div class="header-container__box">
        
        <a href="https://pozniakova.shop/">
        <div class="header-logo">
        
        <img class="header-element__img" src="/img/logo.png"/>
        <p>Pozniakova</p>
        
        </div>
        </a>

        <nav class="header-navbar">
        <ul class="navbar-element__ul">
            <li><a href="https://pozniakova.shop/prynik.html">Пряники</a></li>
            <li><a href="https://pozniakova.shop/papir.html">Харчовий папір</a></li>
        </ul>
        </nav>

        <div class="header-search">
        <i class='bx bx-search-alt-2' ></i>
        <input type="text" placeholder="Пошук.." id="searchInput"/>
        </div>

        <div class="header-icon">
        <a href="https://www.instagram.com/pozniakova_tanya/"><i class='bx bxl-instagram'></i></a>
        <a href="tel:+380939124026"><i class='bx bx-phone-call' ></i></a>
        
        </div>
        
        <div class="header-container__menu" id="buton" onclick="headerPage.handleOpenMenu()">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
         
        <div class="header-container__bg">
        <ul class="navbar-element__ul">
             <li><a href="https://pozniakova.shop/prynik.html">Пряники</a></li>
            <li><a href="https://pozniakova.shop/papir.html">Харчовий папір</a></li>
        </ul>
            
            <div class="header-search">
            <i class='bx bx-search-alt-2' ></i>
            <input type="text" placeholder="Пошук.." id="searchInput"/>
            </div>
        
         </div>
         
        </div>
        </div>
        `;
    ROOT_HEADER.innerHTML = html;
  }
}
const headerPage = new Header();

