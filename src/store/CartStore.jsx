import { create } from "zustand";

const calcTotal = (items) =>
    items.reduce((acc, item) => acc + item.price * item.quantity, 0);
const calcItems = (items) => items.reduce((acc, item) => acc + item.quantity, 0);

const useCartStore = create((set, get) => ({
    cartItems: [],
    totalPrice: 0,
    totalItems: 0,
    actions: {
        setCartItems: (data) =>
            set({ cartItems: data, totalItems: calcItems(data), totalPrice: calcTotal(data) }),

        addToCart: (product) =>
            set((state) => {
                const existingItem = state.cartItems.find(
                    (item) => item.id === product.id
                );

                if (existingItem) {
                    const newCart = state.cartItems.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                    return {
                        cartItems: newCart,
                        totalItems: calcItems(newCart),
                        totalPrice: calcTotal(newCart),
                    };
                }
                const newCart = [...state.cartItems, { ...product, quantity: 1 }];
                return {
                    cartItems: newCart,
                    totalItems: calcItems(newCart),
                    totalPrice: calcTotal(newCart),
                };
            }),

        removeFromCart: (id) =>
            set((state) => {
                const newCart = state.cartItems.filter((item) => item.id !== id);
                return {
                    cartItems: newCart,
                    totalItems: calcItems(newCart),
                    totalPrice: calcTotal(newCart),
                };
            }),

        updateQuantity: (id, quantity) =>
            set((state) => {
                const newCart = state.cartItems.map((item) =>
                    item.id === id ? { ...item, quantity } : item
                );
                return {
                    cartItems: newCart,
                    totalItems: calcItems(newCart),
                    totalPrice: calcTotal(newCart),
                };
            }),

        calculateTotal: (items) => calcTotal(items ?? get().cartItems),
        calculateItems: (items) => calcItems(items ?? get().cartItems),

    },

}));

export const useCart = () => {
    const state = useCartStore((state) => state);
    const actions = useCartStore((state) => state.actions);

    return { ...state, ...actions };
};

export default useCartStore;