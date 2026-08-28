        import Card from "../Card/Card";
        import Filter from "../filter/filter";
        import Footer from "../footer/footer";
        import { v4 as uuidv4 } from 'uuid';
        import List from "../list/list";
        import { useState } from "react";

        function App(){

            let [data, setData] = useState([
                {
                    title : "Empire of Osman",
                    vives : "998",
                    kategory : "kopkurilgan",
                    id : uuidv4()
                },
                {
                    title : "Spider man brand new day",
                    vives : "998",
                    kategory : "mashhur",
                    id : uuidv4()  
                },
                {
                    title : "Harri porter",
                    vives : "998",
                    kategory : "mashhur",
                    id : uuidv4()  
                },
                {
                    title : "Alhazar",
                    vives : "998",
                    kategory : "kopkurilgan",
                    id : uuidv4()  
                },
                {
                    title : "Termenator",
                    vives : "998",
                    kategory : "mashhur",
                    id : uuidv4() 
                } 
            ])

            let [search, setSearch] = useState("")
            let [addsubmit, setAddsubmit] = useState(0)
            let [filter, setFilter] = useState("barchasi")

            function deleteItems(id){
                let filterData = data.filter((item) => item.id !== id); 
                setData(filterData);
            }

            function addMovie(newMovie){
                setData((prev)=>[...prev, newMovie])
            }

        const filteredData = data
    .   filter((item)=> item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    .   filter((item)=>{
        if(filter === "mashhur"){
            return item.kategory === "mashhur"
        }

        if(filter === "kopkurilgan"){
            return item.kategory === "kopkurilgan"
        }

        if(filter === "barchasi"){
            return true
        }

        return true
       })

            return(
                <div className="container">
                    <Card length={data.length} addsubmit={addsubmit}/>
                    <Filter search={search} setSearch={setSearch} setFilter={setFilter}/>
                    <List deleteItems={deleteItems} data={filteredData} setAddsubmit={setAddsubmit}/>
                    <Footer addMovie={addMovie}/>
                </div>
            )
        }

        export default App;