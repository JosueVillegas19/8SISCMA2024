import nltk
import random
from nltk.chat.util import Chat, reflections

# Define los patrones y respuestas del chatbot
pares = [
    ['(Hola|Hola!|Hola)', ['¡Hola!', 'Hola, ¿en qué puedo ayudarte?']],
    ['(¿Cómo estás?|¿Qué tal?|¿Cómo va todo?)', ['Estoy bien, ¿y tú?', 'Todo bien, gracias por preguntar.']],
    ['(Adiós|Chao|Hasta luego)', ['¡Hasta luego!', 'Adiós, que tengas un buen día.']],
    ['(.*)', ['Lo siento, no entendí eso. ¿Puedes repetirlo?']],  # Respuesta por defecto
]

# Crea un objeto Chat
chatbot = Chat(pares, reflections)

# Función para iniciar el chat
def iniciar_chat():
    print("¡Hola! Soy un chatbot. Puedes preguntarme cualquier cosa. Para salir, escribe 'Adiós'.")
    while True:
        mensaje = input("Tú: ")
        if mensaje.lower() == 'adiós':
            print("Chatbot: ¡Hasta luego!")
            break
        else:
            respuesta = chatbot.respond(mensaje)
            print("Chatbot:", respuesta)

# Llama a la función para iniciar el chat
if __name__ == "__main__":
    iniciar_chat()
