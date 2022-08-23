from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import os

class Dbcon:
    def __init__(self):
        self.connectionUrl = os.environ.get('DB_CONNECTION_URL')
    
    def getDBSession(self):
        engine = create_engine(self.connectionUrl, echo=False)
        Session = sessionmaker(bind=engine)
        session = Session()
        return session
    
    def test(self):
        return 'hello'


