import { Link } from "react-router-dom";
import styled from "styled-components";
export const NoteForm = () => {
  return (
    <StyledForm>
      <Group>
        <Input>
          <label htmlFor="title">Title </label>
          <input type="text" id="title" placeholder=" " required />
        </Input>
        <Input>
          <label htmlFor="tags">Tags</label>
          <input type="text" id="tags" placeholder=" " required />
        </Input>
      </Group>
      <TextArea>
        <label>Body</label>
        <textarea id="body" rows={5} required />
      </TextArea>
      <Group className="mt-1 pull-right">
        <PButton>Save</PButton>
        <Link to="..">
        <SButton>Cancel</SButton>
        </Link>
      </Group>
    </StyledForm>
  );
};

const StyledForm = styled.form``;
const Group = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  &.pull-right{
      justify-content:flex-end;
  }
  &.mt-1 {
    margin-top: 1em;
  }
`;
const Input = styled.div`
  position: relative;
  width: 50%;
  input {
    width: 100%;
    padding: 0.5em 0.75em;
    font-size: 1.125rem;
  }
  input:focus {
    outline-color: #0560ff;
  }
`;
const TextArea = styled.div`
  margin-top: 1.5em;
  label {
    display: block;
  }
  textarea {
    width: 100%;
    padding: 1em;
    font-size: 1rem;
  }
`;
const PButton = styled.button`
  font-size: 1.125rem;
  padding: 0.5em 1.5em;
  background-color: #0458e9;
  border-radius: 0.25rem;
  border: 0;
  cursor: pointer;
  color: #ffffff;
`;
const SButton = styled.button`
  font-size: 1.125rem;
  padding: 0.5em 1.5em;
  cursor: pointer;
  border: 0.1rem solid #0458e9;
  color: #0458e9;
  border-radius: 0.25rem;
  background: #fff;
`;
