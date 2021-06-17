

const SET_ALL_SHOP_ITEMS_QUANTITIES = 'SET_ALL_SHOP_ITEMS_QUANTITIES'

export default function allShopItemsQuantities(state = 0, action)
{
    switch(action.type)
    {
        case SET_ALL_SHOP_ITEMS_QUANTITIES:
        return action.payload
        default: return state
    }
} 










