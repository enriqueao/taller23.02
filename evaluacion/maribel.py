def contar_vocales(palabra):
    vocales = {'a', 'e', 'i', 'o', 'u'}
    contador_vocales = 0

    for letra in palabra:
        if letra.lower() in vocales:
            contador_vocales += 1

    return contador_vocales

palabra = input("Ingresa una palabra: ")
cantidad_vocales = contar_vocales(palabra)
print("La palabra", palabra, "contiene", cantidad_vocales, "vocales.")
