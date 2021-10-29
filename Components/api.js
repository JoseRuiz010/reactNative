
import { useEffect } from "react";
import { data } from "./data";
 
export  const getTareas = () => {
        return   data
}

export  const addTareas = (tarea) => {
   data.push(tarea);
}