class CardColor extends HTMLElement {
  constructor() {
    super()
    const html = `
      <div class="w-32 mt-4 h-40 bg-white rounded-lg shadow-sm overflow-hidden">
              <div class="h-2/3 bg-indigo-600"></div>

              <div class="h-1/3 flex flex-col justify-center items-center">
                <span class="text-gray-500 h-1/3">#a8a8a8</span>
              </div>
            </div>
    `
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
    ${html}
    `
  }

}

customElements.define('card-color', CardColor)
