import React, {useState} from "react"

function Header() {

    // messing with reast state
    let [count, setCount] = useState(0)

// function decrease() {
//     setCount(count -= 1)
// }

// function increase() {
//     setCount(count += 1)
// } // end of messing



//  --------------------------------------TIME DISPLAY---------------------------------------------

// let [time, updateTime] = useState()

// let [time2, updateTime2] = useState()

// function getTime() {
//     updateTime(new Date().toLocaleTimeString())
// }

// function currentTime() {
//     updateTime2(new Date().toLocaleTimeString())
// }


// dynamic time display
// setInterval(currentTime, 1000)


return <header>
<h1>Keeper</h1>

{/* messing with react state */}
{/* <p>{count}</p> 
<button onClick={increase}>increase</button>
<button onClick={decrease}>decrease</button>

<p>{time}</p> 
<button onClick={getTime}>getTime</button>

<p>{time2}</p>  */}
</header>

}

export default Header