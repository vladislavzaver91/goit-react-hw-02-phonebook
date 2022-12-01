import styled from '@emotion/styled';

export const FormTitle = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.grey};
`;

export const SeacrhInput = styled.input`
    width: 300px;
    margin-top: 10px;
    padding: 5px;
    border-radius: 4px;

    :focus {
        border-color: ${props => props.theme.colors.acсentColor};
        outline: none;
    }
`;