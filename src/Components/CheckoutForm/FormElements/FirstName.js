import * as S from '../Styled'

export default function FirstName({propsForFormElements})
{
    const { register, errors } = propsForFormElements
    return(
        <S.CheckoutFormSection>
            <label htmlFor='first_name' >Imię</label>
            <input {...register('first_name',{
            required: true,
            minLength: 4,
            maxLength: 50
            })}
            id='FirstName'
            style={
                errors.first_name && {border: '1px solid red', color: 'red'}
            }
            />
            {
                errors.first_name && (
                    <S.ErrorList>
                        <li>Pole jest wymagane</li>
                        <li>Minimalna liczba znaków: 4</li>
                        <li>Maksymalna liczba znaków: 50</li>
                    </S.ErrorList>
                )
            }
    </S.CheckoutFormSection>
    )
}





