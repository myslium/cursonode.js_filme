import { alterarFilme } from "../repository/filmeRepository.js";
import { validarNovoFilme } from "../validation/filmevalidacao.js";


export default async function alterarFilmeService(filmeObj, id) {
    validarNovoFilme(filmeObj);
    let linhasAfetadas = await alterarFilme(filmeObj, id);
    
    if (linhasAfetadas == 0) 
        throw new Error ('Nenhum filme afetado.')
}