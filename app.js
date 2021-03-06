const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//let base = '9';
//console.log(process.argv);

//let argv2 = process.argv;
//console.log(argv.base);


//let parametro = argv[2];
//let base = parametro.split('=')[1];