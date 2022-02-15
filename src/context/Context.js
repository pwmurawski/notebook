import { createContext } from "react";

const NotesContext = createContext({
  notes: [],
  changeNotes: () => {},
});

export default NotesContext;
