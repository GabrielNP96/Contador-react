import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState<number>(0); //estado do contador
    return (
        <div>
            <h1>Contador : {counter}</h1>
            <button onClick={() => setCounter (counter + 1)}>Incrementar</button>
            <button onClick={() => setCounter (counter - 1)}>Decrementar</button>
        </div>
    );
}

export default Counter;