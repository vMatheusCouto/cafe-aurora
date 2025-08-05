class Header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <header id="header-nav-list" class="backdrop-blur closed">
        <nav>
          <ul>
            <li id="logo" class="secondary">Café Aurora<span class="hidden-option hidden"><br/><div></div></span></li>
            <li class="hidden-option hidden">
              <ul id="nav-list">
                <li id="home" class="variable"><a href="/">Início</a></li>
                <li id="about" class="variable"><a href="/pages/about.html">Sobre nós</a></li>
                <li id="catalogue" class="variable"><a href="/pages/catalogue.html">Catálogo</a></li>
                <li id="tips" class="variable"><a href="/pages/tips.html">Dicas</a></li>
                <li id="events" class="variable"><a href="/pages/events.html">Eventos</a></li>
              </ul>
            </li>
            <li class="hidden-option hidden"><button class="button-1 bg-brown" style="border-radius: 20rem;">Entrar</button></li>
          </ul>
        </nav>
      </header>
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

customElements.define('header-component', Header)
