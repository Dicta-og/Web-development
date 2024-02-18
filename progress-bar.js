class Progressbar extends HTMLElement{

    static css =`    :host{
        display = block;
        width = 210px;
        height = 100px;
        background-color = red solid;   ` 

    }
    constructor(){
        super();

        this.attachShadow({mode: open});
        const style = document.createElement('style');
        const fill = document.createElement('div');
        style.innerHTML = ProgressBar.css
        fill.classList.add('fill');
        this.shadowRoot.append(style, fill);

    }


customElements.define('Progress-bar', 'progressbar');