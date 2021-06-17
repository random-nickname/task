import * as S from '../Styled'

export default function City({propsForFormElements})
{
    const { register, errors } = propsForFormElements
    return(
        <S.CheckoutFormSection>
            <label htmlFor='city' >Miasto</label>
            <input {...register('city',{
            required: true
            })}
            id='city'
            style={
                errors.city && {border: '1px solid red', color: 'red'}
            }
            />
            {
                errors.city && (
                    <S.ErrorList>
                        <li>Pole jest wymagane</li>
                    </S.ErrorList>
                )
            }
    </S.CheckoutFormSection>
    )
}





