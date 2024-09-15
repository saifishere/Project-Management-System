import api from "@/config/api";

export const createPayment = ({planType, jwt}) => {
    return async(dispatch) => {
        try {
        const {data} = await api.post(`/api/payment/${planType}`)
            if(data.payment_link_url){
                window.location.href = data.payment_link_url
            }
        } catch (error) {
            console.log("error", error);
        }
    }
}