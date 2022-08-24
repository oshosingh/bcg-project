import axios from 'axios'

const restUrl = 'http://http://34.201.161.46:8080'

export const getAllSales = async () => {
    try{
        const res = await axios.get(`${restUrl}/get/all/sales`)
        return res
    }
    catch(error) {
        return []
    }
    
}

export const searchBySalesOrCustomerId = async (salesOrCustomerId) => {
    try{
        const res = await axios.get(`${restUrl}/get/sales/by/salesOrCustomerId`)
        return res
    }
    catch(error) {
        return []
    }
}