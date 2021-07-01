const nombre = 'Miguel';
const apellido = 'Romero';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;


export function getSaludo(nombre = 'Carlos') {
    return 'Hola ' + nombre;
}