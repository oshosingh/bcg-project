from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

class Dbcon:
    def __init__(self,connectionUrl):
        self.connectionUrl = connectionurl 
    
    def getDBSession(self):
        engine = create_engine(self.connectionUrl, echo=False)
        Session = sessionmaker(bind=engine)
        session = Session()
        return session



