import React ,{useState } from 'react'

function Filter(props) {

    const { updateData } = props
        
    const [filter, setFilter] = useState("")

    return (
        <div>
            <div className="input-group mb-3">
                <input value = {filter} type="text" className="form-control" placeholder="Filter" onChange={(event)=>{
                    setFilter(event.target.value)
                    updateData(event.target.value)}
                    }/>
            </div>
        </div>
    )
}

export default Filter
