import { useState } from "react";
import styles from "./AddBtn.module.css";
import AddNote from "../AddNote/AddNote";
import { AddBtnSvg } from "../Svg/Svg";

export default function AddBtn() {
  const [openAddWindow, setOpenAddWindow] = useState(false);

  return (
    <article>
      {openAddWindow ? <AddNote openWindow={setOpenAddWindow} /> : null}
      <button className="btn--svg" type="button">
        <AddBtnSvg
          className={styles.btn}
          onClick={() => {
            setOpenAddWindow(true);
          }}
        />
      </button>
    </article>
  );
}
