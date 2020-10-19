---
title: Pulls
redirect_from:
  - /v3/pulls
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

A API do Pull Request permite que você liste, visualize, edite, crie e até mesmo faça merge de pull requests. Comentários em pull requests podem ser gerenciados através da [API de Comentários do Problema](/rest/reference/issues#comments).

Cada pull request é um problema, mas nem todos os problemas são um pull request. Por este motivo, as ações "compartilhadas" para ambos os recursos, como a manipulação de responsáveis, etiquetas e marcos são fornecidos dentro de [a API de problemas](/v3/issues).

### Tipos de mídia personalizados para pull requests

Estes são os tipos de mídia compatíveis com pull requests.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json
    application/vnd.github.VERSION.diff
    application/vnd.github.VERSION.patch

Para obter mais informações, consulte "[tipos de mídia personalizados](/rest/overview/media-types)".

<a id="diff-error">

Se um diff estiver corrompido, entre em contato com {% data variables.contact.contact_support %}. Inclua o nome e o ID do pull request do repositório na sua mensagem.

### Relações do Link

Pull Requests têm estas relações de link possíveis:

| Nome              | Descrição                                                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `self`            | O local da API deste Pull Request.                                                                                                                       |
| `html`            | O locl do HTML deste Pull Request.                                                                                                                       |
| `problema`        | O local da API do [Problema](/v3/issues/) deste Pull Request.                                                                                            |
| `comentários`     | O local da API dos [comentários do problema](/v3/issues/comments/) deste Pull Request.                                                                   |
| `review_comments` | O local da API dos [comentários da revisão](/v3/pulls/comments/) deste Pull Request.                                                                     |
| `review_comment`  | O [modelo de URL](/v3/#hypermedia) para construir o local da API para um [comentário de revisão](/v3/pulls/comments/) no repositório deste Pull Request. |
| `commits`         | O local da API dos [commits](#list-commits-on-a-pull-request) deste Pull Request.                                                                        |
| `Status`          | O local da API dos [status do commit](/v3/repos/statuses/) deste pull request, que são os status no seu branch `principal`.                              |

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Revisões

As revisões de pull request são grupos de comentários de revisão de pull request no Pull Request, agrupados e com um status e comentário de texto opcional.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'reviews' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Comentários de revisão

Os comentários de revisão de pull request são comentários em uma parte do diff unificado feitos durante uma revisão de pull request. Comentários de commit e comentários de problemas são são diferentes dos comentários de revisão de pull request. Você aplica comentários de submissão diretamente para um commit e aplica comentários de problema sem fazer referência a uma parte do diff unificado. Para obter mais informações, consulte "[Criar um comentário de commit](/rest/reference/git#create-a-commit)" e "[Criar um comentário de problema](/rest/reference/issues#create-an-issue-comment)".

### Tipos de mídia personalizados para comentários de revisão de pull request

Estes são os tipos de mídia compatíveis com os comentários de revisão de pull request.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

Para obter mais informações, consulte "[tipos de mídia personalizados](/rest/overview/media-types)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Solicitações de revisão

Os autores dos pull request e os proprietários e colaboradores dos repositórios podem solicitar uma revisão de pull request para qualquer pessoa com acesso de gravação ao repositório. Cada revisor solicitado receberá uma notificação pedindo-lhes para revisar o pull request.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'review-requests' %}{% include rest_operation %}{% endif %}
{% endfor %}
