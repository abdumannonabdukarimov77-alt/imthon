import { useState } from "react"

function Listiteam({title, vives, id, deleteItems, setAddsubmit}){
    let[fav, setFav] = useState(false)
    let[submit, setSubmit] = useState(false)

    return(
        <li className={`list-group-item d-flex justify-content-between p-3 list ${submit && 'active'}`}>
            <span onClick={()=>setFav((prev)=> !prev)} className='list-group-item-label fw-bold'>{title}</span> 
            <div className='d-flex gap-2'>
                <input defaultValue={vives} type="number" className='list-group-item-input text-center valueinput'/>
                <div className='d-flex justify-content-center align-items-center gap-1'>
                    <button onClick={()=>setAddsubmit(prev => prev + 1)} type='button' className='btn-cookie btn-sm'>
                        <i className='fas fa-cookie'></i>
                    </button>
                    <button onClick={()=> deleteItems(id)} type='button' className='btn btn-trash btn-sm'>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className={`fa fa-star ${fav && 'show'}`} onClick={()=> setSubmit ((prev)=> !prev)}></i>
                </div>
            </div>
        </li>
    )
}

export default Listiteam