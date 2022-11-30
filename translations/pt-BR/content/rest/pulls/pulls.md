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
ms.openlocfilehash: b140c41062e4fea4c1cb1299b23de774963913af
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181278'
---
## Sobre a API Pulls

A API do Pull Request permite que você liste, visualize, edite, crie e até mesmo faça merge de pull requests. Os comentários sobre as solicitações de pull podem ser gerenciados por meio da [API de Comentários de Problemas](/rest/reference/issues#comments).

Cada pull request é um problema, mas nem todos os problemas são um pull request. Por esse motivo, as ações "compartilhadas" para ambos os recursos, como tratamento de destinatários, rótulos e marcos, são fornecidas [na API de Problemas](/rest/reference/issues).

### Tipos de mídia personalizados para pull requests

Estes são os tipos de mídia compatíveis com pull requests.

    application/vnd.github.raw+json
    application/vnd.github.text+json
    application/vnd.github.html+json
    application/vnd.github.full+json
    application/vnd.github.diff
    application/vnd.github.patch

Para obter mais informações, confira "[Tipos de mídia personalizados](/rest/overview/media-types)".

Se um diff estiver corrompido, entre em contato com {% data variables.contact.contact_support %}. Inclua o nome e o ID do pull request do repositório na sua mensagem.

### Relações do Link

Pull Requests têm estas relações de link possíveis:

Nome | Descrição
-----|-----------|
`self`| O local da API deste Pull Request.
`html`| O locl do HTML deste Pull Request.
`issue`| O local da API do [Problema](/rest/reference/issues) dessa solicitação de pull.
`comments`| O local da API dos [Comentários sobre o problema](/rest/reference/issues#comments) dessa solicitação de pull.
`review_comments`| O local da API dos [Comentários sobre a revisão](/rest/reference/pulls#comments) dessa solicitação de pull.
`review_comment`| O [modelo de URL](/rest#hypermedia) para construir o local da API para um [Comentário sobre uma revisão](/rest/reference/pulls#comments) no repositório da solicitação de pull.
`commits`|O local da API dos [commits](#list-commits-on-a-pull-request) dessa solicitação de pull.
`statuses`| O local da API dos [status de confirmação](/rest/reference/commits#commit-statuses) dessa solicitação de pull, que são os status do respectivo branch `head`.
