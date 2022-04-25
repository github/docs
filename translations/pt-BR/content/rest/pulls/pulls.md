---
title: Pulls
intro: 'A API Pulls permite que você liste, veja, edite, crie e até mesmo faça merge de pull requests.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

A API do Pull Request permite que você liste, visualize, edite, crie e até mesmo faça merge de pull requests. Comentários em pull requests podem ser gerenciados através da [API de Comentários do Problema](/rest/reference/issues#comments).

Cada pull request é um problema, mas nem todos os problemas são um pull request. Por este motivo, as ações "compartilhadas" para ambos os recursos, como a manipulação de responsáveis, etiquetas e marcos são fornecidos dentro de [a API de problemas](/rest/reference/issues).

### Tipos de mídia personalizados para pull requests

Estes são os tipos de mídia compatíveis com pull requests.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json
    application/vnd.github.VERSION.diff
    application/vnd.github.VERSION.patch

Para obter mais informações, consulte "[tipos de mídia personalizados](/rest/overview/media-types)".

Se um diff estiver corrompido, entre em contato com {% data variables.contact.contact_support %}. Inclua o nome e o ID do pull request do repositório na sua mensagem.

### Relações do Link

Pull Requests têm estas relações de link possíveis:

| Nome              | Descrição                                                                                                                                                            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `self`            | O local da API deste Pull Request.                                                                                                                                   |
| `html`            | O locl do HTML deste Pull Request.                                                                                                                                   |
| `problema`        | O local da API do [Problema](/rest/reference/issues) deste Pull Request.                                                                                             |
| `comentários`     | O local da API dos [comentários do problema](/rest/reference/issues#comments) deste Pull Request.                                                                    |
| `review_comments` | O local da API dos [comentários da revisão](/rest/reference/pulls#comments) deste Pull Request.                                                                      |
| `review_comment`  | O [modelo de URL](/rest#hypermedia) para construir o local da API para um [comentário de revisão](/rest/reference/pulls#comments) no repositório deste Pull Request. |
| `commits`         | O local da API dos [commits](#list-commits-on-a-pull-request) deste Pull Request.                                                                                    |
| `Status`          | O local da API dos [status do commit](/rest/reference/commits#commit-statuses) deste pull request, que são os status no seu branch `principal`.                      |
