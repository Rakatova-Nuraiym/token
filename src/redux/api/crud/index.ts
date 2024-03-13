import { api as index } from "..";
import { TODO } from "./type";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TODO.GetResponse, TODO.GetRequest>({
      query: () => ({
        url: "users",
        method: "GET",
      }),
      providesTags: ["crud"],
    }),
    postUser: builder.mutation<TODO.PostResponse, TODO.PostRequest>({
      query: (newUser) => ({
        url: `users`,
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["crud"],
    }),
    findUser: builder.mutation<TODO.PostResponse, TODO.PostRequest>({
      query: (findUser) => ({
        url: `login`,
        method: "POST",
        body: findUser,
      }),
      invalidatesTags: ["crud"],
    }),
  }),
});
// export const setToken = (token) => {
//   localStorage.setItem("token", token);
// };
// export const getToken = () => {
//   return localStorage.getItem("token");
// };

export const { useGetTodosQuery, usePostUserMutation, useFindUserMutation } =
  api;
