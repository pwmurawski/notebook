import PropTypes from "prop-types";
import styles from "./Note.module.css";
import { DeleteNoteSvg } from "../../Svg/Svg";
import useNote from "../../../hook/useNote";

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
  const [
    noteData,
    setNoteData,
    moveStart,
    getPosition,
    getSize,
    deleteNote,
    noteRef,
    textAreaRef,
  ] = useNote(id, title, description, x, y, width, height);

  return (
    <section className={styles.note} style={{ display: "none" }} ref={noteRef}>
      <header
        className={styles.note__header}
        onMouseDown={moveStart}
        onMouseUp={() => getPosition()}
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
          <DeleteNoteSvg onClick={() => deleteNote(id)} />
        </button>
      </header>
      <textarea
        spellCheck="false"
        className={styles.note__desc}
        value={noteData.description}
        onChange={(e) =>
          setNoteData({ ...noteData, description: e.target.value })
        }
        onMouseUp={() => getSize()}
        ref={textAreaRef}
      />
    </section>
  );
}

Note.propTypes = propTypes;
