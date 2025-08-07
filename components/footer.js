class Footer extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `

      <footer>
        <div>
          <h3>Café Aurora</h3>
          <p>Um sabor inesquecível</p>
          <div>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
        <div>
          <div class="footer-grid">
            <div class="footer-item">
              <h3>Sobre nós</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum  efficitur facilisis convallis.</p>
              <div>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
            <div class="footer-item footer-links">
              <h3>Links úteis</h3>
              <ul>
                <li><a href="/cafe-aurora/pages/contacts.html">Entre em contato</a></li>
                <li><a>Instagram</a></li>
                <li><a>Facebook</a></li>
                <li><a>YouTube</a></li>
              </ul>
            </div>
            <div class="footer-item">
              <h3>Aberto</h3>
              <p>
                Minas Gerais, Rua Gajos Específicos, 178, Brasil
                <br/>
                <br/>Segunda à Sexta: 8h > 18h
                <br/>Finais de semana: 8h > 12h</p>
            </div>
          </div>
        </div>
      </footer>
    `;

    if (window.matchMedia("(max-width: 768px)").matches) {
      this.querySelector('#logo').addEventListener('click', () => {
        this.querySelectorAll('.hidden-option').forEach((e) => {
          e.classList.toggle("hidden")
        })
        this.querySelector('#header-nav-list').classList.toggle("closed")
      });
    }
  }
}

customElements.define('footer-component', Footer)
