import React from "react";

export const ContactList = ({ contacts }) => (
    <ul>{contacts.map(({contactId, name}) => (
        <li key={contactId}>
            <p>{name}</p>
        </li>
    ))}
    </ul>
)