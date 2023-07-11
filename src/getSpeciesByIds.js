const data = require('../data/zoo_data');
// os tres pontos(...) e conhecido como operador rest , ele nos permitem a receber um numero de varial de argumentos e agrupa-los em um array ,
// Nesse caso, o operador rest está sendo utilizado para receber múltiplos IDs como argumentos para a função getSpeciesByIds.
const getSpeciesByIds = (...ids) => {
  if (!ids || ids.length === 0) {
    return [];
  }

  return data.species.filter((species) => ids.includes(species.id));
};

module.exports = getSpeciesByIds;
