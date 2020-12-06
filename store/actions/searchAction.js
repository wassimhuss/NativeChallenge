import axios from 'axios'

export const SearchArtical = (items) => {
    return async (dispatch) => {
    const  p = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${items}&api-key=HGRCOa4NsS37U9rE0JxNGshoILCbekI5`;
    try{
        axios.get(p)
         .then((res)=>{
             dispatch({type: 'SEARCH_ARTICLES',
                payload: res.data.response.docs});
         });
  
    }
    catch(e){
     throw new Error(e.message);
    }
    }
}
export const resetData = () => {
    return { type: 'RESET_ARTICLES' };
    }
