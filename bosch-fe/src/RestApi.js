import axios from 'axios'

const restUrl = 'https://6000-oshosingh-boschproject-xs1hbu6nh3w.ws-us62.gitpod.io/'

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