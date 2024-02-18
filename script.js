const template = document.createElement('template');
template.innerHTML = `
<style>
:host(circle-page){
    background-color: red;
    border:1px solid;
}

</style>

<div>
<slot  name = 'med'></slot>
<slot name = 'ditation'> </slot>
<slot name = 'pick'> </slot>
<slot name = 'set'> </slot>
<slot name = 'daily'> </slot>
<slot name = 'edit'> </slot>
<slot name = 'mail'> </slot>

    
</div>`



class circlepage extends HTMLElement{
    constructor(){
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        let clone = template.content.cloneNode(true);
        shadowRoot.appendChild(clone);
    }
}





customElements.define('circle-page', circlepage);

