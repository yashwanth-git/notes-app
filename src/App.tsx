import { Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { NewNote } from "./NewNote";

export type Note = {
  id: string
} & NoteData

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<h1>Hi</h1>} />
        <Route path="/new" element={<NewNote/>} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
