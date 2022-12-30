---
title: Gists
intro: 'A API Gists permite que o usuário autorizado liste, crie, atualize e exclua os gists públicos no GitHub.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 47961c5dfeeb5f320bbac67ffb0573c31709bd5b
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181286'
---
## Sobre a API do Gists

A API do Gist permite exibir e modificar gists. Para obter mais informações sobre gists, confira "[Editando e compartilhando conteúdo com gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists)".

### Autenticação

Você pode ler gists públicos {% ifversion ghae or ghes %}e criá-los para usuários anônimos sem um token.{% else %} De modo anônimo, mas você precisa estar conectado no GitHub para criar gists.{% endif %} Para ler ou gravar gists em nome de um usuário, você precisa ter o escopo OAuth do gist e um token. Para obter mais informações, confira "[Escopos para Aplicativos OAuth](/developers/apps/scopes-for-oauth-apps)".

<!-- When an OAuth client does not have the gists scope, the API will return a 404 "Not Found" response regardless of the validity of the credentials. The API will return a 401 "Bad credentials" response if the gists scope was given to the application but the credentials are invalid. -->

### Truncation

A API de Gist fornece até um megabyte de conteúdo para cada arquivo no gist. Cada arquivo retornado para um gist por meio da API tem uma chave chamada `truncated`. Se `truncated` é `true`, o arquivo é muito grande e apenas uma parte do conteúdo foi retornada em `content`.

Se precisar do conteúdo completo do arquivo, faça uma solicitação `GET` à URL especificada por `raw_url`. Lembre-se de que, para arquivos com mais de dez megabytes, você precisará clonar a gist por meio da URL fornecida por `git_pull_url`.

Além do conteúdo de um arquivo específico ser truncado, toda a lista de arquivos pode ser truncada se o número total exceder 300 arquivos. Se a chave `truncated` de nível superior for `true`, somente os primeiros 300 arquivos serão retornados na lista de arquivos. Se você precisar buscar todos os arquivos do gist, precisará clonar o gist por meio da URL fornecida por `git_pull_url`.

### Tipos de mídia personalizados para gists

Estes são os tipos de mídia compatíveis para buscar conteúdo geral.

    application/vnd.github.raw
    application/vnd.github.base64

Para obter mais informações, confira "[Tipos de mídia](/rest/overview/media-types)".
