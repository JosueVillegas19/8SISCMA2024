#Ejercicio1
import matplotlib.pyplot as plt

a=[3, 4, 5, 6]
b=[5, 6, 3, 4]

plt.plot(a,b)
plt.show()

#Ejercicio2

x1=[3, 4, 5, 6]
y1=[5, 6, 3, 4]
x2=[2, 5, 8]
y2=[3, 4, 3]

plt.plot(x1, y1)
plt.plot(x2, y2)
plt.show()

#Ejercicio3

x1=[3, 4, 5, 6]
y1=[5, 6, 3, 4]
x2=[2, 5, 8]
y2=[3, 4, 3]

plt.plot(x1, y1, label = "Linea1", linewidth = 4, color = "blue")
plt.plot(x2, y2, label = "Linea2", linewidth = 2, color = "green")

plt.title("Diagrama de lineas")
plt.xlabel('Eje X')
plt.ylabel('Eje Y')
plt.legend()
plt.grid()
plt.show()

