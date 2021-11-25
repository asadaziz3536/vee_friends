import * as constants from './constants'

export const latestPostCard = (data, history) => (dispatch) => {
    try {
        
        const res = data
        console.log(history)
        dispatch({ type: constants.SET_POST_CARD_DATA, payload: res })
        if(res.msg === 'success'){
        history.push("/postdetail")
    }
        
    } catch (error) {
        console.log("🚀 ~ file: cardData.js ~ line 7 ~ cardDetail ~ error", error)
    }
}