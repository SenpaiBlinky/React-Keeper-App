import React, {useState} from "react"

function Header() {

    // messing with reast state
    let [count, setCount] = useState(0)

function increase() {
    setCount(count += 1)
} // end of messing

return <header>
<h1>Keeper</h1>

{/* messing with react state */}
<p>{count}</p> 
<button onClick={increase}>+</button>
</header>

}

export default Header