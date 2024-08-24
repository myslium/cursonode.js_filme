import salvarFilme from "../repository/filmeRepository.js";
import { validarNovoFilme } from "../validation/filmevalidacao.js";

export default async function salvarFilmeService(filmeObj) {
    validarNovoFilme(filmeObj)

    let id = await salvarFilme(filmeObj);
    return id;
}