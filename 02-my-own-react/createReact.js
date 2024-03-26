function customRender(reactElement, mainContainer) {

    /* **
    // **     IMPORTANT: Approach - 1
    // ** NOTE: Creating the custom Element
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    // **  NOTE: Setting up the attributes
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    // **  NOTE: Injecting the DOM element into the container
    mainContainer.appendChild(domElement)

    ** 
    ** 
    */

    // IMPORTANT: Approach - 2
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click Me"
}

const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)