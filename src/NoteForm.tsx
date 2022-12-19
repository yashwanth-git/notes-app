import styled from "styled-components";
export const NoteForm = () => {
  return (
    <StyledForm>
      <Group>
        <Input>
          <input type="text" id="title" placeholder=" " required />
          <label htmlFor="title">Title </label>
        </Input>
        <Input>
          <input type="text" id="tags" placeholder=" " required />
          <label htmlFor="tags">Tags</label>
        </Input>
      </Group>
      <TextArea>
        <label>Body</label>
        <textarea id="body" rows={5} required />
      </TextArea>
    </StyledForm>
  );
};

const StyledForm = styled.form``;
const Group = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;
const Input = styled.div`
  position: relative;
  width: 50%;
  input {
    width: 100%;
    padding: 0.875em 0.75em;
    font-size: 1rem;
  }
  input:focus {
    outline-color: #0560ff;
  }
  input:focus + label,
  input:not(:placeholder-shown) {
    top: -0.75em;
    background: #ffffff;
    font-size: 1rem;
    color: #0458e9;
  }
  label {
    position: absolute;
    left: 0.75em;
    top: 0.65em;
    font-size: 1.125rem;
    color: #3b3b3b;
    background: #ffffff;
    transition: all ease-in-out 200ms;
  }
`;
const TextArea = styled.div`
    margin-top:1.5em;
    label{
        display:block;
    }
    textarea{
        width:100%;
        padding:1em;
        font-size:1rem;
    }
`;
