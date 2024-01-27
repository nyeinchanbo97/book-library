import { api } from "./api"

export const getAuthorData = async (arg) => {
    try {
        const {data} = await api.get(arg);
        
        return data;
    } catch (error) {
        // throw new Error(error.message)
        return error.message;
    }
}