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
    
    def getSalesById(self, salesOrCustomerId):
        session = Dbcon().getDBSession()
        carSalesQueryByCustomerId = session.query(CarSales).filter_by(customer_id = salesOrCustomerId)
        carSalesQueryBySalesId = session.query(CarSales).filter_by(sales_id = salesOrCustomerId)

        carSalesListBySaleId = []

        for carSales in carSalesQueryByCustomerId:
            carSalesListBySaleId.append(carSales.jsonify())

        for carSales in carSalesQueryBySalesId:
            carSalesListBySaleId.append(carSales.jsonify())
        

        return carSalesListBySaleId
        

