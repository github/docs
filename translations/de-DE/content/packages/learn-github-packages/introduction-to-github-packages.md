---
title: Einführung in GitHub-Pakete
intro: '{% data variables.product.prodname_registry %} ist ein Softwarepakethostingdienst, mit dem du deine Softwarepakete privat {% ifversion ghae %} für bestimmte Benutzer*innen oder intern für dein Unternehmen{% else %}oder öffentlich{% endif %} hosten und Pakete als Abhängigkeiten in deinen Projekten verwenden kannst.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
  - /packages/learn-github-packages/about-github-packages
  - /packages/learn-github-packages/core-concepts-for-github-packages
  - /packages/guides/about-github-container-registry
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Introduction
ms.openlocfilehash: a141c93378f836eebf5ff33b0ced482409d6e577
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147704947'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Informationen zu {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} ist eine Plattform zum hosten und verwalten von Paketen, einschließlich Containern und anderen Abhängigkeiten. {% data variables.product.prodname_registry %} kombiniert deinen Quellcode und deine Pakete an einem Ort, um eine integrierte Berechtigungsverwaltung{% ifversion fpt or ghec %} und Abrechnung{% endif %} bereitzustellen, sodass du deine Software-Entwicklung auf {% data variables.product.product_name %} zentralisieren kannst.

Du kannst {% data variables.product.prodname_registry %} mit {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-APIs, {% data variables.product.prodname_actions %} und Webhooks integrieren, um einen End-to-End-DevOps-Workflow zu erstellen, der deine Code-, CI- und Bereitstellungslösungen enthält.

{% data variables.product.prodname_registry %} bietet verschiedene Paketregistrierungen für häufig verwendete Paket-Manager so wie npm, RubyGems, Apache Maven, Gradle, Docker und NuGet. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}s {% data variables.product.prodname_container_registry %} ist für Container optimiert und unterstützt Docker- und OCI-Images. {% endif %} Weitere Informationen zu den verschiedenen Paketregistrierungen, die {% data variables.product.prodname_registry %} unterstützen, findest du unter „[Arbeiten mit einer {% data variables.product.prodname_registry %}-Registrierung](/packages/working-with-a-github-packages-registry)".

{% ifversion fpt or ghec %}

