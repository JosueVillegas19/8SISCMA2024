import numpy as np
import matplotlib.pyplot as plt
rg = np.random.default_rng(2)
estadisticos=rg.integers(20,size=2000)
array= estadisticos.min()
array1= estadisticos.max()
array2=estadisticos.mean()
array3=estadisticos.std()
array4= estadisticos.sum()
print(estadisticos)
print(array)
print(array1)
print(array2)
print(array3)
print(array4)




