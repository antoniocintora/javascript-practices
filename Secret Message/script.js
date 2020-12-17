let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// Borra el ultimo array
secretMessage.pop();
// Añade como ultimos array
secretMessage.push('to', 'Program');
// Muestra el indice del array (7)
secretMessage.indexOf('easily');
// Cambia el valor del array
secretMessage[7] = 'right';
// Borra el primer valor del array
secretMessage.shift();
// Añade un primer array
secretMessage.unshift('Programming');
// Elimina los elementos no deseados y sustituye por la palabra deseada
secretMessage.splice(6,5, 'know');
// Logea el mensaje utilizando espacio entre los arrays.
console.log(secretMessage.join(' '));