import { Page } from "../components/Page";
import { css } from "@linaria/core";

const loginWrapper = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lavenderblush;
  gap: 1rem;
`;

export const Login = () => {
  return (
    <Page className={loginWrapper}>
      <h1>Welcome, please log in:</h1>
      <input placeholder={"Username"} type={"text"} />
      <input placeholder={"Password"} type={"password"} />
    </Page>
  );
};
