import { useEffect, useState } from "react";

export function useSort(data) {
     const [arrElement, setArrElement] = useState([]);

    useEffect(() => {
      setArrElement(data);
    }, [arrElement]);
    arrElement.sort();
    return { arrElement };

  // setArrElement(data.sort());
  //return { arrElement };
}
