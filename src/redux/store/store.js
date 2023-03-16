import { configureStore } from "@reduxjs/toolkit";
import mobileDevicesReducer from "../reducers/mobileDevicesReducer";
const store = configureStore({
    reducer: {
        mobileDevices: mobileDevicesReducer
    },
})

export default store;