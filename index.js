const example = 'Hello, World!';
console.log(example);

const saludar = example;
console.log(saludar);

const nombreCompleto = 'hola mundo';
console.log(nombreCompleto);
const nombreCompleto2 = 'hola mundo';
console.log(nombreCompleto2);

const nombreCompleto3 = 'hola mundo';
console.log(nombreCompleto3);

// Función para sumar dos numeros
function sum(numero1, numero2) {
  return numero1 + numero2;
}

console.log(sum(5, 10));

const nombres = [
  'mel',
  'antonio',
  'juan',
  'pedro',
  'juan',
  'maria',
  'carla',
  'pedro',
  'teresa',
  'marcos',
];
console.log(nombres);

const apellidos = ['flores', 'duran', 'cueva'];
console.log(apellidos);

const nombresCompletos = nombres.map((nombre, index) => {
  const apellido = apellidos[index % apellidos.length];
  return `${nombre} ${apellido}`;
});
console.log(nombresCompletos);
