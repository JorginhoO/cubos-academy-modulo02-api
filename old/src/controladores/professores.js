const professores = require('../banco-de-dados/arrays');

const buscarProfessores = (req, resp) => {
    const { stack } = req.query;  // paramentro de consulta
    let resultado = professores;
 
    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack;
        });
    }
    resp.send(resultado);
};

const buscarIdProfessores = (req, resp) => {
    const professorId = professores.find((professor) => {
        return professor.id === Number(req.params.id); // paramentros de rotas
    });
    resp.send(professorId);
};


module.exports = {
    buscarProfessores,
    buscarIdProfessores
}