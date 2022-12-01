import React from "react";
import { FormTitle, SeacrhInput } from "./Filter.styled";

export function Filter({value, onChange}) {
    return (
        <FormTitle> Find contacts by name
            <SeacrhInput 
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            />
        </FormTitle>
    )
};