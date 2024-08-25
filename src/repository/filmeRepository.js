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

export async function consultarFilmePorNome(nome) {

    let comando = `
       SELECT id_filme        id,
	   nm_filme               nome, 
	   ds_sinopse             sinopse,
       vl_avaliacao           avaliacao,
       dt_lancamento          lancamento,
       bt_disponivel          disponivel
    FROM tb_filmes
    WHERE nm_filme = ?
    `

    let resposta = await con.query(comando, [nome])
    let registros = resposta[0];

    return registros;

}

export async function consultarid(id) {

    let comando = `
       SELECT id_filme        id,
	   nm_filme               nome, 
	   ds_sinopse             sinopse,
       vl_avaliacao           avaliacao,
       dt_lancamento          lancamento,
       bt_disponivel          disponivel,
       img_filme              img  
    FROM tb_filmes
    WHERE id_filme = ?
    `

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;

}

export async function alterarFilme (filme, id) {

    let comando = `
      UPDATE tb_filmes
        SET nm_filme = ?,
            ds_sinopse = ?,
            vl_avaliacao = ?,
            dt_lancamento = ?,
            bt_disponivel = ?
    WHERE id_filme = ?;
    `

    let resposta = await con.query(comando, [
        filme.nome, 
        filme.sinopse, 
        filme.avaliacao, 
        filme.lancamento, 
        filme.disponivel,
        id
    ]);
    
    let info = resposta[0];
    let linhasAfetadas = info.affectedRows;
    return linhasAfetadas;
}

export async function deletarFilme(id) {
    
    let comando = `
        DELETE from tb_filmes 
        WHERE id_filme = ?;
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];
    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
}

export async function alterarCapaFilme(id, caminhoImagem) {

    let comando = `
        UPDATE tb_filmes
            SET img_filme = ?
        WHERE id_filme = ?
    `

    let resposta = await con.query(comando, [caminhoImagem, id]);
    let info = resposta[0];
    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
    
}