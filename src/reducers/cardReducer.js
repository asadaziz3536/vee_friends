
import * as constants from '../actions/cardData/constants'

const initialState = {
    latestCard: '',
    sliderCard: '',
    tokenCard: ''
}

export const cardReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case constants.SET_POST_CARD_DATA:
            console.log(payload)
            return {
                ...state,
                latestCard: payload
            }

        case constants.SET_SLIDER_CARD_DATA:
            console.log(payload)
            return {
                ...state,
                sliderCard: payload
            }

        case constants.SET_TOKEN_CARD_DATA:
            console.log(payload)
            return {
                ...state,
                tokenCard: payload
            }
        default:
            return state;
    }
}