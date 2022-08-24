import axios from 'axios'

const restUrl = 'http://172.17.0.3:6000'

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