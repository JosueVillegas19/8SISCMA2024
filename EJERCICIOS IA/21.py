import numpy as np

rg = np.random.default_rng(2)
enteros = rg.integers(0, 20, size=10)  
a = enteros [:6]  
b= enteros [:6:2]
c= enteros [::2]
print("Array de enteros completo:", enteros)
print("Primeros 6 valores seleccionados:", a)
print(b)
print(c)