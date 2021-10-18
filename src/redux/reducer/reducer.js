import { FETCHING_STOCKS_FAILURE,FETCHING_STOCKS_SUCCESS,FETCHING_STOCKS_REQUEST,DELETE_STOCKS, POST_STOCKS, UPDATE_STOCKS } from "../actions/actions";

const initialState ={
    stocks: [],
    isFetching: false,
    errorMessage:''
}

const stocksReducers = (state=initialState,action) =>{
    switch(action.type){
        case FETCHING_STOCKS_REQUEST:
            return {
                ...state,isFetching: true
            }
        case FETCHING_STOCKS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                stocks: action.payload
            }
        case FETCHING_STOCKS_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case DELETE_STOCKS:
        case POST_STOCKS:
            return{
                ...state,
                isFetching: false,
            }
        
        case UPDATE_STOCKS:
            return{
                ...state,
                isFetching: false
            }
        default: return state;
    }
}

export default stocksReducers;