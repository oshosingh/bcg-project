import pandas as pd
df = pd.read_csv('sales.csv')

cols = []

for c in df.columns:
    c = c.lower()
    c = c.replace(' ', '_')
    cols.append(c)

print(cols) # Columns list for postgres table

indexes = [1, 3, 5, 12, 13, 14] # indexes where value is of type string in csv

lis = []

for index, row in df.iterrows():
    row_data = []

    for col in range(len(row)):
        if col in indexes:
            row_data.append(str(row[col]))
        else:
            row_data.append(row[col])
    
    lis.append(row_data)

with open('initdb.sql', 'w') as f:
    for line in lis:
        f.write(f"{line}\n")   # write to a sql file


