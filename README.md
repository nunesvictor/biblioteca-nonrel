## Como inciar o projeto

### Mongo

1. Em qualquer instância do MongoDB, crie um database `biblioteca`
2. Crie as collections: `autores`, `emprestimos`, `livros` e `usuarios` dentro do database
3. Restaure os dados dos arquivos contidos dentro da pasta `backend/fixtures` para as collections de nome correspondente

### Backend

1. Crie um arquivo `.env` dentro da pasta `backend`
2. Ajuste a variável `DATABASE_URL` para a url de conexão com o MongoDB
3. Ajuste a variável `PORT` para definir a porta que o serviço irá rodar (opcional)
4. Dentro da pasta `backend` execute:
    ```
    npm install
    npm start
    ```

### Frontend

1. Crie um arquivo `.env.development.local` dentro da pasta `frontend`
2. Ajuste a variável `REACT_APP_BACKEND_API` para a url de acesso à api do backend (Ex.: http://localhost:8080/api)
3. Dentro da pasta `frontend` execute:
    ```
    npm install
    npm start
    ```

### Executar a aplicação

A aplicação estará disponível em http://localhost:3000
