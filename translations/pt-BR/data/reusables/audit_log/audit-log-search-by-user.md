### Pesquisar com base no usuário

O qualificador `actor` pode pesquisar eventos com base em quem executou a ação. Por exemplo:

  * `actor:octocat` localiza todos os eventos feitos por `octocat`.
  * `actor:octocat actor:hubot` localiza todos os eventos realizados por ambos `octocat` e `hubot`.
  * `-actor:hubot` exclui todos os eventos realizados por `hubot`.

Observe que só é possível usar um nome de usuário do {% data variables.product.product_name %}, e não o nome verdadeiro da pessoa.
