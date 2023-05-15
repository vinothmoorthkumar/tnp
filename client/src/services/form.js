import axios from "axios";

export async function getAllMobileData() {
    try{
        const response = await axios.get('/api/mobile');
        return response.data;
    }catch(error) {
        return [];
    }
    
}

export async function createMobileData(data) {
    const response = await axios.post(`/api/mobile`, data);
    return response.data;
}