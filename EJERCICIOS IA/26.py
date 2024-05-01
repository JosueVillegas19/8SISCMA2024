import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

rng = np.random.default_rng(100)  
data = rng.integers(100, size=(50, 3)) 
df = pd.DataFrame(data)

print("Shape of DataFrame: ", df.shape)
print("Number of rows: ", len(df.index))
print("DataFrame summary:\n", df.describe())

print("Generated data: ")
print(data)
print("DataFrame: ")
print(df)

print ("Mean: ", df.mean)
print ("Count: ", df.count)
print ("Max: ", df.max)
print ("Min: ", df.min)
print ("Median: ", df.median)
print ("Std: ", df.std)



