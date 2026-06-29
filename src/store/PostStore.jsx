import axios from "axios";
import { create } from "zustand";

const usePostStore = create((set) => ({
  posts: [],
  total: 0,
  loading: false,

  actions: {
    getAllPosts: async (limit, skip, query, sortBy, orderBy) => {
      try {
        set({ loading: true });

        let url = "https://dummyjson.com/posts";

        const params = new URLSearchParams();
        params.append("limit", limit);
        params.append("skip", skip);

        if (query && query.trim() !== "") {
          url = "https://dummyjson.com/posts/search";
          params.append("q", query);
        }

        if (sortBy) {
          params.append("sortBy", sortBy);
          params.append("order", orderBy || "asc");
        }

        const finalURL = `${url}?${params.toString()}`;

        const res = await axios.get(finalURL);

        set({
          posts: res.data.posts || [],  total: res.data.total || 0,loading: false,
        });
      } catch (error) {
        console.log("Posts API Error:", error);
        set({
          posts: [],
          total: 0,
          loading: false,
        });
      }
    },

    setPosts: (data) => set({ posts: data }),
    setTotal: (value) => set({ total: value }),
  },
}));
export const usePosts = () => {
  const state = usePostStore((state) => state);
  const actions = usePostStore((state) => state.actions);

  return { ...state, ...actions };
};