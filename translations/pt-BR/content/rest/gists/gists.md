---
title: Gists
intro: 'A API dos Gists permite que o usuário autorizado liste, crie e exclua os gists públicos no GitHub.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Sobre a API de Gists

A API do Gist permite que você veja e modifique os gists. Para obter mais informações sobre gists, consulte "[Editando e compartilhando o conteúdo com gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists)".

### Autenticação

Você pode ler listas públicas {% ifversion ghae or ghes %}e criá-las para usuários anônimos sem um token.{% else %} anonimamente, mas você precisa conectar-se ao GitHub para criar gist.{% endif %} Para ler ou escrever gists em nome de um usuário, você precisa do escopo do OAuth e de um token. Para obter mais informações, consulte "[Escopos para aplicativos OAuth](/developers/apps/scopes-for-oauth-apps)."

<!-- When an OAuth client does not have the gists scope, the API will return a 404 "Not Found" response regardless of the validity of the credentials. The API will return a 401 "Bad credentials" response if the gists scope was given to the application but the credentials are invalid. -->

### Truncamento

A API de Gist fornece até um megabyte de conteúdo para cada arquivo no gist. Cada arquivo retornado por um gist através da API tem uma chave denominada `truncada`. Se `truncado` for `verdadeiro`, significa que arquivo é muito grande e apenas uma parte do conteúdo foi retornado em `conteúdo`.

Se você precisar do conteúdo completo do arquivo, você pode fazer uma solicitação `GET` para a URL especificada por `raw_url`. Tenha em mente que, para arquivos maiores que dez megabytes, você deverá clonar o gist através da URL fornecida por `git_pull_url`.

Além do conteúdo de um arquivo específico ser truncado, toda a lista de arquivos pode ser truncada se o número total exceder 300 arquivos. Se a chave de nível superior `truncado` é `verdadeira`, apenas os primeiros 300 arquivos foram retornados na lista de arquivos. Se você precisar buscar todos os arquivos do gist, você deverá clonar o gist através da URL fornecida por `git_pull_url`.

### Tipos de mídia personalizados para gists

Estes são os tipos de mídia compatíveis para buscar conteúdo geral.

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.base64

Para obter mais informações, consulte "[Tipos de mídia](/rest/overview/media-types)".
