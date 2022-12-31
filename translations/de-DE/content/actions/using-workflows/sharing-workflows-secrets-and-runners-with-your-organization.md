---
title: 'Freigeben von Workflows, Geheimnissen und Runnern für deine Organisation'
shortTitle: Sharing workflows with your organization
intro: 'Hier erfährst du, wie du Organisationsfeatures für die Zusammenarbeit mit deinem Team verwenden kannst, indem du Startworkflows, Geheimnisse und selbstgehostete Runner freigibst.'
redirect_from:
  - /actions/learn-github-actions/sharing-workflows-with-your-organization
  - /actions/learn-github-actions/sharing-workflows-secrets-and-runners-with-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
ms.openlocfilehash: bf80624fe1118d424a57f7c22efab6368c914819
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884261'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht

Wenn du Workflows und andere {% data variables.product.prodname_actions %}-Features für dein Team freigeben musst, kannst du mit einer {% data variables.product.prodname_dotcom %}-Organisation zusammenarbeiten. Mit einer Organisation kannst du Geheimnisse, Artefakte und selbstgehostete Runner zentral speichern und verwalten. Ebenfalls kannst du Startworkflows im `.github`-Repository erstellen und sie mit anderen Benutzer*innen in deiner Organisation teilen.

## Freigeben von {% ifversion internal-actions %}-Aktionen und {% endif %}-Workflows

{% ifversion internal-actions %} Du kannst sowohl einzelne Aktionen als auch gesamte Workflows für deine Organisation freigeben, ohne die Aktionen oder Workflows für die Allgemeinheit zu veröffentlichen. Du kannst Aktionen und Workflows auf gleiche Weise wiederverwenden, indem du in deiner Workflowdatei auf sie verweist. Auch kannst du Startworkflows erstellen, die als Vorlagen für neue Workflows dienen.
{% else %} Deine Organisation kann Workflows freigeben, indem sie die Workflows auf gleiche Weise wiederverwendet oder Startworkflows erstellt, die als Vorlagen für neue Workflows dienen.
{% endif %}

{% ifversion internal-actions %}
### Freigeben von Aktionen für dein Unternehmen

{% data reusables.actions.internal-actions-summary %} {% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Wiederverwenden von Workflows

{% data reusables.actions.reusable-workflows %} {% endif %}

### Verwenden von Startworkflows

{% data reusables.actions.workflow-organization-templates %} Weitere Informationen findest du unter [Erstellen von Startworkflows für deine Organisation](/actions/using-workflows/creating-starter-workflows-for-your-organization).

## Freigeben von Geheimnissen innerhalb einer Organisation

Du kannst deine Geheimnisse in einer Organisation zentral verwalten und sie dann für ausgewählte Repositorys zur Verfügung stellen. Das bedeutet auch, dass du ein Geheimnis an einem Ort aktualisieren kannst, wobei die Änderung für alle Repositoryworkflows gilt, die dieses Geheimnis verwenden.

Beim Erstellen eines Geheimnisses in einer Organisation kannst du mit einer Richtlinie einschränken, welche Repositorys darauf zugreifen können. Du kannst beispielsweise allen Repositorys Zugriff gewähren oder nur private Repositorys oder eine angegebene Liste von Repositorys zulassen.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. Klicke auf **Neues Geheimnis**.
1. Gib einen Namen für dein Geheimnis in das Eingabefeld **Name** ein.
1. Gib den **Wert** für das Geheimnis ein.
1. Wähle in der Dropdownliste **Repositoryzugriff** eine Zugriffsrichtlinie aus.
1. Klicke auf **Geheimnis hinzufügen**.

## Freigeben von selbstgehosteten Runnern innerhalb einer Organisation

Organisationsadministrator*innen können ihre selbstgehosteten Runner zu Gruppen hinzufügen, und dann Richtlinien dazu erstellen, welche Repositorys auf die Gruppe zugreifen können.

Weitere Informationen findest du unter [Verwalten des Zugriffs auf selbstgehostete Runner mithilfe von Gruppen](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).


## Nächste Schritte

Weitere Informationen zu {% data variables.product.prodname_actions %} findest du unter [Erstellen von Startworkflows für deine Organisation](/actions/using-workflows/creating-starter-workflows-for-your-organization).
