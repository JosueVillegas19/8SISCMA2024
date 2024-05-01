import numpy as np

array = np.random.rand(10, 27, 36)
mean_value = np.mean(array)
sum_value = np.sum(array)
max_value = np.max(array)
min_value = np.min(array)
std_deviation = np.std(array)

print("Mean:", mean_value)
print("Sum:", sum_value)
print("Maximum:", max_value)
print("Minimum:", min_value)
print("Deviation:", std_deviation)

print("Shape:", array.shape)
print("Tamaño", array.size)
print("Dimension:", array.ndim)
