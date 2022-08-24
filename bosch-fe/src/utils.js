const inputFieldToJsonKey = (fieldName) => {
    const map = {
        'Sales Id': 'salesId',
        'Date of Purchase': 'dateOfPurchase',
        'Customer Id': 'customerId',
        'Fuel': 'fuel',
        'Premium': 'premium',
        'Vehcile Segement': 'vehicleSegment',
        'Selling Price': 'sellingPrice',
        'Power Steering': 'powerSteering',
        'Airbags': 'airbags',
        'Sunroof': 'sunroof',
        'Matt Finish': 'mattFinish',
        'Music System': 'musicSystem',
        'Customer Gender': 'customerGender',
        'Customer Income Group': 'customerIncomeGroup',
        'Customer Region': 'customerRegion',
        'Customer Marital Status': 'customerMaritalStatus'
    }

    return map[fieldName]
}

export default inputFieldToJsonKey