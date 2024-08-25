import { consultarid } from "../repository/filmeRepository.js";
import { validarFilmeUnico } from "../validation/filmevalidacao.js";


export default async function consultarFilmeIDService(id) {
    let registros = await consultarid(id);
    validarFilmeUnico(registros)

    let filme = registros[0];
    return filme;
    
}