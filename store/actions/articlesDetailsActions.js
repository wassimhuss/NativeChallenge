import {GET_ARTICLES_DETAILS} from '../type'

export const getarticleDetails = (e) => dispatch => {
    
    try{
        dispatch( {
            type: GET_ARTICLES_DETAILS,
            payload:e
        })
    }
    catch(e){
        return e
     }
 
 }