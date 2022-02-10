---
title: Pesquisando versões de um repositório
intro: 'É possível usar palavras-chave, tags e outros qualificadores para procurar determinadas versões em um repositório.'
permissions: Anyone with read access to a repository can search that repository's releases.
shortTitle: Pesquisando as versões
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
  ghae-issue-4974: '*'
topics:
  - Repositories
---

## Procurando as versões em um repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
1. Para pesquisar as versões do repositório, no campo de pesquisa na parte superior da página de Versões, digite a sua consulta e pressione **Enter**. ![Versões no campo de pesquisa](/assets/images/help/releases/search-releases.png)

## Pesquisar sintaxe para versões em um repositório

Você pode fornecer o texto na sua consulta de pesquisa que será comparado com o título, texto e tag das versões do repositório. Você também pode combinar os seguintes qualificadores em versões específicas de destino.

| Qualifier                 | Exemplo                                                                                                                                                                                                                                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `draft:true`              | **draft:true** irá corresponder apenas ao rascunho das versões.                                                                                                                                                                                                                                 |
| `draft:false`             | **draft:false** irá corresponder apenas às versões publicadas.                                                                                                                                                                                                                                  |
| <code>tag:<em>TAG</em></code> | **tag: v1** corresponde a uma versão com a etiqueta v1 e a todas as versões menores ou patches em v1, como v1.0, v1.2 e v1.2.5.                                                                                                                                                                 |
| <code>created:<em>DATE</em></code> | **created:2021** irá corresponder às versões criadas em 2021. Você também pode fornecer intervalos de datas. Para obter mais informações, consulte "[Entender a sintaxe de pesquisa](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)". |
