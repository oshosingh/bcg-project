import React, { useEffect, useState } from 'react'
import './form.css'
import inputFieldToJsonKey from '../../utils'

function Form(props) {

    let formInput = {
        'salesId': null,
        'dateOfPurchase': null,
        'customerId': null,
        'fuel': null,
        'premium': null,
        'vehicleSegment': 'abcd',
        'sellingPrice': null,
        'powerSteering': null,
        'airbags': null,
        'sunroof': null,
        'mattFinish': null,
        'musicSystem': null,
        'customerGender': null,
        'customerIncomeGroup': null,
        'customerRegion': null,
        'customerMaritalStatus': null
    }

    const [formInputValue, setFormInputValue] = useState(formInput)

    useEffect(() => {
        console.log('rendering form')
    }, [])

    const formFields = [
                            'Sales Id', 'Date of Purchase', 'Customer Id', 'Fuel', 'Premium', 
                            'Vehcile Segement', 'Selling Price', 'Power Steering', 'Airbags', 'Sunroof',
                            'Matt Finish', 'Music System', 'Customer Gender', 'Customer Income Group', 'Customer Region',
                            'Customer Marital Status' 
                     ]
    
    const [saleId, setSaleId] = useState(0)
                     
    const addOrEdit = props.action === 'add' ? 'add' : 'edit'

    const handleInput = (event) => {
        setSaleId(event.target.value)
        // console.log(event.target.value)
    }

    const handleChange = (element, event) => {
        const value = event.target.value
        const fieldKey = inputFieldToJsonKey(element)
        console.log(fieldKey)

        setFormInputValue(prevState => ({
            ...prevState,
            fieldKey: value
        }))
    }

    const formData = (element, index) => {

        const disabled = (element === 'Date of Purchase' && addOrEdit === 'edit') ? true : false
        const inputFieldValue = formInputValue[inputFieldToJsonKey(element)] === null ? 'hello' : formInputValue[inputFieldToJsonKey(element)]

        return (
                <div className='form-field' key={index}>
                    <div className='form-field-label'> {element} </div>
                    <div className='form-field-input'>
                        { disabled !== true ? <input type='text' value={inputFieldValue} onChange = {(e) => handleChange(element,e)} /> 
                                            : <input type='text' value={inputFieldValue} onChange = {(e) => handleChange(element,e)} disabled/> }
                    </div>
                </div>
        )
    }

    const salesIdInput = () => {
        return (
            <div className='saleid-input'>
                <input type='text' onChange={handleInput} />
                <button className='get-sales-data-btn'> Get Data </button>
            </div>
        )
    }

    return (
        <div>
            { addOrEdit === 'add' ? <></> : salesIdInput() }
            <div className='form-parent'>
                {formFields.map((element, index) => {
                    return formData(element, index)
                })}
            </div>
            <div className='submit-btn'>
                { addOrEdit === 'add' ? <button>Submit Sales</button> : <button>Edit Sales</button> }
            </div>
        </div>
    )
}

export default Form
