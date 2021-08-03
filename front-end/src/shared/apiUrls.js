export const SERVER_BASE_API = "http://localhost:5000/restauApp/"

export const GET_PRODUCTS = `${SERVER_BASE_API}product/getAll`
export const GET_PRODUCT = `${SERVER_BASE_API}product/get/:id`
export const ADD_PRODUCT = `${SERVER_BASE_API}product/add`
export const UPDATE_PRODUCT= `${SERVER_BASE_API}product/update/:id`
export const DELETE_PRODUCT= `${SERVER_BASE_API}product/delete/:id`
export const GET_FROM_CART = `${SERVER_BASE_API}cart/getCartItems`;
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_ORDERS = `${SERVER_BASE_API}order/getAll`
export const GET_ORDER = `${SERVER_BASE_API}order/get/:id`
export const ADD_ORDER = `${SERVER_BASE_API}order/add`
export const UPDATE_ORDER= `${SERVER_BASE_API}order/update/:id`
export const DELETE_ORDER= `${SERVER_BASE_API}order/delete/:id`