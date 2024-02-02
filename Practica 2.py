import random

# Diccionario de entradas y respuestas
diccionario_respuestas = {
    "hello": ["¿Qué tranza?", "¿Qué hubolas?", "¿Qué transita por tus venas?"],
    "hi": ["¿Qué tranza?", "¿Qué hubolas?"],
    "how old are you?": "Ya estás más pa'ya que pa'ca",
    "how are you?": ["¿Qué tranza?", "¿Qué hubolas?", "¿Qué pedo?"],
    "welcome": "¡Pásale a lo barrido!",
    "what?": ["¿Qué hubolas?", "¿Qué transita por tus venas?", "¿Qué pedo?"]
}

def obtener_respuesta(entrada):
    entrada = entrada.lower() 
    if entrada in diccionario_respuestas:
        if isinstance(diccionario_respuestas[entrada], list):
            return random.choice(diccionario_respuestas[entrada])
        else:
            return diccionario_respuestas[entrada]
    else:
        return "No entendí lo que dijiste"

while True:
    entrada = input("Introduce una palabra: ")
    print(obtener_respuesta(entrada))

    continuar = input("¿Deseas introducir más palabras? (s/n): ").lower()
    if continuar != "s":
        break
