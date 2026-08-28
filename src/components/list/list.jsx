import Listiteam from "../listiteam/listiteam"

function List({data, deleteItems, setAddsubmit}){
    return(
        <div className="listwrapper contaniner mt-3 p-4">
            {
                data.map((item,index)=>{
                    return(
                        <Listiteam deleteItems={deleteItems} title={item.title} id={item.id} vives={item.vives} setAddsubmit={setAddsubmit} key={item.id} />
                    )
                })
            }
        </div>
    )
}

export default List