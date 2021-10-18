//fetching stocks api
export const FETCHING_STOCKS_REQUEST = "FETCHING_STOCKS_REQUEST";
export const FETCHING_STOCKS_SUCCESS = "FETCHING_STOCKS_SUCCESS";
export const FETCHING_STOCKS_FAILURE = "FETCHING_STOCKS_FAILURE";
//DELETE ACTIONS:
export const DELETE_STOCKS = "DELETE_STOCKS";
//POST ACTIONS:
export const POST_STOCKS = "POST_STOCKS";
//PUT ACTIONS:
export const UPDATE_STOCKS = "UPDATE_STOCKS";

export const fetchingStocksRequest = () =>({
    type: FETCHING_STOCKS_REQUEST,
})

export const fetchingStocksSuccess = (res) =>({
    type: FETCHING_STOCKS_SUCCESS,
    payload: res,
})

export const fetchingStocksFailure = (res) =>({
    type: FETCHING_STOCKS_FAILURE,
    payload: res
})

//deleteing certain id

export const deleteStock = () =>({
    type: DELETE_STOCKS,
})

//posting data
export const postStock = () =>({
    type: POST_STOCKS,
})

//updating data
export const updateStocks = () =>({
    type:UPDATE_STOCKS,
})