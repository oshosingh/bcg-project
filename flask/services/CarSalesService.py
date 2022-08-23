from database.Dbcon import Dbcon
from models.CarSales import CarSales

class CarSalesService:
    def __init__(self):
        pass 
    
    def getAllSales(self):
        session = Dbcon().getDBSession()
        carSalesQuery = session.query(CarSales)
        carSalesList = []
        
        for carSales in carSalesQuery:
            carSalesList.append(carSales.jsonify())

        return carSalesList
    
    def getSalesById(self, customerId):
        session = Dbcon().getDBSession()
        carSalesQuery = session.query(CarSales).filter_by(customer_id = customerId)
        carSalesListBySaleId = []

        for carSales in carSalesQuery:
            carSalesListBySaleId.append(carSales.jsonify())

        return carSalesListBySaleId
        

