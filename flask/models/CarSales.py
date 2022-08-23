from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class CarSales(Base):
    def __init__(self):
        __tablename__ = car_sales

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
