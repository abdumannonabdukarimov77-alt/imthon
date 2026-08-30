import Code from "../code/code.jsx";
import Payment from "../payment/payment.jsx";
import Nav from "../nav/nav.jsx";
import Detal from "../detal/detal.jsx";
import Seat from "../seat/seat.jsx";
import Carta from "../Card/carta.jsx";
import Tciked from "../tciked/tciked.jsx";
import Logaut from "../logaut/logaut.jsx";
import Login from "../login/login.jsx";
import Register from "../register/register.jsx";
import Card from "../Card/card.jsx";
import Send from "../Ticket/Ticket.jsx";
import { v4 as uuidv4 } from "uuid";    
import { useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Filter from "../filter/filter.jsx";

let data = [
        {
            title:"Movie Title",
            img: "/imgs/Movie.png",
            id : uuidv4()
        },
        
        {
            title:"Movie Title",
            img: "/imgs/image 2.png",
            id : uuidv4()
        },

        {
            title:"Movie Title",
            img: "/imgs/image 3.png",
            id : uuidv4()
        },

        {
            title:"Movie Title",
            img: "/imgs/image 4.png",
            id : uuidv4()
        },

        {
            title:"Movie Title",
            img: "/imgs/image 5.png",
            id : uuidv4()
        },

        {
            title:"Movie Title",
            img: "/imgs/image 6.png",
            id : uuidv4()
        }

    ]

    function CartaPage() {
    let { id } = useParams();

    let movie = data.find(item => item.id === id);

    if (!movie) {
        return <h2>Movie topilmadi</h2>;
    }

    return (
        <div className="container_">
            <Nav />
            <Filter img={movie.img} title={movie.title} />
        </div>
    );
}

function App(){
            return(
                <Routes>
                <Route path="/" element={
                <div className="container_">
                    <div>
                        <Nav/>
                        <div className="mt-4">
                            <h1 className="text-white text-center">Now Showing</h1>
                            <div className="text-center main">
                                {
                                    data.map(({title, img, id})=>{
                                        return(
                                            <Link to={`/carta/${id}`} key={id}>
                                                <Card title={title} img={img} />
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div> 
        </div>
        }/>
                <Route path="/registr" element={
                    <Register/>
                }/>
                <Route path="/login" element={
                    <Login/>
                }/>
                <Route path="/logaut" element={
                    <div className="container_">
                    <div>
                        <Logaut/>
                        <div className="mt-4">
                            <h1 className="text-white text-center">Now Showing</h1>
                            <div className="text-center main">
                                {
                                    data.map(({title, img, id})=>{
                                        return(
                                            <Link to={`/carta/${id}`} key={id}>
                                                <Card title={title} img={img} />
                                            </Link> 
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div> 
        </div>
                }/>
                <Route path="/tciked" element={
                    <div className="container_">
                        <Logaut/>
                        <Tciked/>
                    </div>
                } />
                <Route path="/carta/:id" element={
                    <CartaPage />
                } />
                <Route path="/seat" element={
                    <Seat/>
                } />
                <Route path="/detal" element={
                    <Detal/>
                } />
                <Route path="/code" element={
                    <Code/>
                } />
                <Route path="/post" element={
                    <Payment/>
                } />
                <Route path="/tisket" element={
                    <Send/>
                } />
            </Routes>
            )
}
    export default App;