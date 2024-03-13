import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store";

interface Todo {
  children: ReactNode;
}

const ReduxProvider: FC<Todo> = ({ children }) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default ReduxProvider;
