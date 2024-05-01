import numpy as np
import matplotlib.pyplot as plt

rg = np.random.default_rng(2)
normal = rg.normal(10, 5, 100000)

plt.hist(normal, bins=1000)
plt.show()
print(normal)