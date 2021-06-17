import * as S from '../Styled'

export default function LastName({propsForFormElements})
{
    const { register, errors } = propsForFormElements
    return(
        <S.CheckoutFormSection>
            <label htmlFor='last_name' >Nazwisko</label>
            <input {...register('last_name',{
            required: true,
            minLength: 5,
            maxLength: 50
            })}
            id='last_name'
            style={
                errors.last_name && {border: '1px solid red', color: 'red'}
            }
            />
            {
                errors.last_name && (
                    <S.ErrorList>
                        <li>Pole jest wymagane</li>
                        <li>Minimalna liczba znaków: 5</li>
                        <li>Maksymalna liczba znaków: 50</li>
                    </S.ErrorList>
                )
            }
    </S.CheckoutFormSection>
    )
}





