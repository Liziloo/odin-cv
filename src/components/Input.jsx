import { useState } from "react";

function Input({id, label}) {

    return (
        <>
            <label for={id}>{label}</label>
            <input />
        </>
    )
}

export default Input