import numpy as np
import matplotlib.pyplot as plt

lista_2d = [[2, 3, 4],
            [3, 4, 5],
            [3, 4, 5],
            [3, 4, 5]]

arr = np.array(lista_2d)

forma = arr.shape
ndim = arr.ndim
dtype = arr.dtype
size = arr.size
ndarray = np.array(lista_2d, dtype=np.int16)

print("Shape:", forma)
print("Number of dimensions:", ndim)
print("Data type:", dtype)
print("Size:", size)
print("Data type 2:", ndarray)