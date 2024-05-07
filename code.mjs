
import { codeToHtml } from 'https://esm.sh/shiki@1.0.0'

class CodeWidget extends HTMLElement {
    constructor() {
        super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.innerHTML = `
        <style>
            pre{
                border-radius: 0.4rem;
            padding: 1rem;
            overflow: auto;
            font-size:1rem;
            }
            #codeWidget{
                position:relative;
            }
            #codeWidget::before{
                content:attr(data-lang);
                color:#fff;
                position:absolute;
                top:0.5rem;
                right:0.5rem;
            }
        </style>
        <div id="codeWidget"><slot></slot></div>
        `
    }

    async connectedCallback() {
        const lang = this.getAttribute('lang') || 'js'
        const theme = this.getAttribute('theme') || 'synthwave-84'
        const codeProp = this.getAttribute('code')
        const codeEle = this.shadowRoot.querySelector('#codeWidget')
        codeEle.setAttribute('data-lang', lang);
        let codeContent = codeProp;
        const slotElement = codeEle.querySelector('slot');
        if (slotElement && slotElement.assignedNodes().length) {
            codeContent = slotElement.assignedNodes()[0].textContent;
        }
        codeEle.innerHTML = await codeToHtml(codeContent, { lang, theme })
    }
}

customElements.define('code-widget', CodeWidget);