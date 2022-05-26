import React, { useState } from "react"

export const useHooks = ()=>{
    const [numOfNotes, setNumOfNotes] = useState(3);

    const loadMore = () => {
        setNumOfNotes(numOfNotes + numOfNotes);
      };
  return {numOfNotes, loadMore};
};

 