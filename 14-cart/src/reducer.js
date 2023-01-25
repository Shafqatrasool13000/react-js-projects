import { actionTypes } from "./context";

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.clear_cart:
            return { ...state, cart: [] }
        case actionTypes.remove_cart_item:
            return { ...state, cart: state.cart.filter(({ id }) => action.payload !== id) }
        case actionTypes.increase_product_amount:
            const tempCart = state.cart.map((cartItem) => cartItem.id === action.payload ? { ...cartItem, amount: cartItem.amount + 1 } : cartItem)
            return { ...state, cart: tempCart }
        case actionTypes.decrease_product_amount: {
            const tempCart = state.cart.map((cartItem) => cartItem.id === action.payload ? { ...cartItem, amount: cartItem.amount - 1 } : cartItem).filter(({ amount }) => amount !== 0)
            return { ...state, cart: tempCart }
        }
        case actionTypes.loading: {
            return { ...state, loading: true }
        }
        case actionTypes.cart_data: {
            return { ...state, cart: action.payload, loading: false }
        }
        case actionTypes.get_Total: {
            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                cartTotal.total += (price * amount);
                cartTotal.amount += amount;
                return cartTotal
            }, {
                total: 0,
                amount: 0
            })
            total = parseFloat(total.toFixed(2));
            return { ...state, total, amount }
        }
        case actionTypes.toggleAmount: {
            let tempData = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    if (action.payload.action === 'inc') {
                        return { ...cartItem, amount: cartItem.amount + 1 }
                    }
                    if (action.payload.action === 'dec') {
                        return { ...cartItem, amount: cartItem.amount - 1 }
                    }
                }
                return cartItem
            }).filter(cartItem => cartItem.amount !== 0)

            return { state, cart: tempData }
        }
        default:
            return state;
    }
}

export default reducer;

