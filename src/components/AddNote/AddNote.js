import { useContext, useRef } from "react";
import PropTypes from "prop-types";
import NotesContext from "../../context/Context";
import styles from "./AddNote.module.css";
import useComponentId from "../../hook/useComponentId";

const propTypes = {
  openWindow: PropTypes.func.isRequired,
};

export default function AddNote({ openWindow }) {
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
    openWindow(false);
  };

  return (
    <button
      className={styles.noteDemo}
      onClick={addNote}
      ref={addNoteRef}
      type="button"
    >
      <div className={styles.noteDemo__header} />
      <p className={styles.noteDemo__desc}>Dodaj notatke</p>
    </button>
  );
}

AddNote.propTypes = propTypes;
