---
title: Verwalten von GitHub Actions-Einstellungen für ein Repository
intro: 'Du kannst {% data variables.product.prodname_actions %} für ein bestimmtes Repository deaktivieren oder konfigurieren.'
redirect_from:
  - /github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-or-limiting-github-actions-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Permissions
  - Pull requests
shortTitle: Manage GitHub Actions settings
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 80bce0a3f43ccac75215bd738922dc5d79868793
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061128'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Über {% data variables.product.prodname_actions %}-Berechtigungen für dein Repository

{% data reusables.actions.disabling-github-actions %} Weitere Informationen zu {% data variables.product.prodname_actions %} findest du unter „Informationen zu [{% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)“.

Du kannst {% data variables.product.prodname_actions %} für dein Repository aktivieren. {% data reusables.actions.enabled-actions-description %} Du kannst {% data variables.product.prodname_actions %} für dein Repository komplett deaktivieren. {% data reusables.actions.disabled-actions-description %}

Alternativ kannst du {% data variables.product.prodname_actions %} in deinem Repository aktivieren, jedoch die Aktionen {% ifversion actions-workflow-policy %}und wiederverwendbaren Workflows einschränken{% endif %}, die ein Workflow ausführen kann.

## {% data variables.product.prodname_actions %}-Berechtigungen für dein Repository verwalten

Du kannst {% data variables.product.prodname_actions %} für ein Repository deaktivieren oder eine Richtlinie einrichten, mit der konfiguriert wird, welche Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbare Workflows{% endif %} im Repository verwendet werden können.

{% note %}

**Note:** Möglicherweise kannst du diese Einstellungen nicht verwalten, wenn deine Organisation über eine Außerkraftsetzungsrichtlinie verfügt oder von einem Unternehmen verwaltet wird, das über eine Außerkraftsetzungsrichtlinie verfügt. Weitere Informationen findest du unter "[Deaktivieren oder Einschränken von {% data variables.product.prodname_actions %} für deine Organisation](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" oder "[Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)".

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. Wähle unter „Actions permissions" (Berechtigungen für Aktionen) eine Option aus.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %} ![Festlegen einer Aktionsrichtlinie für dieses Repository](/assets/images/help/repository/actions-policy-with-workflows.png) {%- else %} ![Festlegen einer Aktionsrichtlinie für dieses Repository](/assets/images/help/repository/actions-policy.png) {%- endif %}
1. Klicke auf **Speichern**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. Wähle unter "Actions permissions" (Aktionenberechtigungen) {% data reusables.actions.policy-label-for-select-actions-workflows %} aus, und füge die erforderlichen Aktionen zu der Liste hinzu.

   {% ifversion actions-workflow-policy%} ![Hinzufügen von Aktionen und wiederverwendbaren Workflows zur Zulassungsliste](/assets/images/help/repository/actions-policy-allow-list-with-workflows.png) {%- elsif ghes %} ![Hinzufügen von Aktionen zur Positivliste](/assets/images/help/repository/actions-policy-allow-list.png) {%- else %} ![Hinzufügen von Aktionen zur Zulassungsliste](/assets/images/enterprise/github-ae/repository/actions-policy-allow-list.png) {%- endif %}
1. Klicke auf **Speichern**.

{% ifversion fpt or ghec %}
## Steuern von Änderungen von Forks zu Workflows in öffentlichen Repositorys

{% data reusables.actions.workflow-run-approve-public-fork %}

Du kannst dieses Verhalten für ein Repository mithilfe des nachstehenden Verfahrens konfigurieren. Durch Ändern dieser Einstellung wird die auf Organisations- oder Unternehmensebene festgelegte Konfiguration außer Kraft gesetzt.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %} {% endif %}

## Aktivieren von Workflows für Forks privater Repositorys

{% data reusables.actions.private-repository-forks-overview %}

Wenn eine Richtlinie für ein {% ifversion ghec or ghae or ghes %}Unternehmen oder eine{% endif %} Organisation deaktiviert ist, kann sie für ein Repository nicht aktiviert werden.

{% data reusables.actions.private-repository-forks-options %}

