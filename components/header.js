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
            <li><button>Entrar</button></li>
          </ul>
        </nav>
      </header>
    `
    const path = window.location.pathname;
    const page = path.split("/").pop().split(".").shift();
    console.log(page)
    try {
      const selectedItem = document.querySelector("#" + page)
      if (selectedItem) {
        selectedItem.classList.add("bold")
      }
    } catch (e) {
      this.querySelectorAll(".variable").forEach((e) => {
        e.classList.add("text-brown")
      })
      document.getElementById("home").classList.add("bold")
      console.log(e)
    }
  }
}

customElements.define('header-component', Header)
