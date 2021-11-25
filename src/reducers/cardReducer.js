
import * as constants from '../actions/cardData/constants'

const initialState = {
    cardDetail: ''
}

export const cardReducer = (state= initialState, action) =>{
    const {type, payload} = action;
    switch (type){

        case constants.SET_POST_CARD_DATA:
            console.log(payload)
            return{
                ...state,
                cardDetail: payload
            }

        default:
            return state;
    }
}