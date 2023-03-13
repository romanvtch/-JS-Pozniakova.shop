class Footer{
    
    render(){
        const html = `
        <div class="footer-container">
            <div class="footer-container__box">
                <div class="footer-about">
                <h2>Про нас</h2>
                <p>
                Ми займаємся друком та розписом на пряниках,
                друком на вафельному та цукровому папері.Ми не
                обмежуємся тематикою і стилем наших робіт,ми
                постійно розвиваємось,щоб ти наш дорогий клієнт був
                повністю задоволений своїм замовленням
                </p>
                </div>
            </div>
            <div class="rule">
            © 2023 Усі права захищено.</div>
        </div>
        `
        ROOT_FOOTER.innerHTML = html;
    }
}
const footerPage = new Footer();