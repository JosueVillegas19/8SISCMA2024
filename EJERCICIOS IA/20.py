import numpy as np

rg = np.random.default_rng(2)
np1=rg.integers(20, size=(3,3))
np2=rg.integers(20, size=(3,3))

arr=np.vstack((np1,np2))
arr1=np.hstack((np1, np2))

print(np1,"\n\n", np2)
print("\n", arr)
print("\n", arr1)

