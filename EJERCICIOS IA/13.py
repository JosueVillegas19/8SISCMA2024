import numpy as np
import matplotlib.pyplot as plt

rg = np.random.default_rng(2)
aleatorio = rg.random(1000)
plt.hist(aleatorio, bins = 100)

plt.show()
print(aleatorio)
