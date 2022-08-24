from flask import Flask, Blueprint
from flask_cors import CORS, cross_origin
from controllers.CarSalesController import CarSalesController

app = Flask(__name__)
cors = CORS(app)

app.register_blueprint(CarSalesController)

@app.route('/', methods=['GET'])
def health():
    return 'healthy'

app.run(host="0.0.0.0", port=6000)