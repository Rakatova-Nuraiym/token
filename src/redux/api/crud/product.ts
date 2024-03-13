import { api as index } from "..";
import { TODO } from "./type";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<TODO.GetProductRequest, TODO.GetProductResponse>(
      {
        query: () => ({
          url: "products ",
          method: "GET",
        }),
        providesTags: ["crud"],
      }
    ),
    postProducts: builder.mutation<
      TODO.PostProductRequest,
      TODO.PostProductResponse
    >({
      query: (newUser) => ({
        url: `products `,
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["crud"],
    }),
    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `products/${id} `,
        method: "DELETE",
      }),
      invalidatesTags: ["crud"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  usePostProductsMutation,
  useDeleteProductsMutation,
} = api;
