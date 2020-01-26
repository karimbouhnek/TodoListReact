import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { deleteTodo, checkTodo, renameTodo } from "../Redux/Actions/index";

function Task(props) {

    const {deleteTodo, index , renameTodo, done , checkTodo} = props

    const [ newValue , setNewValue ] = useState()
    const [hide, setHide] = useState(false);
    const [showDone, setShowDone] = useState(true)
    const [showNotDone, setShowNotDone] = useState(true)

    const [name, setName] = useState("");
    const [isChecked , setIsChecked ] = useState(false)
    const [item, setItem] = useState({})


    useEffect(() => {
        const {todo} = props
        console.log(props);
        if (todo){
            setItem({...todo})
            setNewValue(false)
        }else{
            setNewValue(true)
        }
    }, [props])

    console.log(props);
    useEffect(() => {
        console.log(props);
    }, [props])
    
 
    return (
        <div hidden={done? (!isChecked? (showDone):(showNotDone)) : (false)}>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                    <input type="checkbox" checked={item.checked} disabled={newValue} onChange={()=>{checkTodo(index); setItem({...item, checked: !item.checked})}}/>
                    </div>
                </div>
                    <div hidden = {hide} style={{textAlign:'left', textDecoration : (isChecked? 'line-through' : '')}} type="text" className="form-control" onChange={()=>{}}>{item.name}</div>
                    {
                        //problem with controlled/uncontrolled imput
                    }
                    <input hidden = {!hide} value = {item.name} type="text" className="form-control"  onChange={(event)=>{setName(event.target.value)}} />
                    <div className="input-group-append" >
                        <button disabled={isChecked} hidden = {hide} onClick={()=>{setHide (!hide)}} className="btn btn-outline-secondary" type="button">Update</button>
                        <button 
                            hidden = {!hide} 
                            onClick={()=>{setHide (!hide); renameTodo(name,index)}} 
                            className="btn btn-outline-secondary" 
                            type="button">Confirm Change
                        </button>
                        <button onClick= { ()=>{
                            deleteTodo(index);
                        } } className="btn btn-outline-danger" type="button">Delete</button>
                    </div>
                
            </div>

        </div>
    )
}


const mapDispatchToProps= (dispatch) => {
  return {
   //addTodo: todo => dispatch(addTodo(todo))
   deleteTodo : index => dispatch (deleteTodo(index)),
   checkTodo  : index => dispatch (checkTodo(index)),
   renameTodo : (newName, index) => dispatch(renameTodo({newName, index}))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Task);

