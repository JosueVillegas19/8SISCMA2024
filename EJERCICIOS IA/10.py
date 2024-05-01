import numpy as np
from numpy import pi
import matplotlib.pyplot as plt

rad = np.linspace(0, 2 * pi, 100)

sen = np.sin(rad)
cos = np.cos(rad)
plt.plot(sen,cos)
plt.plot(rad, sen)
plt.plot(rad, cos)

plt.show()
print(rad)
