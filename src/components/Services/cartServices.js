import apiClient from "../../utils/api-client";

export const addToCartAPI = (id, quantity) => {
    return apiClient.post(`/cart/${id}`, {quantity})
}

export const getCartAPI = () => {
    return apiClient.get('/cart')
}

export const removeFormCartAPI = (id) => {
    return apiClient.patch(`/cart/remove/${id}`)
}
export const increaseProductAPI = (id) => {
    return apiClient.patch(`/cart/increase/${id}`)
}
export const decreaseProducttAPI = (id) => {
    return apiClient.patch(`/cart/decrease/${id}`)
}