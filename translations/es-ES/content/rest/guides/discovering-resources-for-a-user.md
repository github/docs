---
title: Descubrir los recursos para un usuario
intro: Aprende cómo encontrar los repositorios y organizaciones a los cuales puede acceder tu app para un usuario de manera confiable para tus solicitudes autenticadas a la API de REST.
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

 

Cuando se hacen solicitudes autenticadas a la API de {% data variables.product.product_name %}, las aplicaciones a menudo tienen que obtener los repositorios y organizaciones del usuario. En esta guía, te explicaremos cómo descubrir estos recursos de forma confiable.

Para interactuar con la API de {% data variables.product.product_name %}, estaremos utilizando [Octokit.rb][octokit.rb]. Puedes encontrar todo el código fuente de este proyecto en el repositorio [platform-samples][platform samples].

### Empezar

Si aún no lo has hecho, deberías leer la guía de ["Conceptos Básicos de la Autenticación"][basics-of-authentication] antes de comenzar a trabajar en los siguientes ejemplos. Éstos asumen que tienes una [aplicación de OAuth registrada][register-oauth-app] y de que [tu aplicación tiene un token de OAuth para un usuario][make-authenticated-request-for-user].

### Descubre los repositorios a los cuales tu app puede acceder para un usuario

Adicionalmente a tener sus propios repositorios personales, un usuario puede ser un colaborador en los repositorios que pertenezcan a otros usuarios y organizaciones. En conjunto, estos son los repositorios en donde el usuario tiene acceso privilegiado: ya sea que constituya un repositorio privado en donde el usuario tenga acceso de lectura o escritura, o que sea un repositorio {% if currentVersion != "github-ae@latest" %}público{% else %}interno{% endif %} en donde el usuario tenga acceso de escritura.

Los [alcances de OAuth][scopes] y las [políticas de aplicación de la organización][oap] determinan a cuáles de estos repositorios puede acceder tu app para un usuario. Utiliza el siguiente flujo de trabajo para descubrir estos repositorios.

Como siempre, primero necesitaremos la biblioteca de Ruby del [Octokit.rb de GitHub][octokit.rb]. Luego, configuraremos a Octokit.rb para que nos gestione automáticamente la [paginación][pagination].

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Después, pasaremos el [Token de OAuth para un usuario específico][make-authenticated-request-for-user] de nuestra aplicación:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Luego estaremos listos para obtener los [repositorios a los cuales puede acceder nuestra aplicación para el usuario][list-repositories-for-current-user]:

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

### Descubre las organizaciones a las cuales puede acceder tu app para un usuario

Las aplicaciones pueden llevar a cabo todo tipo de tareas relacionadas con las organizaciones para un usuario. Para llevar a cabo estas tareas, la app necesita una [Autorización de OAuth][scopes] con permisos suficientes. Por ejemplo, el alcance `read:org` te permite [listar los equipos][list-teams], y el alcance `user` te permite [publicitar la membresía organizacional del usuario][publicize-membership]. Una vez que un usuario haya otorgado uno o más de estos alcances a tu app, estarás listo para obtener las organizaciones de éste.

Tal como hicimos cuando descubrimos los repositorios anteriormente, comenzaremos requiriendo la biblioteca de Ruby [Octokit.rb de GitHub][octokit.rb] y configurándola para que se encarge de la [paginación][pagination] por nosotros:

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Después, pasaremos el [Token de OAuth para un usuario específico][make-authenticated-request-for-user] de nuestra aplicación para inicializar nuestro cliente de la API:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Después, podremos [listar las organizaciones a las cuales tiene acceso nuestra aplicación para el usuario][list-orgs-for-current-user]:

``` ruby
client.organizations.each do |organization|
  puts "User belongs to the #{organization[:login]} organization."
end
```

#### Devuelve todas las membresías de organización del usuario

Si leíste los documentos de principio a fin, tal vez hayas notado que hay un [Método de la API para listar las membrecías de organizaciones públicas de un usuario][list-public-orgs]. La mayoría de las aplicaciones deberían evitar este método de la API. Este método solo devuelve las membrecías de las organizaciones públicas del usuario y no sus membrecías de organizaciones privadas.

Como aplicación, habitualmente querrás obtener todas las organizaciones de los usuarios a las cuales tu app tiene acceso autorizado. El flujo de trabajo anterior te proporcionará exactamente eso.

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
[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/discovering-resources-for-a-user
[publicize-membership]: /rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user
[register-oauth-app]: /rest/guides/basics-of-authentication#registering-your-app
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
