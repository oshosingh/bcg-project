from flask import Blueprint
from services.CarSalesService import CarSalesService

CarSalesController = Blueprint('CarSalesController', __name__)

@CarSalesController.route('/cars/test')
def test():
    return 'cars test controller'

@CarSalesController.route('/get/all/sales')
def getAllSales():
    carSalesService = CarSalesService()
    return carSalesService.getAllSales()

@CarSalesController.route('/get/sales/by/<customerId>')
def getSalesBySaleId(customerId):
    carSalesService = CarSalesService()
    return carSalesService.getSalesById(customerId)
