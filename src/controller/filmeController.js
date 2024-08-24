import { Router } from "express";
import salvarFilmeService from "../service/filme.js";
import { logErro } from "../utils/log.js";
import consultarFilmeService from "../service/consultar.js";

const endpoints = Router()

endpoints.post('/filme', async (req, resp) => {
    try {
        let filmeObj = req.body;

        let id = await salvarFilmeService(filmeObj)

        resp.send({
            id: id
        })
    } 
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
    
    
})

endpoints.get('/filme', async (req, resp) => {
   
    try {
        let nome = req.query.nome;

        let registros = await consultarFilmeService(nome);
    
        resp.send(registros)
    } 
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

export default endpoints;