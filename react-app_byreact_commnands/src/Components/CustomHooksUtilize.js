import { useEffect, useState } from "react";
import { useSort } from "../hooks/useSort";

export function CustomHookUtilizeComponent() {
  const [arr] = useState(["E", "D", "A", "C", "B"]);

  const sortedArray = useSort(arr);
  const [elemts, setElement] = useState([]);
  
  useEffect(()=>{
    if(sortedArray.arrElement){
      setElement(sortedArray.arrElement)
    }
  },[sortedArray.arrElement])

  return (
    <div className="container-fluid">
      <ol>
        {
          
        }
      </ol>
    </div>
  );
}
