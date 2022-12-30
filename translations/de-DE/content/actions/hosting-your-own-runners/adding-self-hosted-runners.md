---
title: Selbst-gehostete Runner hinzufügen
intro: 'Du kannst einem Repository, einer Organisation oder einem Unternehmen einen selbstgehosteten Runner hinzufügen.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Add self-hosted runners
ms.openlocfilehash: c58fbc6ac67fe1466458888eb0c55f58483dac6c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109297'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Du kannst einem Repository, einer Organisation oder einem Unternehmen einen selbstgehosteten Runner hinzufügen.

Wenn du ein Organisations- oder Unternehmensadministrator bist, möchtest du möglicherweise deine selbstgehosteten Runner auf Organisations- oder Unternehmensebene hinzufügen. Mit diesem Ansatz machst du den Runner für mehrere Repositorys in deiner Organisation oder deinem Unternehmen verfügbar und kannst deine Runner an einem zentralen Ort verwalten.

Informationen zu unterstützten Betriebssystemen für selbstgehostete Runner oder zur Verwendung von selbstgehosteten Runnern mit einem Proxyserver findest du unter [Informationen zu selbstgehosteten Runnern](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners).

{% ifversion not ghae %} {% warning %}

**Warnung:** {% data reusables.actions.self-hosted-runner-security %}

Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)“.

{% endwarning %} {% endif %}

{% ifversion fpt or ghec or ghes %}

Du kannst eine Automatisierung einrichten, um die Anzahl der selbstgehosteten Runner zu skalieren. Weitere Informationen findest du unter [Automatische Skalierung mit selbstgehosteten Runnern](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners).

{% endif %}

## Voraussetzungen

{% data reusables.actions.self-hosted-runners-prerequisites %}

## Einen selbst-gehosteten Runner zu einem Repository hinzufügen

Du kannst selbst-gehostete Runner zu einem einzigen Repository hinzufügen. Um einem Benutzerrepository einen selbstgehosteten Runner hinzuzufügen, musst du der Repositorybesitzer sein. Für ein Organisationsrepository musst du der Besitzer der Organisation sein oder über Administratorzugriff auf das Repository verfügen. Weitere Informationen zum Hinzufügen eines selbstgehosteten Runners mit der REST-API findest du unter [Selbstgehostete Runner](/rest/reference/actions#self-hosted-runners).

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %}
1. Klicke auf **Neuer selbstgehosteter Runner**.
{% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %}
1. Klicke unter {% ifversion ghes or ghae or ghec %}„Runner“{% else %}„Selbstgehostete Runner“{% endif %} auf **Runner hinzufügen**.
{% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

Weitere Informationen findest du unter [Überwachen von und Behandeln von Problemen mit selbstgehosteten Runnern](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners).

## Einen selbst-gehosteten Runner zu einer Organisation hinzufügen

Du kannst selbst-gehostete Runner auf Organisationsebene hinzufügen, wo sie verwendet werden können, um Jobs für mehrere Repositories in einer Organisation zu verarbeiten. Um einen selbst-gehosteten Runner zu einer Organisation hinzuzufügen, musst du Organisationsinhaber sein. Weitere Informationen zum Hinzufügen eines selbstgehosteten Runners mit der REST-API findest du unter [Selbstgehostete Runner](/rest/reference/actions#self-hosted-runners).

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% ifversion actions-hosted-runners %}1. Klicke auf **Neuer Runner** und dann auf **Neuer selbstgehosteter Runner**.{% else %}1. Klicke auf **Neuer Runner**.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. Klicke unter {% ifversion ghes or ghae %}„Runner“ auf **Neu hinzufügen** und anschließend auf **Neuer Runner**.{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

Weitere Informationen findest du unter [Überwachen von und Behandeln von Problemen mit selbstgehosteten Runnern](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners).

{% data reusables.actions.self-hosted-runner-public-repo-access %}

## Hinzufügen eines selbstgehosteten Runners zu einem Unternehmen

{% ifversion fpt %}Wenn du {% data variables.product.prodname_ghe_cloud %} verwendest, kannst du{% elsif ghec or ghes or ghae %}Du kannst{% endif %} einem Unternehmen selbstgehostete Runner hinzufügen. Von dort können sie dann mehreren Organisationen zugewiesen werden. Die Organisationsadministrator*innen können dann steuern, welche Repositorys sie verwenden können. {% ifversion fpt %}Weitere Informationen findest du in der [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise).{% endif %}

{% ifversion ghec or ghes or ghae %} Neue Runner werden der Standardgruppe zugewiesen. Du kannst die Gruppe des Runners ändern, nachdem du den Läufer registriert hast. Weitere Informationen findest du unter [Verwalten des Zugriffs auf selbstgehostete Runner](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}

Um einem Unternehmen einen selbstgehosteten Runner hinzufügen zu können, musst du ein Unternehmensbesitzer sein. Weitere Informationen zum Hinzufügen eines selbstgehosteten Runners mit der REST-API findest du unter den Unternehmensendpunkten in der [{% data variables.product.prodname_actions %}-REST-API](/rest/reference/actions#self-hosted-runners).

{% endif %}

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

Weitere Informationen findest du unter [Überwachen von und Behandeln von Problemen mit selbstgehosteten Runnern](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners).

{% data reusables.actions.self-hosted-runner-public-repo-access %}

### Verfügbarmachen von Unternehmensrunnern für Repositorys

Standardmäßig sind Runner in der selbstgehosteten Runnergruppe „Default“ eines Unternehmens für alle Organisationen im Unternehmen verfügbar, dies gilt aber nicht für alle Repositorys in jeder Organisation.

Um eine selbstgehostete Runnergruppe auf Unternehmensebene für ein Organisationsrepository verfügbar zu machen, musst du möglicherweise die geerbten Einstellungen der Organisation für die Runnergruppe ändern, um den Runner für Repositorys in der Organisation verfügbar zu machen.

Weitere Informationen zum Ändern der Zugriffseinstellungen für Runnergruppen findest du unter [Verwalten des Zugriffs auf selbstgehostete Runner mithilfe von Gruppen](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).
{% endif %}

{% ifversion ghec or ghes or ghae %}

## Weitere Informationsquellen

- [Erste Schritte mit selbstgehosteten Runnern für dein Unternehmen](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)

{% endif %}
