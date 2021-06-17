import React from 'react'
import * as S from './Styled'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import FirstName from './FormElements/FirstName'
import LastName from './FormElements/LastName'
import City from './FormElements/City'
import ZipCode from './FormElements/ZipCode'
import PostData from './PostData'
export default function CheckoutForm()
{
    const { MainPageFetchedData } = useSelector((state)=>state)
    const selectedShopItems = MainPageFetchedData.filter((state)=> state.quantity !== 0 )
    function OnSubmit(data)
    {
        PostData(data, selectedShopItems)
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    })
    const propsForFormElements = { register, errors }
    
    return(
        <>
            {
                //Protecting from sending empty order
                selectedShopItems.length > 0 ? (
                    <S.CheckoutForm
                    onSubmit={handleSubmit(OnSubmit)}
                    >
                        <div>
                            <FirstName propsForFormElements={propsForFormElements} />
                            <LastName propsForFormElements={propsForFormElements} />
                        </div>
                        <div>
                                <City propsForFormElements={propsForFormElements} />
                                <ZipCode propsForFormElements={propsForFormElements} />
                        </div>
                        <S.SubmitInput type='submit' value='ZAMAWIAM I PŁACĘ' />
                        <S.CheckoutFormInfoMessage>
                            Jeżeli wszystkie dane przejdą pomyślnie proces walidacji to zostaną wysłane pod endpoint /order. Obiekt będzie można również podejrzeć w konsoli.
                        </S.CheckoutFormInfoMessage>
                </S.CheckoutForm>
                ) : (
                    <div>Twój koszyk jest pusty.</div>
                )
            }
        </>
    )
}












