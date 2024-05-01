import numpy as np
import matplotlib.pyplot as plt

rg = np.random.default_rng()
random_numbers = rg.choice(26, size=10, replace=False)

print(random_numbers)
plt.hist(random_numbers)
plt.show()