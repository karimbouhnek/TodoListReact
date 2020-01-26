import * as Actions from './Actions'


const initialState = {
    data: [
        {id : 1 , name : 'Donec pulvinar leo elit, eget lobortis nisi vestibulum ut. Vivamus at purus purus', checked : true},
        {id : 2 , name :'Nam rhoncus, nunc et scelerisque euismod, mauris purus vestibulum ipsum' , checked : false},
        {id : 3 , name : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' , checked : true}
    ]
  };

//state = initialState va initialiser la valeur de state si elle n'est pas définit (lors de la premiere exécution)
export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADD_TODO:
            const todo = {id : null, name : action.payload, checked : false};
            return {
                ...state,
                data: [...state.data, todo],
            }
            break;

        case Actions.DELETE_TODO:
            //console.log(action.payload)
            return{
                ...state,
                data : state.data.filter((item,i)=> i !== action.payload)
            }
            break;

        case Actions.CHECK_TODO:
            //console.log(action.payload)
            return{
                ...state,
                data : state.data.filter( (item, i) => {
                    if (i===action.payload){
                        item.checked = !item.checked;
                    }
                    return item;
                } )
            }
            break;
            
        case Actions.RENAME_TODO :
            console.log(action.payload.index);
            console.log(action.payload.newName);
            break;

        default:
            return {
                ...initialState
            }
            break;
    }
}