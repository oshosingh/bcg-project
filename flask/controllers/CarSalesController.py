from flask import Blueprint
from services.CarSalesService import CarSalesService
from flask_cors import cross_origin

CarSalesController = Blueprint('CarSalesController', __name__)

@CarSalesController.route('/cars/test')
def test():
    return 'cars test controller'

@CarSalesController.route('/get/all/sales')
@cross_origin(origin='*')
def getAllSales():
    carSalesService = CarSalesService()
    return carSalesService.getAllSales()

@CarSalesController.route('/get/sales/by/<salesOrCustomerId>')
def getSalesBySaleId(salesOrCustomerId):
    carSalesService = CarSalesService()
    return carSalesService.getSalesById(salesOrCustomerId)
