import numpy as np

a = np.linspace (10, 20, 6)
b = np.linspace (5, 25, 6)
c = a + b
d = np.concatenate((a, b))
e = d.sort()

print(a)
print(b)
print(c)
print(d)
print(e)

