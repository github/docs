---
title: Descobrir recursos para um usuário
intro: Saiba como encontrar os repositórios e organizações que o seu aplicativo pode acessar para um usuário de forma confiável para as suas solicitações autenticadas para a API REST.
redirect_from:
  - /guides/discovering-resources-for-a-user
  - /v3/guides/discovering-resources-for-a-user
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Discover resources for a user
ms.openlocfilehash: 3b3fd627260ac03d0991db73fcb5492c1284b2c0
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193149'
---
Ao fazer solicitações autenticadas na API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, os aplicativos frequentemente precisam buscar os repositórios e organizações do usuário atual. Neste guia, explicaremos como descobrir esses recursos de forma confiável.

Para interagir com a API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, usaremos o [Octokit.rb][octokit.rb]. Encontre o código-fonte completo deste projeto no repositório [platform-samples][platform samples].

## Introdução

Caso ainda não tenha lido, leia o guia ["Noções básicas da autenticação"][basics-of-authentication] antes de trabalhar nos exemplos abaixo. Os exemplos abaixo pressupõem que você [tenha registrado um aplicativo OAuth][register-oauth-app] e que o seu [aplicativo tenha um token OAuth para um usuário][make-authenticated-request-for-user].

## Descubra os repositórios que o seu aplicativo pode acessar para um usuário

Além de ter seus próprios repositórios pessoais, um usuário pode ser um colaborador em repositórios pertencentes a outros usuários e organizações. Coletivamente, estes são os repositórios em que o usuário tem acesso privilegiado: trata-se de um repositório privado em que o usuário tem acesso de leitura ou gravação ou de {% ifversion fpt %}um{% elsif ghec or ghes %} repositório público um público ou interno{% elsif ghae %}um repositório interno{% endif %} em que o usuário tem acesso de gravação.

Os [escopos do OAuth][scopes] e as [políticas de aplicativo da organização][oap] determinam quais desses repositórios seu aplicativo pode acessar para um usuário. Use o fluxo de trabalho abaixo para descobrir esses repositórios.

Como sempre, primeiro, precisaremos da biblioteca [Octokit.rb do Ruby do GitHub][octokit.rb]. Em seguida, vamos configurar o Octokit.rb para tratar a paginação automaticamente. Para obter mais informações sobre paginação, confira "[Como usar paginação na API REST](/rest/guides/using-pagination-in-the-rest-api)".

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Em seguida, transmitiremos o [token OAuth do aplicativo para um usuário especificado][make-authenticated-request-for-user]:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Depois, estaremos prontos para buscar os [repositórios que nosso aplicativo pode acessar para o usuário][list-repositories-for-current-user]:

``` ruby
client.repositories.each do |repository|
  full_name = repository[:full_name]
  has_push_access = repository[:permissions][:push]

  access_type = if has_push_access
                  "write"
                else
                  "read-only"
                end

  puts "User has #{access_type} access to #{full_name}."
end
```

## Descubra as organizações que o seu aplicativo pode acessar para um usuário

Os aplicativos podem executar todos os tipos de tarefas relacionadas à organização para um usuário. Para executar essas tarefas, o aplicativo precisa de uma [autorização OAuth][scopes] com permissão suficiente. Por exemplo, o escopo `read:org` permite que você [liste as equipes][list-teams], e o escopo `user` permite que você [torne pública a associação à organização do usuário][publicize-membership]. Assim que um usuário conceder um ou mais desses escopos para o seu aplicativo, você estará pronto para buscar as organizações do usuário.

Assim como fizemos ao descobrir os repositórios acima, começaremos exigindo a biblioteca Ruby [Octokit.rb do GitHub][octokit.rb] e configurando-a para cuidar da paginação para nós. Para obter mais informações sobre paginação, confira "[Como usar paginação na API REST](/rest/guides/using-pagination-in-the-rest-api)".

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Em seguida, transmitiremos o [token OAuth do aplicativo para um usuário especificado][make-authenticated-request-for-user] para inicializar nosso cliente de API:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Depois, podemos [listar as organizações que nosso aplicativo pode acessar para o usuário][list-orgs-for-current-user]:

``` ruby
client.organizations.each do |organization|
  puts "User belongs to the #{organization[:login]} organization."
end
```

### Retorna todas as associações da organização do usuário

Se você leu a documentação na íntegra, talvez tenha observado um [método de API usado para listar as associações da organização pública de um usuário][list-public-orgs]. A maioria dos aplicativos deve evitar este método de API. Este método retorna apenas as associações de organizações públicas do usuário, não suas associações de organizações privadas.

Como um aplicativo, normalmente você quer todas as organizações do usuário que o seu aplicativo está autorizado a acessar. O fluxo de trabalho acima fornecerá exatamente isso.

[basics-of-authentication]: /rest/guides/basics-of-authentication
[list-public-orgs]: /rest/reference/orgs#list-organizations-for-a-user
[list-repositories-for-current-user]: /rest/reference/repos#list-repositories-for-the-authenticated-user
[list-orgs-for-current-user]: /rest/reference/orgs#list-organizations-for-the-authenticated-user
[list-teams]: /rest/reference/teams#list-teams
[make-authenticated-request-for-user]: /rest/guides/basics-of-authentication#making-authenticated-requests
[oap]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
[octokit.rb]: https://github.com/octokit/octokit.rb
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/discovering-resources-for-a-user
[publicize-membership]: /rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user
[register-oauth-app]: /rest/guides/basics-of-authentication#registering-your-app
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
