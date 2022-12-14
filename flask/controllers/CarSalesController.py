from flask import Blueprint, request
from services.CarSalesService import CarSalesService
from flask_cors import cross_origin

CarSalesController = Blueprint('CarSalesController', __name__)

@CarSalesController.route('/cars/test')
def test():
    return 'cars test controller'

@CarSalesController.route('/get/all/sales')
def getAllSales():
    carSalesService = CarSalesService()
    return carSalesService.getAllSales()

@CarSalesController.route('/search/sales/by/<salesOrCustomerId>')
def getSalesBySalesOrCustomerId(salesOrCustomerId):
    carSalesService = CarSalesService()
    return carSalesService.getSalesBySalesOrCustomerId(salesOrCustomerId)

@CarSalesController.route('/get/sales/by/<salesId>')
def getSalesBySaleId(salesId):
    carSalesService = CarSalesService()
    return carSalesService.getSalesBySaleId(salesId)

@CarSalesController.route('/add/sales', methods=['POST'])
def addSales():
    salesData = request.json 
    carSalesService = CarSalesService()
    return carSalesService.saveSalesData(salesData)

@CarSalesController.route('/update/sales', methods=['PUT'])
def updateSales():
    carSalesService = CarSalesService()
    updatedSalesData = request.json 
    return carSalesService.updateSalesData(updatedSalesData)
