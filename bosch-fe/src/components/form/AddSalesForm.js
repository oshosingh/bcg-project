import React, { useEffect, useState } from 'react'
import './form.css'
import inputFieldToJsonKey from '../../utils'
import {getSalesDataBySaleId, addSalesRecord, updateSalesRecord} from '../../RestApi' 
import Spinner from 'react-bootstrap/Spinner';

function Form(props) {

    let formInput = {
        'salesId': null,
        'dateOfPurchase': new Date(),
        'customerId': null,
        'fuel': null,
        'premium': null,
        'vehicleSegment': null,
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
    const [buttonStateEnabled, setButtonStateEnabled] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(-1)

    useEffect(() => {
        var flag = true
        for(var key in formInputValue) {
            if(formInputValue[key] === null || formInputValue[key] === '') {
                flag = false
            }
        }

        if(flag) {
            setButtonStateEnabled(true)
        }
        else {
            setButtonStateEnabled(false)
        }

    }, [formInputValue])

    const formFields = [
                            'Sales Id', 'Date of Purchase', 'Customer Id', 'Fuel', 'Premium', 
                            'Vehcile Segement', 'Selling Price', 'Power Steering', 'Airbags', 'Sunroof',
                            'Matt Finish', 'Music System', 'Customer Gender', 'Customer Income Group', 'Customer Region',
                            'Customer Marital Status' 
                     ]
    
    const [saleId, setSaleId] = useState(0)
                     
    const addOrEdit = props.action === 'add' ? 'add' : 'edit'

    const handleChange = (element, event) => {
        const value = event.target.value
        const fieldKey = inputFieldToJsonKey(element)

        setFormInputValue(prevState => ({
            ...prevState,
            [fieldKey]: value
        }))
    }

    const salesIdInput = () => {
        return (
            <div className='saleid-input'>
                <input type='text' onChange={handleInput} />
                <button className='get-sales-data-btn' onClick={fetchSalesData}> Get Data </button>
            </div>
        )
    }

    const handleInput = (event) => {
        setSubmitStatus(-1)
        setSaleId(event.target.value)
    }

    const fetchSalesData = () => {
        getSalesDataBySaleId(saleId).then(data => {
            if(data !== -1) {
                setFormInputValue(data)
            }
        })
    }

    const submitSales = () => {
        setButtonStateEnabled(false)
        setSubmitStatus(0)

        addSalesRecord(formInputValue).then(data => {
            if(data !== -1) {
                setSubmitStatus(1)
            }
            else {
                setSubmitStatus(-1)
            }
            setButtonStateEnabled(true)
        })
    }
    
    const editSales = () => {
        setButtonStateEnabled(false)
        setSubmitStatus(0)

        updateSalesRecord(formInputValue).then(data => {
            if(data !== -1) {
                setSubmitStatus(1)
            }
            else {
                setSubmitStatus(-1)
            }
            setButtonStateEnabled(true)
        })
    }

    const formData = (element, index) => {

        const disabled = (element === 'Date of Purchase' && addOrEdit === 'edit') ? true : false
        const inputFieldValue = formInputValue[inputFieldToJsonKey(element)] === null ? '' : formInputValue[inputFieldToJsonKey(element)]

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

    const getButtonComponent = (buttonType) => {
        if(buttonStateEnabled) {
            return (
                <button onClick={buttonType === 'Submit Sales' ? submitSales : editSales}> {buttonType}</button>
            )
            
        }
        else { 
            return (
                <button onClick={buttonType === 'Submit Sales' ? submitSales : editSales} disabled> {buttonType}</button>
            )          
        }
    }

    return (
        <div>
            { addOrEdit === 'add' ? <></> : salesIdInput() }
            <div className='form-parent'>
                {formFields.map((element, index) => {
                    return formData(element, index)
                })}
            </div>
            <div className='submit-btn-center'>
                { addOrEdit === 'add' ?  getButtonComponent('Submit Sales') :
                                         getButtonComponent('Edit Sales') }
            </div>
            <div className='submit-btn-center'>
                {submitStatus === 1 ? 'record sbumitted' : submitStatus === -1 ? <></> : <Spinner animation="border" className='spinner'/>  }
            </div>
        </div>
    )
}

export default Form
