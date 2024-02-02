import random

def calcular_probabilidad(num_canicas):
    # Definir una probabilidad base
    probabilidad_base = 0.6
    
    # Ajustar la probabilidad según la cantidad total de canicas
    if num_canicas <= 10:
        probabilidad = probabilidad_base
    elif num_canicas <= 20:
        probabilidad = probabilidad_base * 0.8
    else:
        probabilidad = probabilidad_base * 0.6
    
    return probabilidad

def jugar_canicas():
    while True:
        try:
            num_canicas = int(input("¿Cuántas canicas quieres tener? "))
            if num_canicas <= 0:
                print("Por favor ingresa un número válido de canicas.")
                continue
        except ValueError:
            print("Por favor ingresa un número válido de canicas.")
            continue

        canicas = []
        puntos = 0

        colores_elegidos = []

        while num_canicas > 0:
            color = input("¿De qué color quieres la canica? ").capitalize()
            if color in colores_elegidos:
                print("Ya elegiste ese color anteriormente.")
                continue
            
            colores_elegidos.append(color)
            
            while True:
                try:
                    cantidad = int(input(f"Cuantas canicas de color {color} quieres? "))
                    if cantidad < 0:
                        print("Por favor ingresa un número válido de canicas.")
                    elif cantidad > num_canicas:
                        print(f"La cantidad especificada excede el número total de canicas restantes ({num_canicas}).")
                    else:
                        canicas.extend([color] * cantidad)
                        num_canicas -= cantidad
                        break
                except ValueError:
                    print("Por favor ingresa un número válido.")

        print("¡Comienza el juego!")

        while True:
            nuevo_color = input("¿De qué color quieres tu canica? (Escribe 'salir' para terminar) ").capitalize()
            if nuevo_color == 'Salir':
                break

            if not canicas:
                print("No tienes más canicas para jugar.")
                continue

            color_elegido = canicas[0]
            canicas.pop(0)

            probabilidad = calcular_probabilidad(len(canicas))
            if random.random() < probabilidad:
                if color_elegido == nuevo_color:
                    print("¡Has acertado!")
                    puntos += 1
                else:
                    print("No has acertado.")
                    puntos -= 1
                
                print(f"Tus puntos: {puntos}")
            else:
                print("No has acertado.")
                puntos -= 1
            
        print("¡Gracias por jugar!")

        jugar_nuevamente = input("¿Quieres jugar de nuevo? (s/n): ")
        if jugar_nuevamente.lower() != 's':
            break

jugar_canicas()
