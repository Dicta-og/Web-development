const buttonList = document.createElement('buttonList');

buttonList.innerHTML = 
class buttonPage extends HTMLElement{
    constructor(){
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        // let clone = template.content.cloneNode(true);
        // // shadowRoot.append(clone);
        shadowRoot.innerHTML =
        `
        <style>

        div{
            background-color:red;
        }
// :host{
//     background-color: red;
//     border:1px solid;
// }

</style>
        <style>
        <slot 
         button{
            
            padding:5px;
            background-color:"red";
         }
         
        </style>
        
        <div>
         
            <button> <slot ></slot> 
            </button>
              
        </div>`
        


        const color = this.getAttribute('color');
        shadowRoot.querySelector('button').style.backgroundColor = color;
        
        console.log('color')


    }
}




customElements.define('button-page', buttonPage);



