import numpy as np

a = np.linspace(10, 20, 6).reshape(2, 3)
b = np.linspace(5, 25, 6).reshape(2, 3)
c = a + b
d = np.concatenate((a, b))
d.sort()

print(a)
print(b)
print(c)
print(d)
