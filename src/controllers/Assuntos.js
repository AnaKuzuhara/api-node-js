const db = require('../database/connection'); 

module.exports = {
    async listarAssuntos(request, response) {
        try {

            const sql = `
            SELECT
                asst_id, asst_nome 
            FROM ASSUNTOS;
            `;

            const [rows] = await db.query(sql);

            const nRegistros=rows.length;


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Assuntos',
                nRegistros, 
                dados: rows
            });

        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarAssuntos(request, response) {

        try {
            const{ asst_nome}=request.body;
        

            const sql = `
            INSERT INTO ASSUNTOS 
(asst_nome) 
VALUES
('Problemas técnicos'),
('Dúvidas sobre progresso no jogo'),
('Sugestões de melhorias'),
('Problemas com salvamento de progresso'),
('Reportar bugs'),
('Dúvidas sobre personagens'),
('Problemas com instalação'),
('Dúvidas sobre requisitos do sistema'),
('Sugestões de novos personagens'),
('Dúvidas sobre história do jogo'),
('Problemas com controles (teclado/mouse)'),
('Dúvidas sobre desbloqueio de conteúdo'),
('Elogios ao jogo'),
('Dúvidas sobre atualizações futuras'),
('Problemas com desempenho (lag/travamentos)'),
('Dúvidas sobre compatibilidade'),
('Sugestões de novos recursos'),
('Problemas com áudio'),
('Dúvidas sobre finais alternativos'),
('Outros')
`;

            const values=[asst_nome];

            const [result]= await db.query(sql, values);

            const dados ={
                id: result.insertID,
                asst_nome
            };


            return response.status(200).json({
                sucesso:true,
                mensagem: 'Cadastro de usuarios',
                dados: dados
            });

            }catch (error){
                return response.status(500).json({
                sucesso:false,
                mensagem:'Erro na requisiçao.',
                dados: error.message

                });
            }
            },

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Assuntos', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarAssuntos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de Assuntos', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarAssuntos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de Assuntos', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  