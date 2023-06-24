import {useEffect, useState} from "react";

function Export() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    });

    return (
        <>
            <h1>Time is {time} </h1>
        </>
    );
}

export default Export;