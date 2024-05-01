import matplotlib.pyplot as plt
x1=[3, 4, 5, 6]
y1=[5, 6, 3, 4]
x2=[2, 5, 8]
y2=[3, 4, 3]

plt.bar(x1, y1, label = "Linea1", linewidth = 4, color = "blue")
plt.bar(x2, y2, label = "Linea2", linewidth = 2, color = "green")

plt.title("Grafica de barras")
plt.xlabel('Eje X')
plt.ylabel('Eje Y')
plt.legend()
plt.grid()
plt.show()



