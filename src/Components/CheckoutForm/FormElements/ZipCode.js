import * as S from '../Styled'

export default function City({propsForFormElements})
{
    const { register, errors } = propsForFormElements
    return(
        <S.CheckoutFormSection>
            <label htmlFor='zip_code' >Kod pocztowy</label>
            <input {...register('zip_code',{
            required: true,
            pattern: /^[0-9]{2}-[0-9]{3}?$/i
            })}
            id='zip_code'
            style={
                errors.zip_code && {border: '1px solid red', color: 'red'}
            }
            />
            {
                errors.zip_code && (
                    <S.ErrorList>
                        <li>Pole jest wymagane</li>
                        <li>Polski kod pocztowy ma format dd-ddd (d oznacza cyfrę)</li>
                    </S.ErrorList>
                )
            }
        </S.CheckoutFormSection>
    )
}





