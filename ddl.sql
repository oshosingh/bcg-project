create table car_sales (
    sales_id INTEGER PRIMARY KEY,
    date_of_purchase DATE NOT NULL,
    customer_id INTEGER NOT NULL,
    fuel VARCHAR(50),
    premium INTEGER NOT NULL,
    vehicle_segment VARCHAR(20),
    sellingprice INTEGER NOT NULL,
    power_steering INTEGER NOT NULL,
    airbags INTEGER NOT NULL,
    sunroof INTEGER NOT NULL,
    matt_finish INTEGER NOT NULL,
    music_system INTEGER NOT NULL,
    customer_gender VARCHAR(10), 
    customer_income_group VARCHAR(50) NOT NULL,
    customer_region VARCHAR(10),
    customer_marital_status INTEGER NOT NULL
)
