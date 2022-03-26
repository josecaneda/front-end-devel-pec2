a. Observa que se han creado funciones handle en el fichero controlador (`todo.controller.js`), las cuales son pasadas como parámetro. Esto es debido al
problema con el cambio de contexto (`this`) que existe en JavaScript. Ahora mismo si no tienes muy claro que está sucediendo, revisa qué hacen las “fat-arrow” de ES6 sobre
el objeto this, y prueba a cambiar el código para comprender qué está sucediendo cuando se modifica la siguiente línea:  
`this.view.bindAddTodo(this.handleAddTodo);`  
Por esta:  
`this.view.bindAddTodo(this.service.addTodo);`  
Responde, en un documento texto en el directorio de entrega a la siguiente pregunta:

**¿Por qué es el valor de this es undefined?**

El método `bindAddTodo` va a ser invocado desde la vista. En ese contexto o scope el `this` de `this.service.addTodo` representa a la vista. Y en la vista `service.addTodo` no existe. En cambio `this.handleAddTodo` está definido como una función flecha... y en las funciones flecha `this` siempre representa el objeto que definió la función flecha. Por eso, el `this` de `this.handleAddTodo` represente al controlador en el que sí está definida la función `handleAddTodo`.
