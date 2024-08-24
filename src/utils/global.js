import { horaAtual } from "./datetime.js";
import { logErro } from "./log.js";

global.criarErro = function criarErro(err) {
    let obj = {
        erro: err.message
    }

    return obj;
}


global.logErro = function logErro(err) {
    console.log(horaAtual() + ' ERRO --> ' + err.message)
}

