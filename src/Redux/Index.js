import { combineReducers } from "redux";
import MainPageFetchedData from './MainPageFetchedData'
import allShopItemsQuantities from './allShopItemsQuantities'

const allReducers = combineReducers({
    MainPageFetchedData,
    allShopItemsQuantities
})

export default allReducers





