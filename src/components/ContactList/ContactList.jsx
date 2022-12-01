import React from "react";
import { FriendList, ContactItem, Friend, BtnDelete } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
    <FriendList>{contacts.map(({id, name, number}) => (
        <ContactItem key={id}>
            <Friend>{name}: {number}</Friend>
            <BtnDelete type="button" onClick={() => onDeleteContact(id)}>Delete</BtnDelete>
        </ContactItem>
    ))}
    </FriendList>
)