import { GET_TOP_ARTICLES } from '../type'
import Article from '../../models/Article'
const initialState = {
    newsFeed: [],
    nbOfPage: 0
};

const postReducer = (state = initialState, action)=> {
  switch (action.type) {
   case GET_TOP_ARTICLES:
            let data = [];
            action.payload.forEach((el) => {
                let myArticles = new Article(
                    el._id,
                    el.headline.main,
                    el.abstract,
                    el.multimedia[5],
                    el.lead_paragraph,
                    el.subsection_name,
                    el.web_url
                );
                data.push(myArticles);
            });
            return {
                ...state,
                newsFeed: state.newsFeed.concat(data)
            }
            case 'RESET_ARTICLES':
                return {
                    ...state
                    ,nbofPage:0
                    ,newsFeed: [] 
                    
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
