
export function validarNovoFilme(filmeObj) {
    if (!filmeObj.nome) 
        throw new Error ('Nome do filme obrigatório.');

    if (!filmeObj.sinopse) 
        throw new Error ('Sinopse do filme obrigatório.');

    if (!filmeObj.avaliacao) 
        throw new Error ('Avaliacao do filme obrigatório.');

    if (isNaN(filmeObj.avaliacao)) 
        throw new Error ('Avalição do filme inválido.');

    if (!filmeObj.lancamento) 
        throw new Error ('Lançamento do filme obrigatório.');

    if (filmeObj.disponivel == undefined) 
        throw new Error ('Disponível do filme obrigatório.');
}

export function validarFilmeUnico(registros) {
    if(registros.length == 0)
        throw new Error ('Filme não encontrado');
}

export function validarFilmeNome(registros) {
    if(registros.length > 0)
        throw new Error ('Já existe um filme com esse nome');
}