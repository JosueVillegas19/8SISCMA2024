#!/usr/bin/env python
from perceptron import Perceptron

# Datos de entrenamiento para las compuertas lógicas (A, B, C, D, S)
input_data_train = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 0, 1, 0],
]

# Creamos el perceptrón
pr = Perceptron(5, 0.1)  # Perceptrón con 5 entradas (A, B, C, D, 1 para sesgo)
weights = []  # Lista con los pesos
errors = []  # Lista con los errores

# Fase de entrenamiento
for _ in range(1000):
    # Vamos a entrenarlo varias veces sobre los mismos datos
    # para que los 'pesos' converjan
    for data_point in input_data_train:
        output = data_point[-1]
        inputs = data_point[0:-1] + [1]  # Agregamos 1 para sesgo
        weights.append(pr._w)
        err = pr.train(inputs, output)
        errors.append(err)

# Datos para probar el perceptrón después del entrenamiento
input_data_test = [
    [1, 1, 1, 0],
    [0, 1, 1, 0],
    [1, 0, 1, 1],
    [0, 0, 0, 0],
]

# Fase de prueba
print("Resultados de la prueba:")
for test_point in input_data_test:
    prediction = pr.predict(test_point + [1])  # Agregamos 1 para sesgo
    print(f"Entradas: {test_point}, Salidas: {prediction}")

# Fase de graficación
import imp

can_plot = True
try:
    imp.find_module('matplotlib')
except ImportError:
    can_plot = False

if not can_plot:
    print("No es posible graficar los resultados porque no tienes matplotlib")
else:
    import matplotlib.pyplot as plt

    plt.plot(errors)
    plt.show()
