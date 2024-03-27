import { getProducts } from "../../utils/axios-instance"

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const fetchProductSuccess = (products) => {
    return{
        type: FETCH_PRODUCTS,
        payload:products
    }
}
// redux thunk allows to write action creators that return a funtion instead of action objects.This function can then perform asynchronous operations, such as API calls, and dispatch actions once the operation is complete.
export const fetchProductData = () => {
    return async(dispatch) => {
        try{
            const response = await getProducts()
            dispatch(fetchProductSuccess(response.data)) // dispatching action when the operation is complete
        }
        catch(error){
            console.log("error occured while fetching",error)
        }
    }
    
}