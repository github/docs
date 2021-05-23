---
title: Descobrir recursos para um usuário
intro: Saiba como encontrar os repositórios e organizações que o seu aplicativo pode acessar para um usuário de forma confiável para as suas solicitações autenticadas para a API REST.
redirect_from:
  - /guides/discovering-resources-for-a-user/
  - /v3/guides/discovering-resources-for-a-user
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

 

Ao fazer solicitações autenticadas para a API do {% data variables.product.product_name %}, os aplicativos geralmente precisam obter repositórios e organizações do usuário atual. Neste guia, explicaremos como descobrir esses recursos de forma confiável.

Para interagir com a API do {% data variables.product.product_name %}, vamos usar [Octokit.rb][octokit.rb]. Você pode encontrar o código-fonte completo para este projeto no repositório de [platform-samples][platform samples].

### Introdução

Se você ainda não o fez, você deverá ler o guia ["Princípios básicos da autenticação"][basics-of-authentication] antes de trabalhar com exemplos abaixo. Os exemplos abaixo assumem que você [registrou um aplicativo OAuth][register-oauth-app] e que seu aplicativo [tem um token do OAuth para um usuário][make-authenticated-request-for-user].

### Descubra os repositórios que o seu aplicativo pode acessar para um usuário

Além de ter seus próprios repositórios pessoais, um usuário pode ser um colaborador em repositórios pertencentes a outros usuários e organizações. Coletivamente, estes são os repositórios em que o usuário tem acesso privilegiado: é um repositório privado em que o usuário tem acesso de leitura ou gravação ou é um repositório {% if currentVersion ! "github-ae@latest" %}público{% else %}interno{% endif %} em que o usuário tem acesso de gravação.

[Os escopos do OAuth][scopes] e as [políticas dos aplicativos da organização][oap] determinam quais desses repositórios o seu aplicativo pode acessar para um usuário. Use o fluxo de trabalho abaixo para descobrir esses repositórios.

Como sempre, primeiro precisaremos da biblioteca de Ruby do [GitHub Octokit.rb][octokit.rb]. Em seguida, vamos configurar o Octokit.rb para gerenciar automaticamente a [paginação][pagination] para nós.

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Em seguida, passaremos o [Token OAuth para um determinado usuário][make-authenticated-request-for-user] do nosso aplicativo:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Em seguida, estaremos prontos para buscar os [repositórios que o nosso aplicativo pode acessar para o usuário][list-repositories-for-current-user]:

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

### Descubra as organizações que o seu aplicativo pode acessar para um usuário

Os aplicativos podem executar todos os tipos de tarefas relacionadas à organização para um usuário. Para executar essas tarefas, o aplicativo precisa de uma [autorização do OAuth][scopes] com permissão suficiente. Por exemplo, o escopo `read:org` permite que você [liste as equipes][list-teams] e o escopo do `usuário` permite que você [publique a associação da organização do usuário][publicize-membership]. Assim que um usuário conceder um ou mais desses escopos para o seu aplicativo, você estará pronto para buscar as organizações do usuário.

Assim como fizemos ao descobrir os repositórios acima, começaremos exigindo a biblioteca de Ruby do [GitHub's Octokit.rb][octokit.rb] Biblioteca Ruby e configurando-a para cuidar da [paginação][pagination] para nós:

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Em seguida, passaremos o [Token OAuth para um determinado usuário][make-authenticated-request-for-user] do nosso aplicativo para inicializar o nosso cliente da API:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Em seguida, podemos [listar as organizações que o nosso aplicativo pode acessar para o usuário][list-orgs-for-current-user]:

``` ruby
client.organizations.each do |organization|
  puts "User belongs to the #{organization[:login]} organization."
end
```

#### Retorna todas as associações da organização do usuário

Se você leu a documentação do princípio ao fim, é possível que você tenha notado um [método da API para listar as associações de organizações públicas de um usuário][list-public-orgs]. A maioria dos aplicativos deve evitar este método de API. Este método retorna apenas as associações de organizações públicas do usuário, não suas associações de organizações privadas.

Como um aplicativo, normalmente você quer todas as organizações do usuário que o seu aplicativo está autorizado a acessar. O fluxo de trabalho acima fornecerá exatamente isso.

[basics-of-authentication]: /rest/guides/basics-of-authentication
[list-public-orgs]: /rest/reference/orgs#list-organizations-for-a-user
[list-repositories-for-current-user]: /rest/reference/repos#list-repositories-for-the-authenticated-user
[list-orgs-for-current-user]: /rest/reference/orgs#list-organizations-for-the-authenticated-user
[list-teams]: /rest/reference/teams#list-teams
[make-authenticated-request-for-user]: /rest/guides/basics-of-authentication#making-authenticated-requests
[make-authenticated-request-for-user]: /rest/guides/basics-of-authentication#making-authenticated-requests
[oap]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
[octokit.rb]: https://github.com/octokit/octokit.rb
[octokit.rb]: https://github.com/octokit/octokit.rb
[octokit.rb]: https://github.com/octokit/octokit.rb
[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/discovering-resources-for-a-user
[publicize-membership]: /rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user
[register-oauth-app]: /rest/guides/basics-of-authentication#registering-your-app
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
