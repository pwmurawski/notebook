import { useMemo } from "react";
import Layout from "./components/Layout/Layout";
import Notes from "./components/Notes/Notes";
import Menu from "./components/Layout/Menu/Menu";
import AddBtn from "./components/AddBtn/AddBtn";
import NotesContext from "./context/Context";
import useStateStorage from "./hook/useStateStorage";

export default function App() {
  const [notes, setNotes] = useStateStorage("notes", [
    {
      id: 99999999,
      title: "zadanie 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      x: 20,
      y: 20,
      width: 400,
      height: 200,
    },
    {
      id: 999999991,
      title: "zadanie 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      x: 440,
      y: 20,
      width: 400,
      height: 200,
    },
    {
      id: 999999992,
      title: "zadanie 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      x: 860,
      y: 20,
      width: 400,
      height: 200,
    },
    {
      id: 999999993,
      title: "zadanie 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      x: 20,
      y: 280,
      width: 1240,
      height: 200,
    },
  ]);
  const notesContextValMemo = useMemo(
    () => ({
      notes,
      changeNotes: setNotes,
    }),
    [notes, setNotes]
  );

  const menu = (
    <Menu>
      <AddBtn />
    </Menu>
  );

  const content = <Notes />;

  return (
    <NotesContext.Provider value={notesContextValMemo}>
      <Layout menu={menu} content={content} />
    </NotesContext.Provider>
  );
}
