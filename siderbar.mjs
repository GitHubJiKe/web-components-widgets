
class SiderBarWidget extends HTMLElement {
    constructor() {
        super()

        const shadowRoot = this.attachShadow({ mode: 'open' })

        shadowRoot.innerHTML = `
        <style>
            ${SiderBarWidget.style}
        </style>
        <div class="siderbarWidget open">
            <span class="icon">→</span>
            <slot></slot>
        </div>
        `

        this.siderbarWidget = this.shadowRoot.querySelector('.siderbarWidget')

        console.log(this.siderbarWidget);
    }

    siderbarWidget

    connectedCallback() {
        const icon = this.shadowRoot.querySelector('.icon')
        icon.addEventListener('click', this.toggleSiderbar.bind(this))
    }

    toggleSiderbar() {
        if (this.siderbarWidget.classList.contains('hide')) {
            this.siderbarWidget.classList.replace('hide', 'open');
        } else {
            this.siderbarWidget.classList.replace('open', 'hide');
        }
    }

    static style = `
        .siderbarWidget{
            border-right:1px solid #eee;
            transition: width .3s linear;
        }

        .icon{
            font-size:2rem;
        }

        .open{  
            width:200px;
        }

        .hide{
            width:60px;
        }
    `
}

customElements.define('siderbar-widget', SiderBarWidget)