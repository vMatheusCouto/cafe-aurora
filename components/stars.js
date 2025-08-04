class Stars extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="star-group">
      <i data-lucide="star" class="star"></i>
      <i data-lucide="star" class="star"></i>
      <i data-lucide="star" class="star"></i>
      <i data-lucide="star" class="star"></i>
      <i data-lucide="star" class="star"></i>
    </div>
    `
    lucide.createIcons({ icons: lucide.icons, node: this });
  }

}

customElements.define('stars-component', Stars)
