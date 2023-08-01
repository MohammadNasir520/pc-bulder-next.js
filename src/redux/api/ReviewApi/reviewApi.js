import { api } from "../apiSlice";

const reviewsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviews: builder.query({

      query: () => "/reviews",
    }),
  }),
});

export const {
  useGetAllReviewsQuery,
} = reviewsApi;
