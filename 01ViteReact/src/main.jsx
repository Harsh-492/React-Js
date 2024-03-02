import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function Myfun(){
    return (
        <div>
            <h1>This is function inside main.jsx</h1>
        </div>
    )
}

// const ReactElement = {
//     type : 'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click Me To Visit Google'

// }
const anotherUser = "This Is admin"
const  ReactElement = React.createElement( // this is react method
    'a', // first is tag
    {href:'https://google.com',target:'_blank'}, // second is attributes if tag does't have attributes then empty
    'Click Me For Visit Google Website' ,// third is text
    // anotherUser // add expression evalution -- behide the scene bibal inject karta hai
)
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
    // <Myfun/>
    // anotherElement // this written because in this html element present not object
    // ReactElement // this is not possible because ya react conve  rt html to object but you can not directly provide object
    ReactElement
    // <App/>

 
)
