import axios from 'axios'

const restUrl = 'http://52.205.147.56:8080'

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

export const getSalesDataBySaleId = async (saleId) => {
    try{
        const res = await axios.get(`${restUrl}/get/sales/by/${saleId}`)
        return res.data
    }
    catch(error) {
        return -1
    }
}

export const addSalesRecord = async (salesData) => {
    try{
        const res = await axios.post(`${restUrl}/add/sales`, salesData)
        return res.data
    }
    catch(error) {
        return -1
    }
}

export const updateSalesRecord = async (salesData) => {
    try{
        const res = await axios.put(`${restUrl}/update/sales`)
        return 1
    }
    catch(error) {
        return -1
    }
}