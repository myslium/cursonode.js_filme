import { Router } from "express";

import salvarFilmeService from "../service/filme.js";
import consultarFilmeService from "../service/consultar.js";
import consultarFilmeIDService from "../service/consultarfilmeid.js";
import alterarFilmeService from "../service/alterarFilmeService.js";
import deletarFilmeService from "../service/deletarFilmeService.js";
import alterarCapaFilmeService from "../service/alterarCapaImagem.js";

import { logErro } from "../utils/log.js";
import multer from "multer";

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

endpoints.get('/filme/:id', async (req, resp) => {

    try {
        let id = req.params.id;

        let filme = await consultarFilmeIDService(id)
        
        resp.send(filme)
    } 
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

endpoints.put('/filme/:id', async (req, resp) => {
    
    try {
       let filmeObj = req.body;
       let id = req.params.id;

       await alterarFilmeService(filmeObj, id);

       resp.status(204).send();

    } 
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

endpoints.delete('/filme/:id', async (req, resp) => {
   try {
        let id = req.params.id;

        await deletarFilmeService(id);
    
        resp.status(204).send();
   } 
   catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
   }

    
})

let uploadCapa = multer ( { dest: './storage/capa'});

endpoints.put('/filme/:id/imagem', uploadCapa.single('imagem'), async (req, resp) => {
    try {
        let id = req.params.id;
        let caminhoImagem = req.file.path;

        await alterarCapaFilmeService(id, caminhoImagem);

        
    } 
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
    }
})

export default endpoints;