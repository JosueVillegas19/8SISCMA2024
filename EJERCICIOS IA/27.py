import pandas as pd

data = {'A': [1, 2, 3, 4, 5],
        'B': [6, 7, 8, 9, 10],
        'C': [11, 12, 13, 14, 15]}

df = pd.DataFrame(data)

data1 = df.iloc[:, 0]
print("Primera columna:")
print(data1)

data2 = df.iloc[:, [0, 1]]
print("\nDos columnas:")
print(data2)

data3 = df.iloc[0, -1]
print("\nValor primera fila última columna:")
print(data3)

data4 = df.iloc[0, :]
print("\nValores primera fila:")
print(data4)

