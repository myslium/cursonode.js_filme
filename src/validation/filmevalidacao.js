
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