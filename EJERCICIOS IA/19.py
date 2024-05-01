import numpy as np
import matplotlib.pyplot as plt

rg = np.random.default_rng(2)
estadisticas_2d = rg.integers(20, size=(5,4))
array1= estadisticas_2d.min(axis=0)
array2= estadisticas_2d.max(axis=1)

valores = estadisticas_2d[estadisticas_2d<12]

print("\n", estadisticas_2d)
print("\n", array1)
print("\n", array2)
print("\n", valores)