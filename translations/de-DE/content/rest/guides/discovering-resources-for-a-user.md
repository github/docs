---
title: Ermitteln von Ressourcen für einen Benutzer
intro: 'Hier erfährst du, wie du Repositorys und Organisationen findest, auf die deine App für Benutzer*innen zuverlässig für authentifizierte Anforderungen an die REST-API zugreifen kann.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131367'
---
Beim Erstellen authentifizierter Anforderungen an die {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API müssen Anwendungen häufig die Repositorys und Organisationen des aktuellen Benutzers abrufen. In diesem Leitfaden wird erläutert, wie diese Ressourcen zuverlässig entdeckt werden.

Um mit der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API zu interagieren, verwenden wir [Octokit.rb][octokit.rb]. Den vollständigen Quellcode für dieses Projekt findest du im Repository [platform-samples][platform samples].

## Erste Schritte

Falls du es noch nicht getan hast, solltest du den Leitfaden [„Grundlagen der Authentifizierung“][basics-of-authentication] lesen, bevor du die folgenden Beispiele durcharbeitest. In den folgenden Beispielen wird davon ausgegangen, dass du [eine OAuth-Anwendung registriert][register-oauth-app] hast und dass deine [Anwendung über ein OAuth-Token für einen Benutzer verfügt][make-authenticated-request-for-user].

## Entdecken der Repositorys, auf die deine App für einen Benutzer zugreifen kann

Zusätzlich zu seinen eigenen persönlichen Repositorys kann ein Benutzer ein Mitarbeiter im Besitz anderer Benutzer und Organisationen sein. Dies sind die Repositorys, in denen der Benutzer privilegierten Zugriff hat: entweder ein privates Repository, in dem der Benutzer Lese- oder Schreibzugriff hat, oder {% ifversion fpt %}ein öffentliches{% elsif ghec or ghes %}ein öffentliches oder internesl{% elsif ghae %}ein internes{% endif %} Repository, in dem der Benutzer Schreibzugriff hat.

[OAuth-Bereiche][scopes] und [Organisationsanwendungsrichtlinien][oap] bestimmen, auf welche dieser Repositorys deine App für einen Benutzer zugreifen kann. Verwende den folgenden Workflow, um diese Repositorys zu entdecken.

Wie immer wird zuerst die Ruby-Bibliothek [GitHub Octokit.rb][octokit.rb] benötigt. Anschließend konfigurieren wir Octokit.rb, um die [Paginierung][pagination] für uns automatisch handzuhaben.

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Als Nächstes übergeben wir das [OAuth-Token unserer Anwendung für einen bestimmten Benutzer][make-authenticated-request-for-user]:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Dann sind wir bereit, die [Repositorys abzurufen, auf die unsere Anwendung für den Benutzer zugreifen kann][list-repositories-for-current-user]:

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

## Entdecken der Organisationen, auf die deine App für einen Benutzer zugreifen kann

Anwendungen können alle Arten von organisationsbezogenen Aufgaben für einen Benutzer ausführen. Um diese Aufgaben auszuführen, benötigt die App eine [OAuth-Autorisierung][scopes] mit ausreichender Berechtigung. Der Bereich `read:org` ermöglicht es Dir beispielsweise, [Teams auflisten][list-teams] zu können, und der Bereich `user` ermöglicht es Dir, [die Mitgliedschaft des Benutzers zu veröffentlichen][publicize-membership]. Sobald ein Benutzer deiner App einen oder mehrere dieser Bereiche zugewiesen hat, kannst du die Organisationen des Benutzers abrufen.

Genau wie bei der Erkennung von Repositories (siehe oben) benötigen wir zunächst die GitHub-Ruby-Bibliothek [Octokit.rb][octokit.rb] und konfigurieren sie so, dass sie die [Paginierung][pagination] für uns übernimmt:

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Als Nächstes übergeben wir das [OAuth-Token unserer Anwendung für einen bestimmten Benutzer][make-authenticated-request-for-user], um unseren API-Client zu initialisieren:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Anschließend können wir [die Organisationen auflisten, auf die unsere Anwendung für den Benutzer zugreifen kann][list-orgs-for-current-user]:

``` ruby
client.organizations.each do |organization|
  puts "User belongs to the #{organization[:login]} organization."
end
```

### Zurückgeben aller Organisationsmitgliedschaften des Benutzers

Wenn du die Dokumente von vorne bis hinten gelesen hast, hast du möglicherweise eine [API-Methode für die Auflistung der Mitgliedschaften der öffentlichen Organisation eines Benutzers][list-public-orgs] bemerkt. Die meisten Anwendungen sollten diese API-Methode vermeiden. Diese Methode gibt nur die Mitgliedschaften der öffentlichen Organisation des Benutzers zurück, nicht seine privaten Organisationsmitgliedschaften.

Als Anwendung möchtest du in der Regel alle Organisationen des Benutzers haben, auf die deine Anwendung zugreifen darf. Der oben genannte Workflow gibt Dir genau das.

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
