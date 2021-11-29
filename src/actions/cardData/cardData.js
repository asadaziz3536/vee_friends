import * as constants from './constants'

export const latestPostCard = (data, history) => (dispatch) => {
    try {
        const res = data
        dispatch({ type: constants.SET_POST_CARD_DATA, payload: res })
        if(res.msg === 'success'){
            history.push("/postdetail")
        }
        console.log(history)
        
    } catch (error) {
        console.log("🚀 ~ file: cardData.js ~ line 14 ~ cardDetail ~ error", error)
    }
}

export const sliderCard = (data, history) => (dispatch) =>{
    try {
        

    } catch (error) {
        
    }
}

export const tokenCard = (data, history) => (dispatch) =>{
    try {
        const res = data
        dispatch({type: constants.SET_TOKEN_CARD_DATA, payload: res})
        if(res === data){
        history.push('/garryscollection')
    }

    } catch (error) {
        
    }
}

