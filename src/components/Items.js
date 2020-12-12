import React , {useState} from 'react'
import './items.css'

function Items() {
    
    const [section, setSection] = useState(()=>{'vegitable'})

    function opensection(event){
        setSection(()=> event.target.value)
    }
    return(
        <div id="itemSection">
            <div id="categories">
                <button class="tab" value="Vegitable" onClick={opensection}> Vegitable</button>
                <button class="tab" value="Mobile" onClick={opensection}> Mobile</button>
                <button class="tab" value="Clothes" onClick={opensection}> Clothes</button>
                <button class="tab" value="Sports" onClick={opensection}> Sports</button>
                <button class="tab" value="Books" onClick={opensection}> Books</button>
                <button class="tab" value="Electronics" onClick={opensection}> Electronics</button>
            </div>
            <div>
                This is {section} Section
            </div>
        </div>
    )
}

export default Items;