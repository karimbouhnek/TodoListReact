import React, { useState } from 'react'
import { connect } from "react-redux";
import { addTodo } from "../Redux/Actions/index";

function Form(props) {

    const {addTodo} = props

    const [name, setName] = useState();
    
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <input type="checkbox" checked={false} disabled={true}/>
                </div>
            </div>
            <input value = {name} type="text" placeholder="New Task" className="form-control" aria-label="Text input with checkbox" onChange={(event)=>{setName(event.target.value)}} />
            <div className="input-group-prepend">
            <button disabled={name===""} onClick={ () =>{addTodo(name) ; setName('')} } className="btn btn-outline-primary" type="button">Add</button>
            </div>
        </div>
    )
}

  const mapDispatchToProps= (dispatch) => {
    return {
      addTodo: todo => dispatch(addTodo(todo))
    };
  }

  export default connect(
    null,
    mapDispatchToProps
  )(Form);
