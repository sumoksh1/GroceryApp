import { create } from "zustand";
import { dummyProducts } from "../assets/assets";
import { toast } from "react-hot-toast";

const currency = import.meta.env.VITE_CURRENCY;

const useAppStore = create((set, get) => ({
    currency,

    user: null,
    isSeller: false,
    showUserLogin: false,
    products: [],
    cartItems: {},
    searchQuery: "",

    setUser: (user) => set({ user }),
    setIsSeller: (isSeller) => set({ isSeller }),
    setShowUserLogin: (showUserLogin) => set({ showUserLogin }),
    setProducts: (products) => set({ products }),
    setCartItems: (cartItems) => set({ cartItems }),
    setSearchQuery: (searchQuery) => set({ searchQuery }),

    addToCart: (itemId) => {
        set((state) => {
            let cartData = structuredClone(state.cartItems);

            if (cartData[itemId]) {
                cartData[itemId] += 1;
            } else {
                cartData[itemId] = 1;
            }

            return { cartItems: cartData };
        });
        toast.success("Added to Cart");
    },

    updateCartItem: (itemId, quantity) => {
        set((state) => {
            let cartData = structuredClone(state.cartItems);
            cartData[itemId] = quantity;
            get().setCartItems(cartData);
            return { cartItems: cartData };
        });
        toast.success("Cart updated");
    },

    removeFromCart: (itemId) => {
        set((state) => {
            let cartData = structuredClone(state.cartItems);
            if (cartData[itemId]) {
                cartData[itemId] -= 1;
                if (cartData[itemId] === 0) {
                    delete cartData[itemId];
                }
            }
            return { cartItems: cartData };
        });
        toast.success("Removed from Cart");
    },

    fetchProducts: async () => {
        set({ products: dummyProducts });
    },

    getCartCount: () => {
        const { cartItems } = get();
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    },

    getCartAmount: () => {
        const { cartItems, products } = get();
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    },
}));

export default useAppStore;