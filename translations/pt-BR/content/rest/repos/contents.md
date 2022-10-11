---
title: Conteúdo do repositório
allowTitleToDifferFromFilename: true
shortTitle: Contents
intro: 'Estes pontos de extremidade da API permitem criar, modificar e excluir conteúdo codificado em Base64 em um repositório.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 50875021a506201a90cbac62db521604a390a586
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060327'
---
## Sobre a API de Conteúdo do repositório

Para solicitar o formato sem processar ou HTML interpretado (quando compatível), use os tipos de mídia personalizados para o conteúdo do repositório.

### Tipos de mídia personalizados para conteúdo do repositório

Os [LEIAMEs](/rest/reference/repos#get-a-repository-readme), os [arquivos](/rest/reference/repos#get-repository-content) e os [links simbólicos](/rest/reference/repos#get-repository-content) dão suporte aos seguintes tipos de mídia personalizados:

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

Use o tipo de mídia `.raw` para recuperar o conteúdo do arquivo.

Para arquivos de marcação como Markdown ou AsciiDoc, recupere o HTML renderizado usando o tipo de mídia `.html`. As linguagens de marcação são renderizadas em HTML com nossa [biblioteca Markup](https://github.com/github/markup) de código aberto.

[Todos os objetos](/rest/reference/repos#get-repository-content) dão suporte ao seguinte tipo de mídia personalizada:

    application/vnd.github.VERSION.object

Use o parâmetro de tipo de mídia `object` para recuperar o conteúdo em um formato de objeto consistente, independentemente do tipo de conteúdo. Por exemplo, em vez de uma matriz de objetos para um diretório, a resposta será um objeto com um atributo `entries` que contém a matriz de objetos.

Leia mais sobre o uso de tipos de mídia na API [aqui](/rest/overview/media-types).
