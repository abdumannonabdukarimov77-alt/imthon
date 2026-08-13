import Card from "../Card/card"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Nav from "../nav/nav";

function App(){
let data = [
    {
        title :"Avatar",
        genre :"Fantasy",
        Views :"1 milliard",
        id : uuidv4()
    },
    {
        title :"Merlin",
        genre :"Fantasy",
        Views :"2 milliard",
        id : uuidv4()
    },
    {
        title :"Spiderman brand new day",
        genre :"Fantasy",
        Views :"1 milliard",
        id : uuidv4()
    },
    {
        title :"ip man 4",
        genre :"Fantasy",
        Views :"2 milliard",
        id : uuidv4()
    },
    {
        title :"Al hazar",
        genre :"Fantasy",
        Views :"1 milliard",
        id : uuidv4()
    },
    {
        title :"Harriy porter",
        genre :"Fantasy",
        Views :"10 milliard",
        id : uuidv4()
    },
]
    return(
    <div className="contanier">
        <Nav/>
        {
            data.map(({title, Views, genre, id})=>{
                return(
                    <div>
                        <Card key={id} title={title} Views={Views} genre={genre} />
                    </div>
                )
            })
        }
    </div>
)   
}
export default App