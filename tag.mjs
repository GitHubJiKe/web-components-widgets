class TagWidget extends HTMLElement {
    constructor() {
        super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
            <style>
                .tag-widget{
                    padding:4px 8px;
                    color:#fff;
                    display:inline-block;
                    border-radius:4px;
                    font-weight:600;
                    font-size:1rem;
                    margin:0 4px;
                    min-width:100px;
                    text-align:center;
                }

                .tag-green{
                    background-color:#00b973;
                }

                .tag-red{
                    background-color:#ff4a47;
                }

                .tag-yellow{
                    background-color:#ffd100;
                    color:#000;
                }
                .tag-blue{
                    background-color:#3888ff;
                }
                .tag-gray{
                    background-color:#e9ebef;
                    color:#000;
                }
            </style>

            <div class="tag-widget"><slot></slot></div>
        `
    }

    connectedCallback() {
        const color = this.getAttribute('color')
        const tagEle = this.shadowRoot.querySelector('.tag-widget')

        tagEle.classList.add(`tag-${color}`)
    }
}

customElements.define('tag-widget', TagWidget);