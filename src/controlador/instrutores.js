let {identificador, instrutores} = require('../bd/bancodedados');

const listarInstrutores = (req, resp) => {
    resp.json(instrutores); 
}

const buscarInstrutores = (req, resp) => {
    const buscar = instrutores.find((instrutor) => {
        return instrutor.id === Number(req.params.id);
    }); 

    if (!buscar) {
        return resp.status(404).json({mensagem: 'Instrutor não encontrado.'})
    }

    return resp.json(buscar);
}


const cadastrarInstrutor = (req, resp) => {
    const { nome, email, status } = req.body;

    
    if (!nome) {
        return resp.status(400).json({mensagem: 'O nome é obrigatório.'})
    }

    if (!email) {
        return resp.status(400).json({mensagem: 'O e-mail é obrigatório.'})
    }

    const instrutor = {
        id: identificador++,
        nome,
        email,
        status: status ?? true
    }

    instrutores.push(instrutor);
    
    return resp.status(201).json(instrutor);

}
 

const atualizarInstrutor = (req, resp) => {
    const { id } = req.params;
    const { nome, email, status } = req.body;
      
    if (!nome) {
        return resp.status(400).json({mensagem: 'O nome é obrigatório.'})
    }

    if (!email) {
        return resp.status(400).json({mensagem: 'O e-mail é obrigatório.'})
    }

    if (!status) {
        return resp.status(400).json({mensagem: 'O status é obrigatório.'})
    }

    const buscar = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    }); 

    if (!buscar) {
        return resp.status(404).json({mensagem: 'Instrutor não encontrado.'})
    }

    
    buscar.nome = nome;
    buscar.email = email;
    buscar.status = status;
    
    return resp.status(204).json({mensagem: 'Instrutor atualizado.'});

}

const alterarStatusInstrutor = (req, resp) => {
    const { id } = req.params;
    const { status } = req.body;
    const buscar = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    }); 

    if (!buscar) {
        return resp.status(404).json({mensagem: 'Instrutor não encontrado.'})
    }

    buscar.status = status;
    return resp.status(204).send();
}

const excluirInstrutor = (req, resp) => {
    const { id } = req.params;
    const buscar = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    }); 

    if (!buscar) {
        return resp.status(404).json({mensagem: 'Instrutor não encontrado.'})
    }

    instrutores = instrutores.filter((instrutor) => {
        return instrutor.id !== Number(id);
    });
    return resp.status(204).send();
}

module.exports = {
    listarInstrutores,
    buscarInstrutores,
    cadastrarInstrutor,
    atualizarInstrutor,
    alterarStatusInstrutor,
    excluirInstrutor
}