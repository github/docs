---
title: Erste Schritte mit selbstgehosteten Runnern für dein Unternehmen
shortTitle: Self-hosted runners
intro: 'Du kannst einen Runnercomputer für dein Unternehmen konfigurieren, damit deine Entwickler*innen Workflows mit {% data variables.product.prodname_actions %} automatisieren können.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
permissions: 'Enterprise owners can configure policies for {% data variables.product.prodname_actions %} and add self-hosted runners to the enterprise.'
type: quick_start
topics:
  - Actions
  - Enterprise
  - Fundamentals
ms.openlocfilehash: e369c7bf3a9da15cd4e0ee43f54815e89ab4b45a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106621'
---
## Informationen zu selbstgehosteten Runnern für {% data variables.product.prodname_actions %}

{% data reusables.actions.about-actions-for-enterprises %} Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_actions %} für Unternehmen](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises).

Mit {% data variables.product.prodname_actions %} können Entwickler einzelne Tasks schreiben und kombinieren, sogenannte Aktionen, um benutzerdefinierte Workflows zu erstellen. {% ifversion ghes or ghae %}Um {% data variables.product.prodname_actions %} für {% ifversion ghae %}dein Unternehmen{% elsif ghes %} {% data variables.location.product_location %}{% endif %}zu aktivieren, musst du mindestens einen Computer für die Ausführung von Aufträgen hosten.{% endif %} {% ifversion ghec %}Du kannst deinen eigenen Runnercomputer für die Ausführung von Aufträgen hosten. Dieser{% elsif ghes or ghae %}Dieser{% endif %} Computer wird als selbstgehosteter Runner bezeichnet. {% data reusables.actions.self-hosted-runner-locations %} {% data reusables.actions.self-hosted-runner-architecture %} {% ifversion ghec %}Alle{% elsif ghes or ghae %}Selbstgehostete{% endif %} Runner können Linux, Windows oder macOS ausführen. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners)“.

{% ifversion ghec %}

Stattdessen kannst du Runnercomputer verwenden, die {% data variables.product.company_short %} -Hosts verwenden. Von {% data variables.product.company_short %} gehostete Runner werden in diesem Leitfaden nicht aufgegriffen. Weitere Informationen findest du unter [Informationen zu von {% data variables.product.company_short %} gehosteten Runnern](/actions/using-github-hosted-runners/about-github-hosted-runners).

{% endif %}

In diesem Leitfaden erfährst du, wie du einen zentralisierten Verwaltungsansatz für selbstgehostete Runner für {% data variables.product.prodname_actions %} in deinem Unternehmen umsetzt. Für diesen Leitfaden wirst du die folgenden Aufgaben ausführen:

1. Konfigurieren einer eingeschränkte Richtlinie, um die Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbare Workflows einzuschränken{% endif %}, die innerhalb deines Unternehmens ausgeführt werden können
1. Bereitstellen eines selbstgehosteten Runners für dein Unternehmen
1. Erstellen einer Gruppe zum Verwalten des Zugriffs auf die für dein Unternehmen verfügbaren Runner
1. Optionales weiteres Einschränken der Repositorys, die den Runner verwenden können
1. Optionales Erstellen benutzerdefinierter Tools, um deine selbstgehosteten Runner automatisch zu skalieren

Darüber hinaus findest du hier weitere Informationen zum Überwachen und Sichern deiner selbstgehosteten Runner,{% ifversion ghes or ghae %} zum Zugreifen auf Aktionen aus {% data variables.product.prodname_dotcom_the_website %}{% endif %} sowie zum Anpassen der Software auf deinen Runnercomputern.

Nachdem du den Leitfaden durchgearbeitet hast, {% ifversion ghec or ghae %}können Mitglieder deines Unternehmens{% elsif ghes %}Benutzer von {% data variables.location.product_location %}{% endif %} Workflowaufträge aus {% data variables.product.prodname_actions %} auf einem selbstgehosteten Runnercomputer ausführen.

## Voraussetzungen

{% data reusables.actions.self-hosted-runners-prerequisites %}

