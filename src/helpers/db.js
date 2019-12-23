module.exports= {
    paramSort
}

function paramSort(params){
    let queryParams = [];

    for(var i in Object.keys(params)){
        queryParams.push(params[Object.keys(params)[i]]);
    };

    return queryParams;
}