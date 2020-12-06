
import Article from '../../models/Article'
const initialState = {
    topArticles: [],
    nbOfPage: 0
};

const postReducer = (state = initialState, action)=> {
  switch (action.type) {
   case 'GET_ARTICLES':
            let MyData = [];
            action.payload.forEach((data) => {
                let myArticles = new Article(
                    data._id,
                    data.headline.main,
                    data.abstract,
                    data.multimedia[5],
                    data.lead_paragraph,
                    data.document_type,
                    data.web_url
                );
                MyData.push(myArticles);
            });
            return {
                ...state,
                topArticles: state.topArticles.concat(MyData)
            }
            case 'RESET_ARTICLES':
                return {
                    ...state
                    ,nbofPage:0
                    ,topArticles: [] 
                    
                };
        case 'ADD_DATA':
            return {
                ...state,
                nbOfPage: state.nbOfPage + 1
            };

            default:
                return state;

    }   
};
export default postReducer
