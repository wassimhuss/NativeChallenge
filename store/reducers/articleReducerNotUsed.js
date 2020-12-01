import {GET_TOP_ARTICLES} from '../type'

const initialState = {
    articles:[],
    loading:true
}

export default function(state = initialState, action){
   
     var newState = {}

    switch(action.type){
        



        case GET_TOP_ARTICLES:
            
        newState= {
            ...newState,
            articles: action.payload,
            loading:false
        }
        break;


        default:
             return state
    }
    return newState;
   

}