# README #

1) Escribe un script que a partir de un array de ints devuelva un array de strings aplicando
las siguientes reglas:
• Devuelve Fizz si el número es divisible por 3 o si incluye un 3 en el número.
• Devuelve Buzz si el número es divisible por 5 o si incluye un 5 en el número.
• Devuelve FizzBuzz si el número es divisible por 3 y por 5.

2) Diseñar una API REST para manejo de Stock, que incluya lista, alta y baja de stock
para un producto (no es necesaria la API para administrar productos).
3) Crear un componente en React que muestre la lista de stock propuesta en el ejercicio
anterior.
4) Algunas preguntas:
- ¿De qué forma guardarías los archivos que un usuario suba por la aplicación al servidor y
porque?
- ¿Implementaría un cache del lado del cliente? ¿Porque?
- ¿Cuál es la diferencia entre SOAP y REST?


### Ej 1  ###

* es el archivo llamado ejercicio1.js

### Ej 2 ###
utiliza Express , mongodb 
* correr desde ejercicio2/ en una consola con nodejs instalado el siguiente comando 
```
	npm install 
```
* levantar el servidor y la api rest .
```
	node app.js
```
* Alta 
	con cualquier cliente rest como por ejemplo POSTMAN mandar por post
```
{
  "name": "producto1",
  "description": "tablet 6 pulgadas .. etc",
  "category": "tablets",
  "price":10 
}
```

* LISTA
	Entrar al navegador y darle a la direccion 
http://localhost:3000/products/list
* Delete 
	Entrar al navegador 
http://localhost:3000/product/:id
* tambien estan las funciones UPDATE y findbyID

### Ej 3 ###

* se encuentra desarrollado en ejercicio3.js


### Ej4 ###
* ¿De qué forma guardarías los archivos que un usuario suba por la aplicación al servidor y
porque?
	guardaria en un servidor que pueda expandirse su capacidad de almacenamiento a medida que vaya creciendo ya 
	por ejemplo en cloud computing se puede contar con una nube hibrida , que tenga parte privada y publica y se pueda tener un mejor control de lo que se maneja.
	Ademas al ser hibrida se tiene una inversion inicial mas economica que con una privada y se puede contar con Saas, PaaS o IaaS

* ¿Implementaría un cache del lado del cliente? ¿Porque?
	Implementaria del lado del cliente si es que no necesito actualizar información de manera inmediata.
* ¿Cuál es la diferencia entre SOAP y REST?
	Soap es un protocolo de comunicacion , se intercambian mensajes a travez de especificaciones en XML
	soap necesita un archivo wsdl donde se definen las interfaces entre el servicio y el cliente
	Rest utiliza una interfaz estandarizada como lo es HTTP. Un cliente rest simplemente con tener un endpoint puede enviar y recibir informacion a traves de los verbos HTTP (GET, POST, PUT y DELETE)

	
