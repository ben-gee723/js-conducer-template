// 11. import useConext, useState and Context to be used
import React, { useContext, useState } from "react";
import AppContext from "../conducer/00-index";

function Counter() {
    // 12. Set-Up useContext
    const { counterState, counterDispatch } = useContext(AppContext);
    console.log("Counter.js counterState", counterState);

    // 13. Set-up required useStates to edit information if required

    return (
        <>
            <p>Hello World</p>
            <p> {counterState.count}</p>
            <button onClick={() => counterDispatch({ type: 'INCREASE' })} >Increase</button>
            <button onClick={() => counterDispatch({ type: 'DECREASE' })} >Decrease</button>
        </>
    )
}
export default Counter;