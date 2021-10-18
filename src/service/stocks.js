import axios from "axios";
import { fetchingStocksRequest,fetchingStocksSuccess,fetchingStocksFailure,deleteStock, postStock, updateStocks } from "../redux/actions/actions";
import { genericApiCall, getApiCall } from "../utils/apiCalls";

// const baseURL ="http://312c-2400-1a00-b020-1dcd-351f-404c-533d-99d4.ngrok.io/stocks"

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export const stocksService = () =>{
//     return (dispatch) =>{
//         dispatch(fetchingStocksRequest());
//         axios.get(`${baseURL}`).then((res) =>{
//             dispatch(fetchingStocksSuccess(res.data));
//             // console.log("API",res.data)
//         })
//         .catch((err)=>{
//             dispatch(fetchingStocksFailure(err));
//         })
//     }
// }

export const stocksService = () =>{
    return (dispatch) =>{
        getApiCall('stocks',dispatch)
        .then((resJson) =>{
            console.log("GET",resJson.data);
            dispatch(fetchingStocksSuccess(resJson.data));
        })
        .catch((err)=>{
            dispatch(fetchingStocksFailure(err));
        })
    }
}

// export const deleteStockService = (id) =>{
//     return (dispatch) =>{
//         axios.
//         delete(`${baseURL}/${id}`)
//         .then((res)=>{
//             // console.log("Response Delete",res.data);
//             dispatch(deleteStock());
//             //we need to again dispatch fetchingStockSUccess
//             // dispatch(fetchingStocksSuccess());
//         })
//         .catch((err)=>console.log(err))
//     }
// }

export const deleteStockService = (id) =>{
    return (dispatch) =>{
        genericApiCall(`stocks/${id}`,'delete')
        .then((resJson) =>{
            dispatch(deleteStock());
        })
        .catch((err)=>console.log(err));
    }
}


// export const postStockService = (data) =>{
//     return (dispatch) =>{
//         axios.
//         post(`${baseURL}`,data)
//         .then((response) =>{
//             console.log("POST DATA",response.data);
//             dispatch(postStock());
//         })
//         .catch((error)=>console.log("ERROR:",error))
//     }
// }

export const postStockService = (stockData) =>{
    console.log("DATA",stockData);
    return (dispatch) =>{
        genericApiCall(`stocks`,'post',stockData,dispatch)
        .then((resJson) =>{
            // console.log("POST DATA",resJson.data);
            dispatch(postStock());
        })
        .catch((err)=>console.log(err));
    }
}

// export const updateStockService = (data,id) =>{
//     return (dispatch) =>{
//         axios
//         .put(`${baseURL}/${id}`,data)
//         .then((res)=>{
//             dispatch(updateStocks());
//         })
//         .catch((error) =>console.log("ERROR",error));
//     }
// }

export const updateStockService = (data,id) =>{
    return (dispatch) =>{
        genericApiCall(`stocks/${id}`,'put',data,dispatch)
        .then((res)=>{
            dispatch(updateStocks());
        })
        .catch((error) =>console.log("ERROR",error));
    }
}

