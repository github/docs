---
title: Sobre a automação para problemas e pull requests com parâmetros de consulta
intro: Você pode usar parâmetros de consulta para compartilhar URLs com informações personalizadas.
redirect_from:
  - /articles/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/about-automation-for-issues-and-pull-requests-with-query-parameters
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
Os parâmetros de consulta são partes opcionais de uma URL que podem ser personalizadas para compartilhar uma exibição de página web específica, como resultados do filtro de pesquisa ou um modelo de problemas no {% data variables.product.prodname_dotcom %}. Para criar seus próprios parâmetros de consulta, você deve corresponder o par de chave e valor.

{% tip %}

**Dica:** também é possível criar modelos de problemas que são abertos com etiquetas padrão, responsáveis e um título para o problema. Para obter mais informações, consulte "[Configurando modelos de problemas para seu repositório](/articles/configuring-issue-templates-for-your-repository)" ou "[Criar manualmente um único modelo de problemas para seu repositório](/articles/manually-creating-a-single-issue-template-for-your-repository)".

{% endtip %}

Você deve ter as permissões adequadas para qualquer ação para usar o parâmetro de consulta equivalente. Por exemplo, é preciso ter permissão para adicionar uma etiqueta a um problema para usar o parâmetro de consulta `label`.

If you create an invalid URL using query parameters, or if you don’t have the proper permissions, the URL will return a `404 Not Found` error page. If you create a URL that exceeds the server limit, the URL will return a `414 URI Too Long` error page.

### Parâmetros de consulta compatíveis

| Parâmetro de consulta | Exemplo                                                                                                                                                                                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `texto`               | `https://github.com/octo-org/octo-repo/compare/main...pull-request-test?quick_pull=1&body=Fixes+the+problem.` cria um pull request que compara os branches `main` and `pull-request-test`, com o comentário "Corrige o problema" no texto do pull request. |
| `title`               | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` cria um problema com a etiqueta "erro" e o título "Novo relatório de erros".                                                                                            |
| `etiquetas`           | `https://github.com/octo-org/octo-repo/compare/main...pull-request-test?quick_pull=1&labels=bug` cria um pull request que compara os branches `main` e `pull-request-test` com a etiqueta "erro".                                                          |
| `modelo`              | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` cria um problema com um modelo no texto do problema.                                                                                                                             |
| `marco`               | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` cria um problema com o marco "marcos de teste".                                                                                                                                |
| `assignees`           | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` cria um problema e o atribui a @octocat.                                                                                                                                                  |
| `projetos`            | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` cria um problema com o título "Correção de erro" e o adiciona ao quadro de projeto 1 da organização.                                                                  |

### Preencher problemas e pull requests com modelos personalizados

{% data reusables.repositories.legacy-issue-template-tip %}

Você pode usar o parâmetro de consulta `template` para especificar um modelo a fim de preencher o problema ou o texto da pull request automaticamente. O parâmetro de consulta `template` trabalha com modelos armazenados em um subdiretório `ISSUE_TEMPLATE` ou `PULL_REQUEST_TEMPLATE` na raiz, no diretório `docs/` ou `.github/` em um repositório.

Se um repositório contiver apenas o modelo de problema ou pull request padrão, todos os novos problemas ou pull requests terão o modelo padrão no texto.

Para obter mais informações, consulte "[Criar um modelo de pull request para seu repositório](/articles/creating-a-pull-request-template-for-your-repository)" ou "[Criar manualmente um único modelo de problemas para seu repositório](/articles/manually-creating-a-single-issue-template-for-your-repository)".

### Leia mais

- "[Automação para formulários de versão com parâmetros de consulta](/articles/automation-for-release-forms-with-query-parameters)"
