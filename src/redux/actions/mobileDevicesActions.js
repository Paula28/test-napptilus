import * as actionsTypes from './actionsTypes';

export const setMobileDevices = (mobileDevices) => ({
    type: actionsTypes.SET_MOBILE_DEVICES,
    payload: mobileDevices
});

export const setDetailId = (detailId) => ({
    type: actionsTypes.SET_DETAIL_ID,
    payload: detailId
});

export const setProductInTheCart = (countProduct) => ({
    type: actionsTypes.SET_PRODUCT_IN_THE_CART,
    payload: countProduct
});