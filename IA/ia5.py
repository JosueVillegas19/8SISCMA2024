repetir = True

while repetir:
    import tensorflow as tf
    import numpy as np

    # Definir el modelo de red neuronal para la longitud, altura y peso
    model1 = tf.keras.Sequential([
        tf.keras.layers.Dense(8, input_shape=(3,), activation='relu'),
        tf.keras.layers.Dense(1, activation='sigmoid')
    ])
    model1.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

    # Datos de entrenamiento para longitud, altura y peso
    X_train = np.array([[620, 250, 300], [350, 120, 50], [510, 180, 150]], dtype=np.float32)
    y_train = np.array([1, 0, 1], dtype=np.float32)
    model1.fit(X_train, y_train, epochs=50)
    print("-------------¿PEZ DORADO O TIBURON BLANCO?--------------")
    # Obtener datos del usuario
    longitud_cm = float(input("Ingrese la longitud del animal (en cm): "))
    altura_cm = float(input("Ingrese la altura del animal (en cm): "))
    peso_kg = float(input("Ingrese el peso del animal (en kilogramos): "))
    clasificacion_alimentacion = input("¿El animal es carnívoro o herbívoro?: ").lower()
    temperamento = input("Ingrese el temperamento del animal: ").lower()
    principal_alimentacion = input("Ingrese la principal alimentación del animal: ").lower()
    cantidad_dientes = float(input("¿Cuál es la cantidad de dientes del animal?: "))
    tamaño_branqueas = float(input("¿Cuál es el tamaño de las branqueas? (0 para pequeñas, 1 para grandes): "))
    cantidad_aletas_dorsales = float(input("¿Cuántas aletas dorsales tiene el animal?: "))

    # Verificar si coincide con las características de un pez dorado
    es_pez_dorado = False
    if (cantidad_aletas_dorsales == 1 and 0.1 <= peso_kg <= 1 and 20 <= longitud_cm <= 50 and 20 <= altura_cm <= 60 and cantidad_dientes == 0):
        es_pez_dorado = True

    # Verificar si coincide con las características de un tiburón blanco
    es_tiburon_blanco = False
    if (cantidad_aletas_dorsales == 2 and 680 <= peso_kg <= 1100 and 300 <= longitud_cm <= 500 and 500 <= altura_cm <= 700 and cantidad_dientes >= 2500):
        es_tiburon_blanco = True

    # Realizar predicciones
    if es_pez_dorado:
        print("Es un pez dorado.")
    elif es_tiburon_blanco:
        print("Es un tiburón blanco.")
    else:
        print("No se pudo determinar con certeza.")

    # Preguntar si desea repetir
    respuesta = input("¿Desea repetir la evaluación? (s/n): ").lower()
    if respuesta != 's':
        repetir = False