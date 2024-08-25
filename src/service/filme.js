import salvarFilme from "../repository/filmeRepository.js";
import { validarNovoFilme } from "../validation/filmevalidacao.js";
import { validarFilmeNome } from "../validation/filmevalidacao.js";
import { consultarFilmePorNome } from "../repository/filmeRepository.js";

export default async function salvarFilmeService(filmeObj) {
    validarNovoFilme(filmeObj)

    let registros = await consultarFilmePorNome(filmeObj.nome)
    validarFilmeNome(registros)
    
    let id = await salvarFilme(filmeObj);
    return id;
}