- Dein Unternehmen muss über mindestens eine Organisation verfügen. Weitere Informationen findest du unter [Informationen zu Organisationen](/organizations/collaborating-with-groups-in-organizations/about-organizations) und [Grundlegendes Neuerstellen einer Organisation](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

## 1. Konfigurieren von Richtlinien für {% data variables.product.prodname_actions %}

Aktiviere zunächst {% data variables.product.prodname_actions %} für alle Organisationen, und konfiguriere eine Richtlinie, um die Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbaren Workflows{% endif %} einzuschränken, die {% ifversion ghec or ghae%}innerhalb deines Unternehmens auf {% data variables.product.product_name %}{% elsif ghes %}auf {% data variables.location.product_location %}{% endif %} ausgeführt werden können. Optional können Organisationsbesitzer*innen diese Richtlinien für jede Organisation weiter einschränken.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. Wähle unter „Richtlinien“ die Option **Für alle Organisationen aktivieren** aus.
   
   ![Screenshot der Richtlinie „Für alle Organisationen aktivieren“ für {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-enable-for-all-organizations.png)
1. Wähle {% data reusables.actions.policy-label-for-select-actions-workflows %} und **Von GitHub erstellte Aktionen zulassen** aus, um lokale Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbare Workflows{% endif %} sowie Aktionen zuzulassen, die von {% data variables.product.company_short %} erstellt wurden.

   {% ifversion actions-workflow-policy %} ![ Screenshot von „Ausgewählte Aktionen zulassen“ und „Von {% data variables.product.company_short %} erstellte Aktionen zulassen“ für {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github-with-workflows.png) {%- else %} ![Screenshot von „Ausgewählte Aktionen zulassen“ und „Von {% data variables.product.company_short %} erstellte Aktionen zulassen“ für {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github.png) {%- endif %}
1. Klicke auf **Speichern**.

Du kannst zusätzliche Richtlinien konfigurieren, um die für {% ifversion ghec or ghae %}Mitglieder des Unternehmens{% elsif ghes %}Benutzer von {% data variables.location.product_location %}{% endif %} verfügbaren Aktionen einzuschränken. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allowing-select-actions-to-run).

## 2. Bereitstellen des selbstgehosteten Runners für dein Unternehmen

Füge deinem Unternehmen als Nächstes einen selbstgehosteten Runner hinzu. {% data variables.product.product_name %} leitet dich durch die Installation der erforderlichen Software auf dem Runnercomputer. Nachdem du den Runner bereitgestellt hast, kannst du die Konnektivität zwischen dem Runnercomputer und {%ifversion ghec or ghae %}deinem Unternehmen{% elsif ghes %}{% data variables.location.product_location %}{% endif %} überprüfen.

### Hinzufügen des selbstgehosteten Runners

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

## 3. Verwalten des Zugriffs auf den selbstgehosteten Runner mithilfe einer Gruppe

Du kannst eine Runnergruppe erstellen, um den Zugriff auf den Runner zu verwalten, den du deinem Unternehmen hinzugefügt hast. Mithilfe der Gruppe kannst du auswählen, welche Organisationen Aufträge aus {% data variables.product.prodname_actions %} auf dem Runner ausführen können.

{% data variables.product.product_name %} fügt alle neuen Runner einer Gruppe hinzu. Runner können nur jeweils einer Gruppe zugewiesen werden. Standardmäßig fügt {% data variables.product.product_name %} alle neuen Runner einer Gruppe „Standard“ hinzu.

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. Um eine Richtlinie für den Organisationszugriff auszuwählen, musst du unter **Organisationszugriff** das Dropdownmenü „Organisation“ öffnen und auf **Ausgewählte Organisationen** klicken.
1. Klicke rechts neben dem Dropdownmenü mit der Organisationszugriffsrichtlinie auf {% octicon "gear" aria-label="The Gear icon" %}.
1. Wähle die Organisationen aus, denen du Zugriff auf die Runnergruppe gewähren möchtest.
{%- ifversion ghec or ghes %}
1. Um öffentlichen Repositorys in den ausgewählten Organisationen optional die Verwendung von Runnern in der Gruppe zu erlauben, wähle **Öffentliche Repositorys zulassen** aus.

   {% warning %}

   **Warnung**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)“.

   {% endwarning %} {%- endif %} {% data reusables.actions.create-runner-group %} {%- ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
1. Klicke auf die Registerkarte „Runner“.
1. Klicke in der Liste der Runner auf den Runner, den du im vorherigen Abschnitt bereitgestellt hast.
1. Klicken Sie auf **Bearbeiten**.
1. Klicke auf **Runnergruppen {% octicon "gear" aria-label="The Gear icon" %}** .
1. Klicke in der Liste der Runnergruppen auf den Namen der zuvor erstellten Gruppe.
1. Klicke auf **Speichern**, um den Runner in die Gruppe zu verschieben.
{%- elsif ghes < 3.4 or ghae %}
1. Klicke rechts neben „Standard“ auf die Anzahl der Runner in der Gruppe, um die Runner anzuzeigen.
1. Wähle den Runner aus, den du bereitgestellt hast.
1. Öffne rechts neben „Runnergruppen“ das Dropdownmenü **In Gruppe verschieben**, und klicke auf die zuvor erstellte Gruppe.
{%- endif %}

Du hast jetzt einen selbstgehosteten Runner bereitgestellt, der Aufträge aus {% data variables.product.prodname_actions %} in den von dir angegebenen Organisationen ausführen kann.

## 4. Einschränken des Zugriffs auf den selbstgehosteten Runner

Optional können Organisationsbesitzer*innen die Zugriffsrichtlinie der von dir erstellten Runnergruppe weiter einschränken. Beispielsweise kann ein*e Organisationsbesitzer*in nur bestimmten Repositorys in der Organisation erlauben, die Runnergruppe zu verwenden.

Weitere Informationen findest du unter [Verwalten des Zugriffs auf selbstgehostete Runner mithilfe von Gruppen](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).

## 5. Automatisches Skalieren deines selbstgehosteten Runners

Optional kannst du benutzerdefinierte Tools erstellen, um die selbstgehosteten Runner automatisch für {% ifversion ghec or ghae %}dein Unternehmen{% elsif ghes %}{% data variables.location.product_location %}{% endif %} zu skalieren. Deine Tools können beispielsweise auf Webhookereignisse von {% data variables.location.product_location %} reagieren, um automatisch einen Cluster von Runnercomputern zu skalieren. Weitere Informationen findest du unter [Automatische Skalierung mit selbstgehosteten Runnern](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners).

## Nächste Schritte

- Du kannst selbstgehostete Runner überwachen und häufige Probleme beheben. Weitere Informationen findest du unter [Überwachen von und Behandeln von Problemen mit selbstgehosteten Runnern](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners).

- {% data variables.product.company_short %} empfiehlt, die Sicherheitshinweise für selbstgehostete Runnercomputer zu lesen. Weitere Informationen findest du unter [Sicherheitshärtung für {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners).

- {% ifversion ghec %}Wenn du {% data variables.product.prodname_ghe_server %} oder {% data variables.product.prodname_ghe_managed %} verwendest, kannst du{% elsif ghes or ghae %}Du kannst {% endif %} Repositorys, die Aktionen für dein Unternehmen auf {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_ghe_server %} oder {% data variables.product.prodname_ghe_managed %}{% endif %} enthalten, manuell auf {% data variables.product.prodname_dotcom_the_website %} synchronisieren. Stattdessen kannst du Mitgliedern deines Unternehmens mithilfe von {% data variables.product.prodname_github_connect %} den automatischen Zugriff auf Aktionen aus {% data variables.product.prodname_dotcom_the_website %} erlauben. Weitere Informationen findest du unter folgenden Themen.

   {%- ifversion ghes or ghae %}
   - [Manuelles Synchronisieren von Aktionen von {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)
   - [Aktivieren des automatischen Zugriffs auf {% data variables.product.prodname_dotcom_the_website %}-Aktionen mithilfe von {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) {%- elsif ghec %}
   - „Manuelles Synchronisieren von Aktionen von {% data variables.product.prodname_dotcom_the_website %}“ in der [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)- oder [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)-Dokumentation
   - „Aktivieren des automatischen Zugriffs auf {% data variables.product.prodname_dotcom_the_website %}-Aktionen mithilfe von {% data variables.product.prodname_github_connect %}“ in der [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)- oder [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)-Dokumentation {%- endif %}

- Du kannst die auf deinen selbstgehosteten Runnercomputern verfügbare Software anpassen oder deine Runner so konfigurieren, dass{% ifversion ghes or ghae %} für Kunden, die {% data variables.product.prodname_dotcom_the_website %} verwenden{% endif %}, Software verfügbar ist, die von {% data variables.product.company_short %} gehosteten Runnern ähnelt. Die Software, die den Runnercomputern für {% data variables.product.prodname_actions %} zugrunde liegt, ist Open Source. Weitere Informationen findest du in den Repositorys [`actions/runner`](https://github.com/actions/runner) und [`actions/runner-images`](https://github.com/actions/runner-images).

## Weitere Informationsquellen

- [Konfigurieren der selbstgehosteten Runneranwendung als Dienst](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service)
- [Verwenden selbstgehosteten Runnern in einem Workflow](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)
