import numpy as np
import matplotlib.pyplot as plt

rg = np.random.default_rng(2)
enteros = rg.integers(20, size=2000)
plt.hist(enteros)
plt.show()
