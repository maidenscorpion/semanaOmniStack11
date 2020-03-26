/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota apos "?" (filtros, paginação) acessado pelo resquest query
 * Route Params: Parâmetros utilizados para identificar recursos, acessado pelo request params
 * Request Body: Corpo da requesição, utilizado para criar  ou alterar recursos, acessado pelo body
 */

/**
 * Para aplicação usaremos o SQLite
 * Você pode usar um DRIVE de um banco (select * from users)
 * Ou você pode usar QUERY BUILDER (será usado nessa aplicação) - table('users').select('*')
 */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);