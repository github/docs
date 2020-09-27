1. Revise o arquivo (CSV) separado por vírgulas em `/PATH/REPO-NAME.git/git-import/raw-authors.csv`. Deve conter estas colunas:
    - `ID`: O autor como armazenado no repositório original, seguido por um identificador exclusivo
    - `NAME`: O autor como armazenado no repositório original

  Para mapear autores do repositório original para um endereço de email e nome, crie um novo arquivo CSV com as colunas `ID,(ignored),GIT_EMAIL,GIT_NAME`, que substitui as informações do autor por "ID" com "GIT_EMAIL" e "GIT_NAME".


  #### Exemplo:

   - Original author ID: `octocat@111111-2222-3333-4444-55555555555`
   - New email address: `octocat@github.com`
   - New name: `The Octocat`

   Para mapear o autor original para o novo usuário Git, o arquivo CSV deve incluir a linha:

   `octocat@111111-2222-3333-4444-55555555555, ,octocat@github.com,The Octocat`
