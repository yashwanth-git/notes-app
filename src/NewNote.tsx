import styled from "styled-components";
import { NoteForm } from "./NoteForm";

export const NewNote = () => {
  return (
    <div className="container">
      <StyledNewNote>
        <h1>New Note</h1>
        <NoteForm />
      </StyledNewNote>
    </div>
  );
};

const StyledNewNote = styled.div`
  h1 {
    font-size: 2rem;
    margin: 0.5em 0;
    font-weight: 600;
  }
`;
