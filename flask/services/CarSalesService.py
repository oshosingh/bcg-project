from database.Dbcon import Dbcon
from models.CarSales import CarSales
from types import SimpleNamespace
import json

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
    
    def getSalesBySalesOrCustomerId(self, salesOrCustomerId):
        session = Dbcon().getDBSession()
        carSalesQueryByCustomerId = session.query(CarSales).filter_by(customer_id = salesOrCustomerId)
        carSalesQueryBySalesId = session.query(CarSales).filter_by(sales_id = salesOrCustomerId)

        carSalesListBySaleId = []

        for carSales in carSalesQueryByCustomerId:
            carSalesListBySaleId.append(carSales.jsonify())

        for carSales in carSalesQueryBySalesId:
            carSalesListBySaleId.append(carSales.jsonify())
        

        return carSalesListBySaleId
    
    def getSalesBySalesOrCustomerId(self, salesId):
        session = Dbcon().getDBSession()
        carSalesQueryBySalesId = session.query(CarSales).filter_by(sales_id = salesId)

        for carSales in carSalesQueryBySalesId:
            return carSales.jsonify()
    
    def saveSalesData(salesData):
        session = Dbcon().getDBSession()
        carSalesObject = CarSales(**salesData)
        session.add(carSalesObject)
        session.commit()
        

    

        

