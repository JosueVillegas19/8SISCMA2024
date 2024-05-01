import numpy as np

rg = np.random.default_rng(2)
enteros_2d = rg.integers(0, 20, size=(8, 5))  
cuarto_valor_segundo_array = enteros_2d[1, 3]  

print("Array de enteros 2D:")
print(enteros_2d)
print("Cuarto valor en el segundo array:", cuarto_valor_segundo_array)