### Konfigurieren der Forkrichtlinie für ein privates Repository

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.private-repository-forks-configure %}

## Festlegen der Berechtigungen von `GITHUB_TOKEN` für dein Repository

{% data reusables.actions.workflow-permissions-intro %}

Die Standardberechtigungen können auch in den Organisationseinstellungen konfiguriert werden. Wenn dein Repository zu einer Organisation gehört und ein restriktiverer Standardwert in den Organisationseinstellungen ausgewählt wurde, wird dieselbe Option in deinen Repositoryeinstellungen ausgewählt, und die zulässige Option wird deaktiviert.

{% data reusables.actions.workflow-permissions-modifying %}

### Konfigurieren der `GITHUB_TOKEN`-Standardberechtigungen

{% ifversion allow-actions-to-approve-pr-with-ent-repo %} Wenn du ein neues Repository in deinem persönlichen Konto erstellst, hat das `GITHUB_TOKEN` standardmäßig nur Lesezugriff für den Bereich `contents`. Wenn du ein neues Repository in einer Organisation erstellst, wird die Einstellung von den Organisationseinstellungen übernommen.
{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. Wähle unter "Workflow permissions" (Workflowberechtigungen) aus, ob du dem `GITHUB_TOKEN` Lese- und Schreibzugriff für alle Bereiche oder nur Lesezugriff für den Bereich `contents` gewähren möchtest.

   ![Festlegen von GITHUB_TOKEN-Berechtigungen für dieses Repository](/assets/images/help/settings/actions-workflow-permissions-repository{% ifversion allow-actions-to-approve-pr-with-ent-repo %}-with-pr-approval{% endif %}.png)

1. Klicke auf **Save** (Speichern), um die Einstellungen zu übernehmen.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### Verhindern, dass {% data variables.product.prodname_actions %} Pullanforderungen erstellen oder genehmigen

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

Wenn du ein neues Repository in deinem persönlichen Konto erstellst, dürfen Workflows standardmäßig keine Pullanforderungen erstellen oder genehmigen. Wenn du ein neues Repository in einer Organisation erstellst, wird die Einstellung von den Organisationseinstellungen übernommen.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. Verwende unter "Workflow permissions" (Workflowberechtigungen) die Einstellung **Allow GitHub Actions to create and approve pull requests** (GitHub Actions zum Erstellen und Genehmigen von Pullanforderungen berechtigen), um zu konfigurieren, ob `GITHUB_TOKEN` Pullanforderungen erstellen und genehmigen kann.

   ![Festlegen von GITHUB_TOKEN-Berechtigungen für dieses Repository](/assets/images/help/settings/actions-workflow-permissions-repository-with-pr-approval.png)
1. Klicke auf **Save** (Speichern), um die Einstellungen zu übernehmen.
{% endif %}

{% ifversion ghes > 3.3 or ghae-issue-4757 or ghec %}
## Zulassen des Zugriffs auf Komponenten in einem internen Repository

Mitglieder deines Unternehmens können interne Repositorys verwenden, um an Projekten zu arbeiten, ohne Informationen öffentlich zu teilen. Weitere Informationen findest du unter "[Informationen zu Repositorys](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)".

Du kannst die nachstehenden Schritte anwenden, um zu konfigurieren, ob auf {% ifversion internal-actions%}Aktionen und {% endif %}Workflows in einem internen Repository von außerhalb des Repositorys zugegriffen werden kann.{% ifversion internal-actions %} Weitere Informationen findest du unter [Freigeben von Aktionen und Workflows für dein Unternehmen](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise). Alternativ kannst du die REST-API verwenden, um Details zur Zugriffsebene festzulegen oder zu erhalten. Weitere Informationen findest du unter "[Abrufen der Zugriffsebene für Workflows außerhalb des Repositorys](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#get-the-level-of-access-for-workflows-outside-of-the-repository)" und "[Festlegen der Zugriffsebene für Workflows außerhalb des Repositorys](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#set-the-level-of-access-for-workflows-outside-of-the-repository)".{% endif %}

1. Navigiere auf {% data variables.product.prodname_dotcom %} zur Hauptseite deines internen Repositorys.
1. Klicke unter dem Repositorynamen auf {% octicon "gear" aria-label="The gear icon" %} **Einstellungen**.
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Wähle unter **Access** (Zugriff) eine der Zugriffseinstellungen aus:

   {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}![Festlegen des Zugriffs auf Aktionskomponenten](/assets/images/help/settings/actions-access-settings.png){% else %}![Festlegen des Zugriffs auf Aktionskomponenten](/assets/images/enterprise/3.4/actions-access-settings.png){% endif %}

   * **Not accessible** (Nicht zugänglich): Workflows in anderen Repositorys können nicht auf dieses Repository zugreifen.
   * **Accessible from repositories in the 'ORGANIZATION NAME' organization** (Zugriff auf Repositorys in der Organisation "ORGANISATIONSNAME"): {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Workflows in anderen Repositorys, die Teil der Organisation "ORGANISATIONSNAME" sind, können auf die Aktionen und Workflows in diesem Repository zugreifen. Der Zugriff ist nur von privaten oder internen Repositorys zulässig.{% else %} Workflows in anderen Repositorys können Workflows in diesem Repository verwenden, wenn sie Teil derselben Organisation sind und ihre Sichtbarkeit privat oder intern ist.{% endif %}
   * **Accessible from repositories in the 'ENTERPRISE NAME' enterprise** (Zugriff auf Repositorys im Unternehmen "UNTERNEHMENSNAME"): {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Workflows in anderen Repositorys, die Teil des Unternehmens "UNTERNEHMENSNAME" sind, können auf die Aktionen und Workflows in diesem Repository zugreifen. Der Zugriff ist nur von privaten oder internen Repositorys zulässig.{% else %} Workflows in anderen Repositorys können Workflows in diesem Repository verwenden, wenn sie Teil desselben Unternehmens sind und ihre Sichtbarkeit privat oder intern ist.{% endif %}
1. Klicke auf **Save** (Speichern), um die Einstellungen zu übernehmen.
{% endif %}

## Konfigurieren des Aufbewahrungszeitraums für {% data variables.product.prodname_actions %}-Artefakte und -Protokolle in deinem Repository

Du kannst den Aufbewahrungszeitraum für {% data variables.product.prodname_actions %}-Artefakte und -Protokolle in deinem Repository konfigurieren.

{% data reusables.actions.about-artifact-log-retention %}

Du kannst auch einen benutzerdefinierten Aufbewahrungszeitraum für ein bestimmtes Artefakt definieren, das von einem Workflow erstellt wurde. Weitere Informationen findest du unter "[Festlegen des Aufbewahrungszeitraums für ein Artefakte](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)".

## Festlegen des Aufbewahrungszeitraums für ein Repository

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.change-retention-period-for-artifacts-logs  %}

{% ifversion actions-cache-policy-apis %}

## Konfigurieren des Zwischenspeichers für ein Repository

{% data reusables.actions.cache-default-size %} Diese Standardgrößen können jedoch anders sein, wenn ein Unternehmensbesitzer sie geändert hat. {% data reusables.actions.cache-eviction-process %}

Du kannst eine gesamte Zwischenspeichergröße für dein Repository auf die maximale Größe festlegen, die laut der Unternehmensrichtlinie zulässig ist.

Die Repositoryeinstellungen für {% data variables.product.prodname_actions %}-Zwischenspeicher können derzeit nur mithilfe der REST-API geändert werden:

* Informationen zum Anzeigen des aktuellen Zwischenspeicherlimits für ein Repository findest du unter "[Abrufen der GitHub Actions-Zwischenspeicher-Nutzungsrichtlinie für ein Repository](/rest/actions/cache#get-github-actions-cache-usage-policy-for-a-repository)".
* Informationen zum Ändern des Zwischenspeicherlimits für ein Repository findest du unter "[Festlegen der GitHub Actions-Zwischenspeicher-Nutzungsrichtlinie für ein Repository](/rest/actions/cache#set-github-actions-cache-usage-policy-for-a-repository)".

{% data reusables.actions.cache-no-org-policy %}

{% endif %}
