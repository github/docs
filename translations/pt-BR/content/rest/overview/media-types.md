---
title: Tipos de mídia
intro: Aprenda sobre os tipos de mídia para especificar o formato dos dados que você deseja consumir.
redirect_from:
  - /v3/media
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: d93ba31647967f2f3a38dd47c5cc6d8a623c6c6e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146681122'
---
Tipos de mídia personalizados são usados na API para permitir que os consumidores escolham o formato dos dados que desejam receber. Faça isso adicionando um ou mais dos tipos a seguir ao cabeçalho `Accept` quando fizer uma solicitação. Os tipos de mídia são específicos aos recursos, permitindo que eles mudem de forma independente e ofereçam suporte a formatos que outros recursos não.

Todos os tipos de mídia de {% data variables.product.product_name %} se parecem com isto:

    application/vnd.github.param[+json]

Os tipos mais básicos de mídia que a API suporta são:

    application/vnd.github+json
    application/json

{% note %}

**Observação:** no passado, recomendávamos incluir `v3` em seu cabeçalho `Accept`. Isso não é mais necessário e não afetará suas solicitações de API.

{% endnote %}

Se você estiver especificando uma propriedade (como full/raw/etc., definida abaixo), coloque-a depois de `github`:

    application/vnd.github.raw+json

## Propriedades do texto do comentário

O corpo de um comentário pode ser escrito em [GitHub Flavored Markdown][gfm], [problemas](/rest/reference/issues), [comentários sobre problemas](/rest/reference/issues#comments), [comentários sobre solicitações de pull](/rest/reference/pulls#comments), e as APIs de [comentários sobre gists](/rest/reference/gists#comments) aceitam esses mesmos tipos de mídia:

### Raw

    application/vnd.github.raw+json

Retorna o texto do markdown sem processar. A resposta incluirá `body`. Este é o padrão se você não passar nenhum tipo de mídia específico.

### Texto

    application/vnd.github.text+json

Retorna uma representação única do texto do markdown. A resposta incluirá `body_text`.

### HTML

    application/vnd.github.html+json

Retorna um HTML interpretado a partir do markdown do texto. A resposta incluirá `body_html`.

### Completo

    application/vnd.github.full+json

Retorna as representações de HTML e texto sem processar. A resposta incluirá `body`, `body_text` e `body_html`:

## Propriedades do Git blob

Os seguintes tipos de mídia são permitidos quando [um blob é obtido](/rest/reference/git#get-a-blob):

### JSON

    application/vnd.github+json
    application/json

Retorne a representação JSON do blob com `content` como uma cadeia de caracteres codificada em Base64. Este é o padrão, caso nada seja passado.

### Raw

    application/vnd.github.raw

Retorna os dados do blob sem processamento.

## Commits, comparação de commit e pull requests

A [API de commits](/rest/reference/repos#commits) e a [API de solicitações de pull](/rest/reference/pulls) dão suporte aos formatos [diff][git-diff] e [patch][git-patch]:

### diff

    application/vnd.github.diff

### patch

    application/vnd.github.patch

### sha

    application/vnd.github.sha

## Conteúdo do repositório

### Raw

    application/vnd.github.raw

Retorna o conteúdo sem processamento de um arquivo. Este é o padrão se você não passar nenhum tipo de mídia específico.

### HTML

    application/vnd.github.html

Para arquivos de marcação como Markdown ou AsciiDoc, recupere o HTML renderizado usando o tipo de mídia `.html`. As linguagens de marcação são renderizadas em HTML com nossa [biblioteca Markup](https://github.com/github/markup) de código aberto.

## Gists

### Raw

    application/vnd.github.raw

Retorna o conteúdo sem processar de um gist. Este é o padrão se você não passar nenhum tipo de mídia específico.

### base64

    application/vnd.github.base64

O conteúdo do gist é codificado em Base64 antes de ser enviado. Isso pode ser útil se o gist contém sequências UTF-8 inválidas.

[gfm]:http://github.github.com/github-flavored-markdown/
[git-diff]: http://git-scm.com/docs/git-diff
[git-patch]: http://git-scm.com/docs/git-format-patch
[hypermedia]: /rest#hypermedia
[versions]: /developers/overview/about-githubs-apis
