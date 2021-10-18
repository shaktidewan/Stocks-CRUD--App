import APIKit from "../shared/APIKit";

export const genericApiCall = (url,method,data,dispatch) =>{
    let finalUrl = url;//stocks
    let postData = {
        method:method,
        data: data,
    };

    return APIKit(finalUrl,postData).then((res)=>{
        return res;
    });
};

export const getApiCall = (url,dispatch) =>{
    let finalUrl = url;
    return APIKit.get(finalUrl)
    .then((res)=>{
        // console.log("GETAPICALL",res.data)
        return res;
    })
}