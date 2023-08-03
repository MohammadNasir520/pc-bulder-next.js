import { api } from "../apiSlice";

const reviewsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviews: builder.query({

      query: () => "/reviews",
    }),
    getSingleProduct: builder.query({

      query: (id) => `/products/${id}`,
    }),
  }),
});

export const {
  useGetAllReviewsQuery, useGetSingleProductQuery
} = reviewsApi;
