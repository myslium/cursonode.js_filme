import { consultarFilme } from "../repository/filmeRepository.js";


export default async function consultarFilmeService(nome) {
    if (!nome) {
        nome = '';
    }

    let registros = await consultarFilme(nome);
    return registros;
}