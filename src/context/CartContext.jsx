import { createContext, useContext, useEffect, useState } from "react";
const CartContext = createContext()

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    // Recalculate totals whenever cartItems changes
    useEffect(() => {
        const total = cartItems?.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0) || 0;
        const items = cartItems?.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0;
        setTotalPrice(total);
        setTotalItems(items);

        console.log("Cart Items:", cartItems);
        console.log("Total Price:", total);
        console.log("Total Items:", items);
    }, [cartItems]);


    const addToCart = (product) => {
        if (cartItems.length === 0) {
            setCartItems([{ ...product, quantity: 1 }]);
            return;
        }
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            const updatedCart = cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCart);
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    }

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
    }

    const updateQuantity = (productId, quantity) => {
        const updatedCart = cartItems.map(item =>
            item.id === productId ? { ...item, quantity } : item
        );
        setCartItems(updatedCart);
    }


    return (
        <CartContext.Provider value={{ cartItems, totalPrice, totalItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
};
export default CartProvider;