import Button from '../buttons/buttons'
import '../filter/nav.css'
import { useState } from "react"

function Filter({search, setSearch,setFilter }){
    return(
        <div className='filter container p-4 mt-3'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Kino qidirish' className='w-100 form-control py-3'/>
            <div className='d-flex mt-3'>
                <Button title='Barcha kinolar' active='btn-dark text-white' onClick={()=>setFilter("barchasi")} />
                <Button title='Mashxur kinolar' active='btn-outline-dark' onClick={()=>setFilter("mashhur")}/>
                <Button title="Eng ko'p kurilgan kinolar" active='btn-outline-dark'onClick={()=>setFilter("kopkurilgan")}/>
            </div>
        </div>
    )
}
export default Filter