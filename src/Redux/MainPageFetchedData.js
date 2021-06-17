
export const MAIN_PAGE_FETCHED_DATA = 'MAIN_PAGE_FETCHED_DATA'
export const MAIN_PAGE_FETCHED_ADD = 'MAIN_PAGE_FETCHED_ADD'
export const MAIN_PAGE_FETCHED_REMOVE = 'MAIN_PAGE_FETCHED_REMOVE'

export default function MainPageFetchedData( state = [], action )
{
    switch( action.type )
    {
        case MAIN_PAGE_FETCHED_DATA:

            state = [ ...action.payload ]

            for(let i = 0 ; i < state.length ; i++)
            {
                //making new object key: quantity
                state[i].quantity = 0
            }

            return [ ...state ]

        case MAIN_PAGE_FETCHED_ADD:

            const indexSelectedItemADD = state.indexOf(action.payload)

            // console.log(indexSelectedItemADD)

            state[indexSelectedItemADD].quantity = state[indexSelectedItemADD].quantity + 1

            return [ ...state ]
            
        case MAIN_PAGE_FETCHED_REMOVE:

            const indexSelectedItemREMOVE = state.indexOf(action.payload)

            // console.log(indexSelectedItemREMOVE)

            //quantity can not be a negative number
            if( state[indexSelectedItemREMOVE].quantity >= 1 )
            {
                state[indexSelectedItemREMOVE].quantity = state[indexSelectedItemREMOVE].quantity - 1
            }
            
            return [ ...state ]
        
        default: return state
    }
}










