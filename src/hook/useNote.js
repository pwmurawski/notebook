import { useContext, useEffect, useRef, useState } from "react";
import useMoveElement from "./useMoveElement";
import NotesContext from "../context/Context";

const useNote = (id, title, description, x, y, width, height) => {
  const noteRef = useRef(null);
  const textAreaRef = useRef(null);
  const notesCon = useContext(NotesContext);
  const moveStart = useMoveElement(noteRef);
  const [noteData, setNoteData] = useState({
    id,
    title,
    description,
    x,
    y,
    width,
    height,
  });

  const getPosition = () => {
    setNoteData({
      ...noteData,
      x: noteRef.current.getBoundingClientRect().x,
      y: noteRef.current.getBoundingClientRect().y,
    });
  };

  const getSize = () => {
    setNoteData({
      ...noteData,
      width: textAreaRef.current.getBoundingClientRect().width - 4,
      height: textAreaRef.current.getBoundingClientRect().height - 4,
    });
  };

  const upDataNote = (noteId, newData) => {
    notesCon.changeNotes([
      ...notesCon.notes.filter((note) => note.id !== noteId),
      newData,
    ]);
  };

  const deleteNote = (noteId) => {
    notesCon.changeNotes([
      ...notesCon.notes.filter((note) => note.id !== noteId),
    ]);
  };

  useEffect(() => {
    upDataNote(id, { ...noteData });
  }, [
    noteData.x,
    noteData.y,
    noteData.width,
    noteData.height,
    noteData.title,
    noteData.description,
  ]);

  useEffect(() => {
    noteRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    textAreaRef.current.style.width = `${width}px`;
    textAreaRef.current.style.height = `${height}px`;
    noteRef.current.style.display = "";
  }, [x, y, width, height]);

  return [
    noteData,
    setNoteData,
    moveStart,
    getPosition,
    getSize,
    deleteNote,
    noteRef,
    textAreaRef,
  ];
};

export default useNote;
