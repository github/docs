---
title: Descubrir los recursos para un usuario
intro: Aprende cómo encontrar los repositorios y organizaciones a los cuales puede acceder tu app para un usuario de manera confiable para tus solicitudes autenticadas a la API de REST.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135943'
---
Cuando se hacen solicitudes autenticadas a la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, las aplicaciones a menudo necesitan recuperar los repositorios y organizaciones actuales del usuario. En esta guía, te explicaremos cómo descubrir estos recursos de forma confiable.

Para interactuar con la API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, se usará [Octokit.rb][octokit.rb]. Puede encontrar el código fuente completo para este proyecto en el repositorio [platform-samples][platform samples].

## Introducción

Si todavía no lo ha hecho, debe leer la guía ["Aspectos básicos de la autenticación"][basics-of-authentication] antes de trabajar con los ejemplos siguientes. En los ejemplos siguientes se supone que ha [registrado una aplicación de OAuth][register-oauth-app] y que la [aplicación tiene un token de OAuth para un usuario][make-authenticated-request-for-user].

## Descubre los repositorios a los cuales tu app puede acceder para un usuario

Adicionalmente a tener sus propios repositorios personales, un usuario puede ser un colaborador en los repositorios que pertenezcan a otros usuarios y organizaciones. En conjunto, estos son los repositorios en donde el usuario tiene acceso privilegiado: ya sea que se trate de un repositorio en donde el usuario tiene acceso de escritura o lectura o que sea un repositorio {% ifversion fpt %}público{% elsif ghec or ghes %} público o interno{% elsif ghae %} interno{% endif %} al cual tenga acceso dicho usuario.

Los [ámbitos de OAuth][scopes] y las [directivas de aplicación de la organización][oap] determinan a qué repositorios puede acceder la aplicación para un usuario. Utiliza el siguiente flujo de trabajo para descubrir estos repositorios.

Como siempre, primero se necesita la biblioteca de Ruby [Octokit.rb de GitHub][octokit.rb]. Después, se configurará Octokit.rb para controlar automáticamente la [paginación][pagination].

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Luego, se pasará el [token de OAuth de la aplicación para un usuario determinado][make-authenticated-request-for-user]:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Después, ya se podrán capturar los [repositorios a los que la aplicación puede acceder para el usuario][list-repositories-for-current-user]:

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

## Descubre las organizaciones a las cuales puede acceder tu app para un usuario

Las aplicaciones pueden llevar a cabo todo tipo de tareas relacionadas con las organizaciones para un usuario. Para realizar estas tareas, la aplicación necesita una [autorización de OAuth][scopes] con permisos suficientes. Por ejemplo, el ámbito `read:org` permite [enumerar equipos][list-teams] y el ámbito `user` permite [publicitar la pertenencia a la organización del usuario][publicize-membership]. Una vez que un usuario haya otorgado uno o más de estos alcances a tu app, estarás listo para obtener las organizaciones de éste.

Al igual que se hizo al detectar los repositorios anteriores, se empezará por exigir la biblioteca de Ruby [Octokit.rb de GitHub][octokit.rb] y se configurará para que controle la [paginación][pagination] de forma automática:

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Después, se pasará el [token de OAuth de la aplicación para un usuario determinado][make-authenticated-request-for-user] a fin de inicializar el cliente de API:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Luego, se pueden [enumerar las organizaciones a las que la aplicación puede acceder para el usuario][list-orgs-for-current-user]:

``` ruby
client.organizations.each do |organization|
  puts "User belongs to the #{organization[:login]} organization."
end
```

### Devuelve todas las membresías de organización del usuario

Si ha leído toda la documentación, es posible que haya observado un [método de API para enumerar las pertenencias a organizaciones públicas de un usuario][list-public-orgs]. La mayoría de las aplicaciones deberían evitar este método de la API. Este método solo devuelve las membrecías de las organizaciones públicas del usuario y no sus membrecías de organizaciones privadas.

Como aplicación, habitualmente querrás obtener todas las organizaciones de los usuarios a las cuales tu app tiene acceso autorizado. El flujo de trabajo anterior te proporcionará exactamente eso.

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
