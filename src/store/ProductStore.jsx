import axios from "axios";
import { create } from "zustand";
let baseURL = "https://dummyjson.com/products";
const useProductStore = create((set) => ({
    products: [],
    total: 0,
    loading: true,
    actions: {
        setAllProducts: (data) => set({ products: data }),

        getAllProducts: async (
            limit, skip, query, category, sortBy, orderBy
        ) => {
            set({ loading: true })
            console.log("params", limit, skip, sortBy, orderBy)
            const params = new URLSearchParams();
            if (query) {
                if (!baseURL.includes("/search")) {
                    baseURL += "/search"
                }
                params.append("query", query)
            }
            if (category && category != "all") {
                if (!baseURL.includes("/category")) {
                    baseURL += `/category/${category}`
                }
            }
            params.append("limit", limit);
            params.append("skip", skip)
            if (sortBy) {
                params.append("sortBy", sortBy);
                params.append("order", orderBy);
            }


            const res = await axios.get(`${baseURL}?${params.toString()}`)
            set({ products: res.data.products, total: res.data.total, loading: false })

        }
    }
}))

export const useProducts = () => {
    const state = useProductStore((state) => state);
    const actions = useProductStore((state) => state.actions);
    return { ...state, ...actions }
}