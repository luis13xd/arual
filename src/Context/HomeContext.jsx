import { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';

export const HomeContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const HomeContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [cupon, setCupon] = useState('');
    const [descuento, setDescuento] = useState(0);
    const [selectedSize, setSelectedSize] = useState({});


    const selectSizeForItem = (itemId, size) => {
        setSelectedSize({ itemId, size });
    };
    
    // const addToCart = (itemId, size) => {
    //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //     setSelectedSize((prev) => ({ ...prev, [itemId]: size }));
    // };
    const addToCart = (itemId, size) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        setSelectedSize((prev) => {
            const updatedSizes = { ...prev };
            if (updatedSizes[itemId]) {
                updatedSizes[itemId] = [...updatedSizes[itemId], size];
            } else {
                updatedSizes[itemId] = [size];
            }
            return updatedSizes;
        });
    };
    

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
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
    }

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