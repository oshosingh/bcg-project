from flask import Flask, Blueprint
from controllers.CarSalesController import CarSalesController

app = Flask(__name__)

app.register_blueprint(CarSalesController)

@app.route('/', methods=['GET'])
def health():
    return 'healthy'

app.run(host="0.0.0.0", port=6000)