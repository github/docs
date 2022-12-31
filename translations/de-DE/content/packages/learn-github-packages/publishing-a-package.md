---
title: Veröffentlichen eines Pakets
intro: 'Du kannst ein Paket im {% data variables.product.prodname_registry %} veröffentlichen, um das Paket für andere zum Herunterladen und nochmaligen Verwenden verfügbar zu machen.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/publishing-a-package
  - /packages/publishing-and-managing-packages/publishing-a-package
permissions: Anyone with write permissions for a repository can publish a package to that repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: e13e33b6085fbdd736d77d7d8b4998595ea7ffcc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145134362'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Informationen zu veröffentlichten Paketen

Du kannst anderen dabei helfen, dein Paket zu verwenden und zu verstehen, indem du eine Beschreibung und weitere Details wie eine Installationsanleitung und Verwendungsanweisungen auf der Seite des Pakets angibst. {% data variables.product.product_name %} stellt Metadaten für jede Version bereit, zum Beispiel das Veröffentlichungsdatum, die Downloadaktivität und die neuesten Versionen. Eine Beispielpaketseite findest du unter [@Codertocat/hello-world-npm](https://github.com/Codertocat/hello-world-npm/packages/10696?version=1.0.1).

{% data reusables.package_registry.public-or-private-packages %} Ein Repository kann mit mehr als einem Paket verknüpft sein. Gib in der README-Datei und der Beschreibung aussagekräftige Informationen zu jedem Paket an, um Verwirrung zu vermeiden.

{% ifversion fpt or ghec %} Wenn eine neue Version eines Pakets ein Sicherheitsrisiko behebt, solltest du einen Sicherheitsrisiko in deinem Repository angeben. {% data variables.product.prodname_dotcom %} überprüft jede veröffentlichte Sicherheitsempfehlung und verwendet sie, um {% data variables.product.prodname_dependabot_alerts %} an betroffene Repositorys zu senden. Weitere Informationen findest du unter [Informationen zu GitHub-Sicherheitsempfehlungen](/github/managing-security-vulnerabilities/about-github-security-advisories).
{% endif %}

## Veröffentlichen eines Pakets

Du kannst ein Paket in {% data variables.product.prodname_registry %} mit jedem {% ifversion fpt or ghae or ghec %}unterstützten Paketclient{% else %}Pakettyp, der für deine Instanz aktiviert wurde,{% endif %} veröffentlichen, indem du dieselben allgemeinen Anweisungen befolgst.

1. Erstelle ein Zugriffstoken mit dem entsprechenden Geltungsbereich für die gewünschte Aufgabe, oder verwende ein vorhandenes. Weitere Informationen findest du unter [Informationen zu Berechtigungen für {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages).
2. Befolge die Anweisungen für deinen Paketclient, um dich mit deinem Zugriffstoken bei {% data variables.product.prodname_registry %} zu authentifizieren.
3. Veröffentliche das Paket mithilfe der Anweisungen für deinen Paketclient.

Spezifische Anweisungen zu deinem Paketclient findest du unter [Arbeiten mit einer GitHub-Paketregistrierung](/packages/working-with-a-github-packages-registry).

Nachdem du ein Paket veröffentlicht hast, kannst du das Paket auf {% data variables.product.prodname_dotcom %} ansehen. Weitere Informationen findest du unter [Anzeigen von Paketen](/packages/learn-github-packages/viewing-packages).
