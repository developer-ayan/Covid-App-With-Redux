function Getdata (){
    return (dispatch) => {
        fetch('https://covid19.mathdro.id/api/confirmed')
        .then(response => response.json())
        .then(json => dispatch({type : "GETTODOS", todos : json}))
    }
}

export {
    Getdata
}