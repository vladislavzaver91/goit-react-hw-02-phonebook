import styled from '@emotion/styled';

export const FormBox = styled.div`
    padding: 16px;
    margin-bottom: 32px;
    max-width: 400px;
    border: 1px solid;
`

export const Form = styled.form`
    display: block;
    margin: 0;
`

export const FormTitle = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.grey};
`;

export const SearchInput = styled.input`
    width: 300px;
    margin-top: 10px;
    padding: 5px;
    border-radius: 4px;

    :focus {
        border-color: ${props => props.theme.colors.acсentColor};
        outline: none;
    }
`;

export const BtnSubmit = styled.button`
    border: none;
    border-radius: 14px;
    padding: 10px 20px;
    cursor: pointer;
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.acсentColor};
    text-align: center;
    font-size: 16px;
    display: block;
    :hover {
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.secondAccentColor};
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
        transition: background-color 300ms ${props => props.theme.animation.primeCubic},
        color 300ms ${props => props.theme.animation.primeCubic};
    }
    :active {
        color: ${props => props.theme.colors.black};
        background-color: ${props => props.theme.colors.acсentColor};
        transition: background-color 200ms ${props => props.theme.animation.primeCubic},
        color 200ms ${props => props.theme.animation.primeCubic};
    }
`;