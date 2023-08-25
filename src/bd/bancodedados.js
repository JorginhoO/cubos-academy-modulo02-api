const bancodedados = {
    identificador: 4,
    identificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: 'Guido',
            email: 'guido@email.com',
            status: true
        },
        {
            id: 2,
            nome: 'Dani',
            email: 'dani@email.com',
            status: true
        },
        {
            id: 3,
            nome: 'Jorge',
            email: 'jorge@email.com',
            status: true
        },
    ],
    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: 'Primeiro Servidor',
            descrição: 'Construindo o primeiro servidor'
        }
    ]
}

module.exports = bancodedados;