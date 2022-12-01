import styled from "@emotion/styled";

export const FriendList = styled.ul`
    padding: 0;
    list-style: none;
`;

export const ContactItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 15px;
    padding-left: 15px;
`;

export const Friend = styled.p`
    font-size: 20px;
    color: ${props => props.theme.colors.black};
    margin: 0;
`

export const BtnDelete = styled.button`
    border: none;
    border-radius: 14px;
    padding: 10px 20px;
    margin: 10px;
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