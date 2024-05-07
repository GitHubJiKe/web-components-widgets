class TipsWidget extends HTMLElement {
    constructor() {
        super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
            <style>
                .tips-widget{
                    border-radius:8px;
                    padding:1.2rem;
                    color:#000;
                    margin:4px 0;
                    font-size:1.2rem;
                }
                .tips-info::before{
                    content:"🔖";
                    margin-right:1rem; 
                }
                .tips-info{
                    background-color:#f0f6ff;
                }
                .tips-warning::before{
                    content:"🚨";
                    margin-right:1rem; 
                }
                .tips-warning{
                    background-color:#f0f8dd;
                }
                .tips-notice::before{
                    content:"📢";
                    margin-right:1rem; 
                }
                .tips-notice{
                    background-color:#fff2f0;
                }
                .tips::before{
                    content:"⚠️";
                    margin-right:1rem;
                }
                .tips{
                    background-color:#ecf9f3;
                }
            </style>

            <div class="tips-widget"><slot></slot></div>
        `
    }

    connectedCallback() {
        const type = this.getAttribute('type') || ''
        const tagEle = this.shadowRoot.querySelector('.tips-widget')
        tagEle.classList.add(type ? `tips-${type}` : 'tips')
    }
}

customElements.define('tips-widget', TipsWidget);