import { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';

export const HomeContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    all_product.forEach((product) => {
        cart[product.id] = 0;
    });
    return cart;
};


const HomeContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [cupon, setCupon] = useState('');
    const [descuento, setDescuento] = useState(0);
    const [selectedSize, setSelectedSize] = useState({});

    const addToCart = (itemId, size) => {
        if (!size || !cartItems.hasOwnProperty(itemId)) return; // Validación
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        setSelectedSize((prev) => ({
            ...prev,
            [itemId]: [...(prev[itemId] || []), size],
        }));
    };
    
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev };
            if (newCart[itemId] > 0) newCart[itemId] -= 1;
            if (newCart[itemId] === 0) delete newCart[itemId]; // Elimina productos con 0 cantidad
            return newCart;
        });
        setSelectedSize((prev) => {
            const newSizes = { ...prev };
            if (newSizes[itemId]) {
                newSizes[itemId].pop(); // Quitar la última talla agregada
                if (newSizes[itemId].length === 0) delete newSizes[itemId];
            }
            return newSizes;
        });
    };
    

    const getSubtotal = () => {
        let subtotal = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                subtotal += cartItems[item] * itemInfo.new_price;
            }
        }
        return subtotal;
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.new_price;
            }
        }
        return totalAmount - (totalAmount * descuento);
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };
    

    const validarCupon = () => {
        if (cupon === 'FREE10') {
            setDescuento(0.1); // 10% de descuento
        } else {
            alert('Cupón no válido');
        }
    };

    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
        cupon,
        setCupon,
        descuento,
        setDescuento,
        validarCupon,
        getSubtotal,
        selectedSize, 
    };

    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}
export default HomeContextProvider;