### Pesquisar com base no repositório

Use o qualificador `repo` para limitar ações a um repositório específico. Por exemplo:

  * `repo:my-org/our-repo` localiza todos os eventos que ocorreram no repositório `our-repo` na organização `my-org`.
  * `repo:my-org/our-repo repo:my-org/another-repo` localiza todos os eventos que ocorreram para ambos repositórios `our-repo` e `another-repo` na organização `my-org`.
  * `-repo:my-org/not-this-repo` exclui todos os eventos que ocorreram no repositório `not-this-repo` na organização `my-org`.

Observe que você deve incluir o nome da conta no qualificador `repo`; pesquisar somente `repo:our-repo` não funcionará.
