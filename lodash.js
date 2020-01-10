var _ = require('lodash');
var personas = [{
        nombre: "pepe",
        edad: 20
    },

    {
        nombre: "ana",
        edad: 30
    }, {
        nombre: "pedro",
        edad: 40
    }, {
        nombre: "gema",
        edad: 50
    }, {
        nombre: "andres",
        edad: 50
    }

];

var filtro = _.filter(personas, function(persona) {

    return persona.edad === 50;

});