import React, { useState , useEffect } from 'react'
import Task from './Task'
import Filter from './Filter'
import Form from './Form'
import Header from './Header'
import { useSelector } from "react-redux";


function TodoApp() {

    //const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [done, setDone] = useState(0)
    const [filter, setFilter] = useState(null);
    
    const data = useSelector(state => state.data);

    useEffect(() =>{
        console.log(data);
        let tmp = data;
        if (filter) {
            tmp = data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
        }
        setFilteredData(tmp);
    }, [data, filter]);

    const deleteTodo = (index) =>{
        /*setData ( data.filter( (item, i) =>{
            return i !==index ;
        } ))*/
    }

    const toggleCheck = (index)=>{
        /*setData ( data.filter( (item, i) =>{
            if(i===index){
                item.checked = !item.checked;
                
            } ;
            return item;
        } ));*/
    }

    const updateTodo = (name, index)=>{
        /*setData( data.filter((item, i )=>{
            if ( i === index){
                item.name = name
            };
            return item;
        }));*/
    }

    return (
        <div>
            <Header/>
            <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                <div className="my-3 py-3">
                </div>
                    <Filter updateData={setFilter}/>
                    <button onClick={()=>{setDone(0)}}  className="btn btn-outline-success" type="button">Show all</button>
                    <button onClick={()=>{setDone(1)}}  className="btn btn-outline-info" type="button">Show done</button>
                    <button onClick={()=>{setDone(2)}}  className="btn btn-outline-dark" type="button">Show !done</button>
                    {
                        (filteredData && filteredData.length > 0) && filteredData.map( (todo, index) => (<Task todo={todo} index={index} key={index} />) )
                    }
                    <Form/>
            </div>
        </div>
    )
}



export default TodoApp
