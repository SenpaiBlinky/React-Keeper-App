import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "./notes.js"


function App() {
    return <div>
        <Header/>
        <dl>{notes.map( newNote => 
     ( <Note
            key={newNote.key}
            title={newNote.title}
            content={newNote.content}
        />)
)}</dl>
        <Footer/>
    </div>
}

export default App