let {identificadorAula, instrutores, aulas } = require('../bd/bancodedados');

const cadastrarAula = (req, resp) => {
    const { idInstrutor } = req.params;    
    const { titulo, descricao } = req.body;
    const buscar = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    }); 

    if (!buscar) {
        return resp.status(404).json({mensagem: 'Instrutor não encontrado.'})
    }

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao
    }

    aulas.push(aula);

    return resp.status(201).json(aula);
}

const listarAulas = (req, resp) => {
    return resp.status(200).json(aulas)
}

const buscarAulas = (req, resp) => {
    const { id } = req.params
    const aula = aulas.find((aula) => {
        return aula.id === Number(id);
    });

    if (!aula) {
        return resp.status(404).json({mensagem: 'Aula não encontrado.'})
    }

    return resp.status(200).json(aula);
}

const buscarAulasInstrutor = (req, resp) => {
    const { idInstrutor } = req.params

    const buscar = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    }); 

    if (!buscar) {
        return resp.status(404).json({mensagem: 'Instrutor não encontrado.'})
    }


    const aulasInstrutores = aulas.filter((aula) => {
        return aula.instrutor_id === buscar.id;
    });


    return resp.status(200).json(aulasInstrutores);
}

module.exports = {
    cadastrarAula,
    listarAulas,
    buscarAulas,
    buscarAulasInstrutor
}