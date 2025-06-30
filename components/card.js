class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="card">
          <img src="https://i.postimg.cc/KjmCxgy4/product-preview.png" alt="">
          <div>
            <h3 class="text-title text-brown">Café Especial</h3>
            <p class="text-subtitle text-brown">Descrição do café</p>
            <div>
              <i data-lucide="star" class="star"></i>
              <i data-lucide="star" class="star"></i>
              <i data-lucide="star" class="star"></i>
              <i data-lucide="star" class="star"></i>
              <i data-lucide="star" class="star"></i>
            </div>
            <h3>R$ 30,99</h3>
          </div>
          <button class="button-1 bg-terracota">Adicionar ao carrinho</button>
        </div>
    `;
  }
}

customElements.define('card-component', Card)
