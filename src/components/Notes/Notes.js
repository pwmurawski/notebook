import { useContext } from "react";
import Note from "./Note/Note";
import NotesContext from "../../context/Context";

export default function Notes() {
  const notesCon = useContext(NotesContext);

  return (
    <>
      {notesCon.notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          x={note.x}
          y={note.y}
          width={note.width}
          height={note.height}
        />
      ))}
    </>
  );
}
