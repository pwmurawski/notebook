import { useContext, useRef } from "react";
import NotesContext from "../context/Context";
import useComponentId from "./useComponentId";

const useAddNote = () => {
  const addNoteRef = useRef(null);
  const notesCon = useContext(NotesContext);
  const id = useComponentId();

  const addNote = () => {
    const getBounding = addNoteRef.current.getBoundingClientRect();

    notesCon.changeNotes([
      ...notesCon.notes,
      {
        id,
        title: "",
        description: "",
        x: getBounding.x - 35,
        y: getBounding.y - 50,
        width: 155,
        height: 100,
      },
    ]);
  };

  return [addNoteRef, addNote];
};

export default useAddNote;
