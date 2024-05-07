

class TooltipsWidget extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                .tooltips-widget{
                    border-bottom:2px solid orange;
                    font-size:1rem;
                    font-weight:500;
                }
                .show{
                    display:block;
                }
                .hide{
                    display:none;
                }
            </style>
            
            <label class="tooltips-widget" id="tooltipsWidget">
                <slot></slot>
            </label>
            `;
    }


    connectedCallback() {
        const labelEle = this.shadowRoot.querySelector('#tooltipsWidget')
        if (window.tippy) {
            let show = false;
            const content = this.getAttribute('content')
            const placement = this.getAttribute('placement') || 'top'
            const instance = window.tippy(labelEle, {
                content,
                placement,
                onShow: () => {
                    show = true;
                },
                onHide: () => {
                    show = false;
                }
            });

            labelEle.addEventListener('click', () => {
                if (show) {
                    instance.hide()
                } else {
                    instance.show()
                }
            })
        }
    }

}


customElements.define('tooltips-widget', TooltipsWidget);