![Diagramm mit Unterstützung von Paketen für die Containerregistrierung, RubyGems, npm, Apache Maven, NuGet und Gradle](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![Diagramm mit Unterstützung von Paketen für die Containerregistrierung, RubyGems, npm, Apache Maven, Gradle, NuGet und Docker](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

Du kannst die Infodatei eines Pakets sowie die Metadaten wie Lizensierung, Download-Statistiken, Versionsverlauf und mehr auf {% data variables.product.product_name %} anzeigen. Weitere Informationen findest du unter [Anzeigen von Paketen](/packages/manage-packages/viewing-packages).

{% ifversion ghes %}

Weitere Informationen zur Konfiguration von {% data variables.product.prodname_registry %} auf {% data variables.product.product_name %} findest du unter [Erste Schritte mit {% data variables.product.prodname_registry %} für dein Unternehmen](/admin/packages/getting-started-with-github-packages-for-your-enterprise).

{% endif %}

### Übersicht über Paketberechtigungen und Sichtbarkeit

|                    |        |
|--------------------|--------------------|
| Berechtigungen        | {% ifversion fpt or ghec %}Die Berechtigungen für ein Paket werden entweder von dem Repository geerbt, in dem das Paket gehostet wird, oder sie können für Pakete in der {% data variables.product.prodname_ghcr_and_npm_registry %} für bestimmte Benutzer- oder Organisationskonten definiert werden. Weitere Informationen findest du unter „[Konfigurieren der Zugriffssteuerung und Sichtbarkeit eines Pakets](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)“. {% else %}Jedes Paket erbt die Berechtigungen des Repositorys, bei dem das Paket gehostet ist. <br> <br> Jeder, der Leseberechtigungen für ein Repository hat, kann ein Paket als Abhängigkeit in einem Projekt installieren und jeder, der Schreibberechtigungen hat, kann eine neue Paketversion veröffentlichen. {% endif %} |
| Sichtbarkeit         | {% data reusables.package_registry.public-or-private-packages %} |

Weitere Informationen findest du unter [Informationen zu Berechtigungen für {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages).

{% ifversion fpt or ghec %}
## Informationen zur Abrechnung für {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} Weitere Informationen findest du unter „[Informationen zur Abrechnung für {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".

{% endif %}

## Unterstützte Clients und Formate
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

{% data variables.product.prodname_registry %} verwendet die nativen Paket-Tool-Befehle, mit denen du bereits vertraut bist, um Paketversionen zu veröffentlichen und zu installieren.
### Unterstützung für Paketregistrierungen

| Sprache | BESCHREIBUNG | Paketformat | Paketclient |
| --- | --- | --- | --- |
| JavaScript | Node-Paket-Manager | `package.json`  | `npm` |
| Ruby |  RubyGems-Paket-Manager | `Gemfile` |  `gem` |
| Java | Apache Maven-Projektmanagement und Verständnistool | `pom.xml` |  `mvn` |
| Java | Gradle-Build-Automatisierungs-Tool für Java | `build.gradle` oder `build.gradle.kts`  | `gradle`  |
| .NET | NuGet-Paketmanagement für .NET | `nupkg`  |  `dotnet`-CLI |
| – | Docker-Containerverwaltung | `Dockerfile` | `Docker` |

{% ifversion ghes %} {% note %}

**Hinweis:** Beim Aktivieren der Docker-Registrierung empfehlen wir dringend, die Unterdomänenisolation zu aktivieren. Weitere Informationen findest du unter [Aktivieren der Unterdomänenisolation](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation).

{% endnote %}

{% endif %}

Weitere Informationen zum Konfigurieren des Paket-Clients für die Verwendung mit {% data variables.product.prodname_registry %} findest du unter „[Arbeiten mit einer {% data variables.product.prodname_registry %}-Registrierung](/packages/working-with-a-github-packages-registry)".

{% ifversion fpt or ghec %} Weitere Informationen zu {% data variables.product.prodname_container_registry %} findest du unter „[Arbeiten mit der Containerregistrierung](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)“.
{% endif %}
## Bei {% data variables.product.prodname_registry %} authentifizieren

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

## Verwalten von Paketen

{% ifversion fpt or ghec %} Du kannst ein Paket in der {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}-Benutzeroberfläche oder mit der REST-API löschen. Weitere Informationen findest du unter [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package) und [{% data variables.product.prodname_registry %}-API](/rest/reference/packages).

{% data reusables.package_registry.no-graphql-to-delete-packages %} {% endif %}

{% ifversion ghes %} Du kannst ein privates oder öffentliches Paket in der {% data variables.product.product_name %}-Benutzeroberfläche löschen. Oder für auf Repository bezogene Pakete kannst du eine Version eines privaten Pakets mithilfe von GraphQL löschen.
{% endif %}

{% ifversion ghae %} Du kannst eine Version eines Pakets in der {% data variables.product.product_name %}-Benutzeroberfläche oder mithilfe der GraphQL-API löschen.
{% endif %}

Wenn du die GraphQL-API zum Abfragen und Löschen privater Pakete verwendest, musst du das gleiche Token verwenden, das du zum Authentifizieren von {% data variables.product.prodname_registry %} verwendest.

Weitere Informationen findest du unter {% ifversion ghes or ghae %}[Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package) und {% endif %}[Erstellen von Aufrufen mit GraphQL](/graphql/guides/forming-calls-with-graphql).

Du kannst Webhooks so konfigurieren, dass paketbezogene Ereignisse abonniert werden, so wie wenn ein Paket veröffentlicht oder aktualisiert wird. Weitere Informationen findest du im [Webhook-Ereignis `package`](/webhooks/event-payloads/#package).

## Kontaktaufnahme mit dem Support

{% ifversion fpt or ghec %} Wenn du Feedback oder Feature-Anfragen für {% data variables.product.prodname_registry %} hast, verwende das [{% data variables.product.prodname_github_community %}-Forum](https://github.com/orgs/community/discussions/categories/actions-and-packages).

Wende dich an {% data variables.contact.github_support %} über {% data variables.product.prodname_registry %} unter Verwendung von [unserem Kontaktformular](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages), wenn:

* Du erlebst etwas, das der Dokumentation widerspricht
* Du hast unbestimmte oder unklare Fehler
* Dein veröffentlichtes Paket enthält vertrauliche Daten, z. B. Verstöße gegen die Datenschutz-Grundverordnung (DSGVO), API-Schlüssel oder personenbezogene Informationen

{% else %} Wenn du Unterstützung für {% data variables.product.prodname_registry %} benötigst, wende dich an deine Websiteadministratoren.

{% endif %}
