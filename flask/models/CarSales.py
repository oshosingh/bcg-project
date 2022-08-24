from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Date

Base = declarative_base()

class CarSales(Base):
    __tablename__ = 'car_sales'
    sales_id = Column(Integer, primary_key=True) 
    date_of_purchase = Column(Date) 
    customer_id = Column(Integer)
    fuel = Column(String(50))
    premium = Column(Integer)
    vehicle_segment = Column(String(20))
    sellingprice = Column(Integer)
    power_steering = Column(Integer)
    airbags = Column(Integer)
    sunroof = Column(Integer)
    matt_finish = Column(Integer)
    music_system = Column(Integer)
    customer_gender = Column(String(10)) 
    customer_income_group = Column(String(10))
    customer_region = Column(String(10))
    customer_marital_status = Column(Integer)

    def __init__(self, salesId, dateOfPurchae, customerId, fuel, premium, vehicleSegment, sellingPrice, powerSteering,
                    airbags, sunroof, mattFinish, musicSystem, customerGender, customerIncomeGroup, customerRegion, 
                        customerMaritalStatus):
        self.sales_id = salesId
        self.date_of_purchase = dateOfPurchae
        self.customer_id = customerId
        self.fuel = fuel
        self.premium = premium
        self.vehicle_segment = vehicleSegment
        self.sellingprice = sellingPrice
        self.power_steering = powerSteering
        self.airbags = airbags
        self.sunroof = sunroof
        self.matt_finish = mattFinish
        self.music_system = musicSystem
        self.customer_gender = customerGender
        self.customer_income_group  =customerIncomeGroup
        self.customer_region = customerRegion
        self.customer_marital_status = customerMaritalStatus

    def jsonify(self):
        dict = {}
        dict['salesId'] = self.sales_id
        dict['dateOfPurchae'] = self.date_of_purchase
        dict['customerId'] = self.customer_id
        dict['fuel'] = self.fuel
        dict['premium'] = self.premium 
        dict['vehicleSegment'] = self.vehicle_segment
        dict['sellingPrice'] = self.sellingprice
        dict['powerSteering'] = self.power_steering
        dict['airbags'] = self.airbags
        dict['sunroof'] = self.sunroof
        dict['mattFinish'] = self.matt_finish
        dict['musicSystem'] = self.music_system
        dict['customerGender'] = self.customer_gender
        dict['customerIncomeGroup'] = self.customer_income_group
        dict['customerRegion'] = self.customer_region
        dict['customer_martial_status'] = self.customer_marital_status

        return dict

