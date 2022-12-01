import styled from "styled-components";

export const Drop = styled("div")`
  padding: 50px 0;
  text-align: center;
`;

export const DropTitle = styled("h2")`
font-size: 60px;
    margin-bottom: 30px;
`;
export const Span = styled("span")`
font-weight: normal;
`;
export const Form = styled("form")`
width: 70%;
    margin: auto;
`;
export const FormInput = styled("div")`
display:flex;
gap: 20px;
justify-content: center;
`;
export const Input = styled("input")`
box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    width: 49%;
`;
export const Sub = styled(Input)`
width:100%;
`;
export const TextArea = styled("textarea")`
 width: 100%;
    outline: 0;
    background: #ccc;
`;

export const Submait = styled(Input)`
width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer;
`;