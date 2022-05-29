---
title: Conteúdo do repositório
allowTitleToDifferFromFilename: true
shortTitle: Conteúdo
intro: 'Estes pontos de extremidade da API permitem criar, modificar e excluir conteúdo codificado em Base64 em um repositório.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Sobre a API de conteúdos do repositório

Para solicitar o formato sem processar ou HTML interpretado (quando compatível), use os tipos de mídia personalizados para o conteúdo do repositório.

### Tipos de mídia personalizados para conteúdo do repositório

Os [READMEs](/rest/reference/repos#get-a-repository-readme), [arquivos](/rest/reference/repos#get-repository-content) e [links simbólicos](/rest/reference/repos#get-repository-content) são compatíveis com os seguintes tipos de mídia personalizados:

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

Use o tipo de mídia `.raw` para recuperar o conteúdo do arquivo.

Para arquivos de markup, como Markdown ou AsciiDoc, você pode recuperar o HTML interpretado usando o tipo de mídia `.html`. As linguagens de markup são processadas em HTML usando nossa [biblioteca de markup](https://github.com/github/markup) de código aberto.

[Todos os objetos](/rest/reference/repos#get-repository-content) são compatíveis com o seguinte tipo de mídia personalizado:

    application/vnd.github.VERSION.object

Use o parâmetro do tipo de mídia do `objeto` para recuperar o conteúdo em um formato de objeto consistente independentemente do tipo de conteúdo. Por exemplo, em vez de um array de objetos para um diretório, a resposta será um objeto com um atributo de `entrada` contendo o array de objetos.

Você pode ler mais sobre o uso de tipos de mídia na API [aqui](/rest/overview/media-types).
