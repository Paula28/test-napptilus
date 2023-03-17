import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    mobileDevices: [],
    detailId:[],
    countProduct: 0,
}

const getState = () => {
    const storage = localStorage.getItem('mobile_store')
    const mobileStoreTimeOut = localStorage.getItem('mobile_store_timeout')
    const time = new Date().getTime() / 1000
    if (mobileStoreTimeOut &&  time - parseInt(mobileStoreTimeOut, 10) >= 3600) {
        localStorage.clear()
        return initialState
    }

    if (storage) {
        return JSON.parse(storage)
    } else {
        return initialState
    }
}

const mobileDevicesReducer = (state = getState(), action) => {
    let newState = {}
    switch (action.type) {
        case actionTypes.SET_MOBILE_DEVICES:
            newState = {
                ...state,
                mobileDevices: action.payload
            }    
            localStorage.setItem('mobile_store_timeout', new Date().getTime() / 1000)
            break;
        case actionTypes.SET_DETAIL_ID:
            newState = {
                ...state,
                detailId: action.payload
            }  
            break;  
        case actionTypes.SET_PRODUCT_IN_THE_CART:
            newState = {
                ...state,
                countProduct: action.payload
            }  
            break;  
        default:
            newState =  state;
    }
    localStorage.setItem('mobile_store', JSON.stringify(newState))
    return newState
}

export default mobileDevicesReducer;