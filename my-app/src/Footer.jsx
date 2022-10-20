import React from "react"
let date = new Date();
let year = date.getFullYear();

function Footer() {
return <div className="footer">
<p>copyright {year}</p>
</div>
}

export default Footer