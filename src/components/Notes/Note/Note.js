import { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Note.module.css";
import useMoveElement from "../../../hook/useMoveElement";
import NotesContext from "../../../context/Context";
import { DeleteNoteSvg } from "../../Svg/Svg";

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default function Note({ id, title, description, x, y, width, height }) {
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

  const onMouseUpHeader = () => {
    getPosition();
  };

  const onMouseUpTextArea = () => {
    getSize();
  };

  const onClickDeleteBtn = () => {
    deleteNote(id);
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

  return (
    <section className={styles.note} style={{ display: "none" }} ref={noteRef}>
      <header
        className={styles.note__header}
        onMouseDown={moveStart}
        onMouseUp={onMouseUpHeader}
        role="button"
        tabIndex={0}
      >
        <input
          spellCheck="false"
          type="text"
          className={styles.note__title}
          value={noteData.title}
          onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
        />
        <button className={`btn--svg ${styles.note__btnDelete}`} type="button">
          <DeleteNoteSvg onClick={onClickDeleteBtn} />
        </button>
      </header>
      <textarea
        spellCheck="false"
        className={styles.note__desc}
        value={noteData.description}
        onChange={(e) =>
          setNoteData({ ...noteData, description: e.target.value })
        }
        onMouseUp={onMouseUpTextArea}
        ref={textAreaRef}
      />
    </section>
  );
}

Note.propTypes = propTypes;
