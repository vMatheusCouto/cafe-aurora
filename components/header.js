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
                <li id="home" class="variable"><a>Início</a></li>
                <li id="about" class="variable"><a>Sobre nós</a></li>
                <li id="catalogue" class="variable"><a>Catálogo</a></li>
                <li id="tips" class="variable"><a>Dicas</a></li>
                <li id="events" class="variable"><a>Eventos</a></li>
              </ul>
            </li>
            <li class="hidden-option hidden"><button class="button-1 bg-brown" style="border-radius: 20rem;"><i data-lucide="circle-user"></i>Entrar</button></li>
          </ul>
        </nav>
      </header>
    `;




    lucide.createIcons();

    if (window.matchMedia("(max-width: 768px)").matches) {
      this.querySelector('#logo').addEventListener('click', () => {
        this.querySelectorAll('.hidden-option').forEach((e) => {
          e.classList.toggle("hidden")
        })
        this.querySelector('#header-nav-list').classList.toggle("closed")
      });
    }

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header-nav-list").style.backdropFilter = "blur(7px) brightness(0.8)";
        document.getElementById("header-nav-list").style.paddingBottom = "6rem";
      } else {
        document.getElementById("header-nav-list").style.backdropFilter = "blur(0px)";
      }
    }

    Object.entries(url).forEach(([item, s]) => {
      this.querySelector(`#${item} a`).setAttribute('href', s)
    })
  }
}

customElements.define('header-component', Header)
