O log lista as seguintes informações sobre cada ação:

* Em qual repositório uma ação foi executada
* O usuário que executou a ação
* A ação que foi executada
* Em que país a ação foi executada
* A data e a hora que a ação foi executada

Observe que não é possível pesquisar as entradas usando texto. No entanto, é possível criar consultas de pesquisa usando diversos filtros. Muitos operadores usados ao consultar o log de auditoria, como `-`, `>`, ou `<`, correspondem ao mesmo formato de pesquisa no {% data variables.product.product_name %}. Para obter mais informações, consulte "[Searching on {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
#### Pesquisar com base em operação

Use o qualificador `operation` para limitar ações a tipos específicos de operações. Por exemplo:

  * `operation:access` encontra todos os eventos nos quais um recurso foi acessado.
  * `operation:authentication` encontra todos os eventos nos quais um evento de autenticação foi executado.
  * `operation:create` encontra todos os eventos nos quais um recurso foi criado.
  * `operation:modify` encontra todos os eventos nos quais um recurso foi modificado.
  * `operation:remove` encontra todos os eventos nos quais um recurso foi removido.
  * `operation:restore` encontra todos os eventos nos quais um recurso foi restaurado.
  * `operation:transfer` encontra todos os eventos nos quais um recurso foi transferido.
{% endif %}

#### Pesquisar com base no repositório

Use o qualificador `repo` para limitar ações a um repositório específico. Por exemplo:

  * `repo:my-org/our-repo` localiza todos os eventos que ocorreram no repositório `our-repo` na organização `my-org`.
  * `repo:my-org/our-repo repo:my-org/another-repo` localiza todos os eventos que ocorreram para ambos repositórios `our-repo` e `another-repo` na organização `my-org`.
  * `-repo:my-org/not-this-repo` exclui todos os eventos que ocorreram no repositório `not-this-repo` na organização `my-org`.

Observe que você deve incluir o nome da conta no qualificador `repo`; pesquisar somente `repo:our-repo` não funcionará.

#### Pesquisar com base no usuário

O qualificador `actor` pode pesquisar eventos com base em quem executou a ação. Por exemplo:

  * `actor:octocat` localiza todos os eventos feitos por `octocat`.
  * `actor:octocat actor:hubot` localiza todos os eventos realizados por ambos `octocat` e `hubot`.
  * `-actor:hubot` exclui todos os eventos realizados por `hubot`.

Observe que só é possível usar um nome de usuário do {% data variables.product.product_name %}, e não o nome verdadeiro da pessoa.
