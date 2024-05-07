
class SummaryWidget extends HTMLElement {
    constructor() {
        super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <style>
            .summary-title{
                font-size:1.2rem;
                font-weight:600;
                cursor:pointer;
            }


            .summary-container{
                border-radius:0.5rem;
                margin:0.5rem 0;
                padding:1rem;
                border:1px solid rgba(0,0,0,0.3);
                background-color:#fafafa;
            }
        </style>
        <details class="summary-container" open>
            <summary class="summary-title" id="title"></summary>
            <p><slot></slot></p>
        </details>
        `
    }

    connectedCallback() {
        const titleEle = this.shadowRoot.querySelector('#title')
        const title = this.getAttribute('title')
        titleEle.innerHTML = title;
    }
}

customElements.define('summary-widget', SummaryWidget);