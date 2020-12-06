
    const initialState = {
  
       articlesDetails:[]
    
    
    }
    
    // eslint-disable-next-line import/no-anonymous-default-export
    export default function (state = initialState, action) {
      var newState = {}
     
      switch (action.type) {
    
    
          case 'ARTICLES_DETAILS':
          newState = {
            ...newState,
            articlesDetails : action.payload
          }
          
          break;
          
        default:
          return state;
      }
      return newState;
    }