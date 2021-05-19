---
title: Tipos de mídia
intro: Aprenda sobre os tipos de mídia para especificar o formato dos dados que você deseja consumir.
redirect_from:
  - /v3/media
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---


Tipos de mídia personalizados são usados na API para permitir que os consumidores escolham o formato dos dados que desejam receber. Isso é feito adicionando um ou mais dos seguintes tipos ao cabeçalho `Aceitar` quando você fizer uma solicitação. Os tipos de mídia são específicos para os recursos, permitindo-lhes alterar, de forma independente, e suportar formatos que outros recursos não suportam.

Todos os tipos de mídia de {% data variables.product.product_name %} se parecem com isto:

    application/vnd.github[.version].param[+json]

Os tipos mais básicos de mídia que a API suporta são:

    application/json
    application/vnd.github+json

Nenhum desses parâmetros especifica a versão [][versions]. Portanto, você sempre receberá a representação atual do JSON padrão atual de recursos.

{% note %}

**Importante:** A versão-padrão da API pode ser alterada no futuro. Se você estiver construindo um aplicativo e se importar com a estabilidade da API, certifique-se de solicitar uma versão específica no cabeçalho `Aceitar`, conforme mostrado nos exemplos abaixo.

{% endnote %}

Você pode especificar uma versão assim:

    application/vnd.github.v3+json

Se você estiver especificando uma propriedade (como full/raw/etc. definido abaixo), coloque a versão antes da propriedade:

    application/vnd.github.v3.raw+json

Você pode verificar a versão atual por meio de cada cabeçalho de resposta.  Procure o cabeçalho `X-GitHub-Media-Type`:

```shell
$ curl {% data variables.product.api_url_pre %}/users/technoweenie -I
> HTTP/2 200
> X-GitHub-Media-Type: github.v3

$ curl {% data variables.product.api_url_pre %}/users/technoweenie -I \
$  -H "Accept: application/vnd.github.full+json"
> HTTP/2 200
> X-GitHub-Media-Type: github.v3; param=full; format=json

$ curl {% data variables.product.api_url_pre %}/users/technoweenie -I \
$  -H "Accept: application/vnd.github.v3.full+json"
> HTTP/2 200
> X-GitHub-Media-Type: github.v3; param=full; format=json
```

### Propriedades do texto do comentário

O texto de um comentário pode ser escrito no [Linguagem de Markdown enriquecido][gfm], [problemas](/rest/reference/issues), [comentários do problema](/rest/reference/issues#comments), [comentários de pull request](/rest/reference/pulls#comments) e as APIs dos [comentários de gist](/rest/reference/gists#comments) aceitam todos esses mesmos tipos de mídia:

#### Sem processar

    application/vnd.github.VERSION.raw+json

Retorna o texto do markdown sem processar. A resposta incluirá o `texto`. Este é o padrão se você não passar nenhum tipo de mídia específico.

#### Texto

    application/vnd.github.VERSION.text+json

Retorna uma representação única do texto do markdown. A resposta irá incluir `body_text`.

#### HTML

    application/vnd.github.VERSION.html+json

Retorna um HTML interpretado a partir do markdown do texto. A resposta incluirá `body_html`.

#### Completo

    application/vnd.github.VERSION.full+json

Retorna as representações de HTML e texto sem processar. A resposta incluirá `texto`, `body_text` e `body_html`:

### Propriedades do Git blob

Os seguintes tipos de mídia são permitidos ao [receber um blob](/rest/reference/git#get-a-blob):

#### JSON

    application/vnd.github.VERSION+json
    application/json

Retorna a representação do JSON do blob com `conteúdo` como uma string codificada de base64. Este é o padrão, caso nada seja passado.

#### Sem processar

    application/vnd.github.VERSION.raw

Retorna os dados do blob sem processamento.

### Commits, comparação de commit e pull requests

A [API de commits](/rest/reference/repos#commits) e [API de pull requests](/rest/reference/pulls) são compatíveis com os formatos [diff][git-diff] e [patch][git-patch]:

#### diff

    application/vnd.github.VERSION.diff

#### patch

    application/vnd.github.VERSION.patch

#### sha

    application/vnd.github.VERSION.sha

### Conteúdo do repositório

#### Sem processar

    application/vnd.github.VERSION.raw

Retorna o conteúdo sem processamento de um arquivo. Este é o padrão se você não passar nenhum tipo de mídia específico.

#### HTML

    application/vnd.github.VERSION.html

Para arquivos de markup, como Markdown ou AsciiDoc, você pode recuperar o HTML interpretado usando o tipo de mídia `.html`. As linguagens de markup são processadas em HTML usando nossa [biblioteca de markup](https://github.com/github/markup) de código aberto.

### Gists

#### Sem processar

    application/vnd.github.VERSION.raw

Retorna o conteúdo sem processar de um gist. Este é o padrão se você não passar nenhum tipo de mídia específico.

#### base64

    application/vnd.github.VERSION.base64

O conteúdo do gist é codificado em base64 antes de ser enviado. Isso pode ser útil se o seu gist contiver qualquer sequência de UTF-8 inválida.

[gfm]: http://github.github.com/github-flavored-markdown/
[git-diff]: http://git-scm.com/docs/git-diff
[git-patch]: http://git-scm.com/docs/git-format-patch
[versions]: /developers/overview/about-githubs-apis
[versions]: /developers/overview/about-githubs-apis
