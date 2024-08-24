import con from "./connection.js";


export default async function salvarFilme(filme) {

    let comando = `
        INSERT INTO tb_filmes (nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
        VALUES (?, ?, ?, ?, ?)
    `

    let resposta = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);

    let info = resposta[0];

    let idFilme = info.insertId;
    return idFilme;


}

export async function consultarFilme(nome) {

    let comando = `
       SELECT id_filme        id,
	   nm_filme               nome, 
	   ds_sinopse             sinopse,
       vl_avaliacao           avaliacao,
       dt_lancamento          lancamento,
       bt_disponivel          disponivel
    FROM tb_filmes
    WHERE nm_filme like ?
    `

    let resposta = await con.query(comando, ['%' + nome + '%']);
    let registros = resposta[0];

    return registros;

}