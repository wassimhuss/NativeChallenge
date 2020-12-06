export const getarticleDetails = (e) => dispatch => {
    try{
        dispatch( {
            type: 'ARTICLES_DETAILS',
            payload:e
        })
    }
    catch(e){
        return e
     }
 
 }