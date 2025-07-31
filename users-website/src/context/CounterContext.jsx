import { createContext, useState } from "react";


const CounterContext= createContext();

export const CounterProvider= ({children})=>{
  const [count, setCount]= useState(0);

   const increaseCount=()=>{
    setCount((prevCount)=> prevCount + 1);

  }

  const decreaseCount=()=>{
    if(count > 0){
    setCount((prevCount)=> prevCount - 1);
    }
    
  }


  return (
    <CounterContext.Provider value={{count, increaseCount, decreaseCount}} >
      {children}
    </CounterContext.Provider>
  );

};

export default CounterContext;
