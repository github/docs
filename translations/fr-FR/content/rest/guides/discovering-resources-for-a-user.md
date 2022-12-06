---
title: Découverte de ressources pour un utilisateur
intro: Découvrez comment trouver les dépôts et les organisations auxquels votre application peut accéder pour un utilisateur de manière fiable pour vos requêtes authentifiées auprès de l’API REST.
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
ms.openlocfilehash: 9650ff8dee220f0b32d74cacb0f86acd236df5b6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131366'
---
Lorsque vous effectuez des demandes authentifiées auprès de l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, les applications doivent souvent récupérer les dépôts et les organisations de l’utilisateur actuel. Dans ce guide, nous allons expliquer comment découvrir de manière fiable ces ressources.

Pour interagir avec l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, nous allons utiliser [Octokit.rb][octokit.rb]. Vous trouverez le code source complet de ce projet dans le dépôt [platform-samples][platform samples].

## Prise en main

Si vous ne l’avez pas déjà fait, vous devez lire le guide [« Principes de base de l’authentification »][basics-of-authentication] avant d’utiliser les exemples ci-dessous. Les exemples ci-dessous supposent que vous avez [inscrit une application OAuth][register-oauth-app] et que votre [application a un jeton OAuth pour un utilisateur][make-authenticated-request-for-user].

## Découvrir les dépôts auxquels votre application peut accéder pour un utilisateur

En plus d’avoir ses propres dépôts personnels, un utilisateur peut collaborer aux dépôts détenus par d’autres utilisateurs et organisations. Collectivement, il s’agit des dépôts pour lesquels l’utilisateur dispose d’un accès privilégié : soit il s’agit d’un dépôt privé pour lequel l’utilisateur dispose d’un accès en lecture ou en écriture, soit il s’agit d’un dépôt {% ifversion fpt %}public{% elsif ghec or ghes %}public ou interne{% elsif ghae %}interne{% endif %} pour lequel l’utilisateur dispose d’un accès en écriture.

Les [étendues OAuth][scopes] et les [stratégies d’application d’organisation][oap] déterminent les dépôts auxquels votre application peut accéder pour un utilisateur. Utilisez le workflow ci-dessous pour découvrir ces dépôts.

Comme toujours, nous aurons d’abord besoin de la bibliothèque Ruby [Octokit.rb de GitHub][octokit.rb]. Ensuite, nous allons configurer Octokit.rb pour gérer automatiquement la [pagination][pagination].

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Ensuite, nous allons passer le [jeton OAuth de notre application pour un utilisateur donné][make-authenticated-request-for-user] :

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Ensuite, nous sommes prêts à récupérer les [dépôts auxquels notre application peut accéder pour l’utilisateur][list-repositories-for-current-user] :

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

## Découvrir les organisations auxquelles votre application peut accéder pour un utilisateur

Les applications peuvent effectuer toutes sortes de tâches liées à l’organisation pour un utilisateur. Pour effectuer ces tâches, l’application a besoin d’une [autorisation OAuth][scopes] avec un niveau d’autorisation suffisant. Par exemple, l’étendue `read:org` vous permet de [lister les équipes][list-teams], et l’étendue `user` vous permet de [publiciser l’appartenance de l’utilisateur à l’organisation][publicize-membership]. Une fois qu’un utilisateur a accordé une ou plusieurs de ces étendues à votre application, vous êtes prêt à récupérer les organisations de l’utilisateur.

Comme nous l’avons fait lors de la découverte des dépôts ci-dessus, nous allons commencer par exiger la bibliothèque Ruby [Octokit.rb de GitHub][octokit.rb] et la configurer de sorte qu’elle se charge de la [ pagination][pagination] :

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Ensuite, nous allons passer le [jeton OAuth d’un utilisateur donné][make-authenticated-request-for-user]pour notre application afin d’initialiser notre client API :

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Ensuite, nous pouvons [lister les organisations auxquelles notre application peut accéder pour l’utilisateur][list-orgs-for-current-user] :

``` ruby
client.organizations.each do |organization|
  puts "User belongs to the #{organization[:login]} organization."
end
```

### Retourner toutes les appartenances de l’utilisateur à l’organisation

Si vous avez lu les documents dans leur intégralité, vous avez peut-être noté une [méthode d’API qui permet de lister les appartenances d’un utilisateur à une organisation publique][list-public-orgs]. La plupart des applications doivent éviter cette méthode d’API. Cette méthode retourne uniquement les appartenances de l’utilisateur à une organisation publique, et non ses appartenances à une organisation privée.

En tant qu’application, vous souhaitez généralement toutes les organisations de l’utilisateur auxquelles vous êtes autorisé à accéder. Le workflow ci-dessus vous le permettra.

[basics-of-authentication]: /rest/guides/basics-of-authentication
[list-public-orgs]: /rest/reference/orgs#list-organizations-for-a-user
[list-repositories-for-current-user]: /rest/reference/repos#list-repositories-for-the-authenticated-user
[list-orgs-for-current-user]: /rest/reference/orgs#list-organizations-for-the-authenticated-user
[list-teams]: /rest/reference/teams#list-teams
[make-authenticated-request-for-user]: /rest/guides/basics-of-authentication#making-authenticated-requests
[oap]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
[octokit.rb]: https://github.com/octokit/octokit.rb
[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/discovering-resources-for-a-user
[publicize-membership]: /rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user
[register-oauth-app]: /rest/guides/basics-of-authentication#registering-your-app
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
