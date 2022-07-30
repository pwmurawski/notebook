import PropTypes from "prop-types";
import styles from "./AddNote.module.css";
import useAddNote from "../../hook/useAddNote";

const propTypes = {
  openWindow: PropTypes.func.isRequired,
};

export default function AddNote({ openWindow }) {
  const [addNoteRef, addNote] = useAddNote();

  return (
    <button
      className={styles.noteDemo}
      onClick={() => {
        addNote();
        openWindow(false);
      }}
      ref={addNoteRef}
      type="button"
    >
      <div className={styles.noteDemo__header} />
      <p className={styles.noteDemo__desc}>Dodaj notatke</p>
    </button>
  );
}

AddNote.propTypes = propTypes;
