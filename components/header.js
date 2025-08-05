class Header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <ul>
            <li class="secondary">Café Aurora</li>
            <li>
              <ul id="nav-list">
                <li id="home" class="variable"><a href="/">Início</a></li>
                <li id="about" class="variable"><a href="/pages/about.html">Sobre nós</a></li>
                <li id="catalogue" class="variable"><a href="/pages/catalogue.html">Catálogo</a></li>
                <li id="tips" class="variable"><a href="/pages/tips.html">Dicas</a></li>
                <li id="events" class="variable"><a href="/pages/events.html">Eventos</a></li>
              </ul>
            </li>
            <li><button class="button-1 bg-brown" style="border-radius: 20rem;">Entrar</button></li>
          </ul>
        </nav>
      </header>
    `
  }
}

customElements.define('header-component', Header)
