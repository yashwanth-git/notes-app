import { NoteForm } from "./NoteForm";

export const NewNote = () => {
  return (
    <>
        <h1 className="mb-4">New Note</h1>
        <NoteForm onSubmit={function (data: NoteData): void {
        throw new Error("Function not implemented.");
      } }/>
    </>
  );
};