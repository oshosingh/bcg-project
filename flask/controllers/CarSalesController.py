from flask import Blueprint

CarSalesController = Blueprint('CarSalesController', __name__)

@CarSalesController.route('/cars/test')
def test():
    return 'cars test controller'
    