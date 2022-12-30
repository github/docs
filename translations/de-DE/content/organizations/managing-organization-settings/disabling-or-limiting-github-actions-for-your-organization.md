---
title: GitHub Actions für deine Organisation Deaktivieren oder Einschränken
intro: 'Organisationsbesitzer*in können GitHub Actions für eine Organisation deaktivieren, aktivieren oder einschränken.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Disable or limit actions
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b72b1e412906b1a2ec7520a9c939d5adefee7dd7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064682'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Über {% data variables.product.prodname_actions %}-Berechtigungen für deine Organisation

{% data reusables.actions.disabling-github-actions %} Weitere Informationen zu {% data variables.product.prodname_actions %} findest du unter „Informationen zu [{% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)“.

Du kannst {% data variables.product.prodname_actions %} für alle Repositories in deiner Organisation aktivieren. {% data reusables.actions.enabled-actions-description %} Du kannst {% data variables.product.prodname_actions %} für alle Repositorys in deiner Organisation deaktivieren. {% data reusables.actions.disabled-actions-description %}

Alternativ kannst du {% data variables.product.prodname_actions %} für alle Repositorys in deiner Organisation aktivieren, aber die Aktionen {% ifversion actions-workflow-policy %}und wiederverwendbaren Workflows {% endif %}einschränken, die von einem Workflow ausgeführt werden können.

## {% data variables.product.prodname_actions %}-Berechtigungen für deine Organisation verwalten

Du kannst {% data variables.product.prodname_actions %} für alle Repositorys in deiner Organisation deaktivieren oder nur bestimmte Repositorys zulassen. Du kannst auch die Verwendung öffentlicher Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbarer Workflows{% endif %} einschränken, sodass Personen nur lokale Aktionen {% ifversion actions-workflow-policy %}und wiederverwendbare Workflows{% endif %} in {% ifversion ghec or ghes or ghae %}deinem Unternehmen{% else %}deiner Organisation{% endif %} verwenden können.

{% note %}

**Hinweis**: Möglicherweise kannst du diese Einstellungen nicht verwalten, wenn deine Organisation von einem Unternehmen verwaltet wird, das über eine Außerkraftsetzungsrichtlinie verfügt. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise).

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. Wähle unter „Richtlinien“ eine Option aus.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %}![ Festlegen der Aktionsrichtlinie für diese Organisation](/assets/images/help/organizations/actions-policy-with-workflows.png) {%- else %} ![Festlegen der Aktionsrichtlinie für diese Organisation](/assets/images/help/organizations/actions-policy.png) {%- endif %}
1. Klicke auf **Speichern**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. Wähle unter „Richtlinien“ {% data reusables.actions.policy-label-for-select-actions-workflows %} aus, und füge der Liste deine erforderlichen Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbaren Workflows{% endif %} hinzu.

   {% ifversion actions-workflow-policy %} ![Hinzufügen von Aktionen und wiederverwendbaren Workflows zur Zulassungsliste](/assets/images/help/organizations/actions-policy-allow-list-with-workflows.png) {%- elsif ghes %} ![Hinzufügen von Aktionen zur Positivliste](/assets/images/help/organizations/actions-policy-allow-list.png) {%- else %} ![Hinzufügen von Aktionen zur Zulassungsliste](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png) {%- endif %}
1. Klicke auf **Speichern**.

{% ifversion fpt or ghec %}
## Konfigurieren der erforderlichen Genehmigung für Workflows aus öffentlichen Forks

{% data reusables.actions.workflow-run-approve-public-fork %}

Du kannst dieses Verhalten für eine Organisation mithilfe des nachstehenden Verfahrens konfigurieren. Durch Ändern dieser Einstellung wird die auf Unternehmensebene festgelegte Konfiguration außer Kraft gesetzt.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## Aktivieren von Workflows für private Repositoryforks

{% data reusables.actions.private-repository-forks-overview %}

{% ifversion ghec or ghae or ghes %}Wenn eine Richtlinie für ein Unternehmen deaktiviert ist, kann sie für Organisationen nicht aktiviert werden.{% endif %} Wenn eine Richtlinie für eine Organisation deaktiviert ist, kann sie für Repositorys nicht aktiviert werden. Wenn eine Organisation eine Richtlinie aktiviert, kann die Richtlinie für einzelne Repositorys deaktiviert werden.

{% data reusables.actions.private-repository-forks-options %}

### Konfigurieren der privaten Forkrichtlinie für eine Organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.private-repository-forks-configure %} {% endif %}

## Festlegen der Berechtigungen von `GITHUB_TOKEN` für deine Organisation

{% data reusables.actions.workflow-permissions-intro %}

Du kannst die Standardberechtigungen für `GITHUB_TOKEN` in den Einstellungen für deine Organisation oder deine Repositorys festlegen. Wenn du in den Einstellungen deiner Organisation eine restriktive Option als den Standard festlegst, wird dieselbe Option auch in den Einstellungen für Repositorys innerhalb deiner Organisation ausgewählt, und die freizügige Option wird deaktiviert. Wenn deine Organisation zu einem {% data variables.product.prodname_enterprise %}-Konto gehört und der einschränkendere Standard in den Unternehmenseinstellungen ausgewählt wurde, kannst du in den Organisationseinstellungen nicht die freizügigere Standardeinstellung auswählen.

{% data reusables.actions.workflow-permissions-modifying %}

### Konfigurieren der `GITHUB_TOKEN`-Standardberechtigungen

{% ifversion allow-actions-to-approve-pr-with-ent-repo  %} Wenn du eine neue Organisation erstellst, hat `GITHUB_TOKEN` standardmäßig nur Lesezugriff auf den Bereich `contents`.
{% endif %}

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. Wähle unter „Workflowberechtigungen“ aus, ob du `GITHUB_TOKEN` Lese- und Schreibzugriff für alle Bereiche oder nur Lesezugriff für den Bereich `contents` gewähren möchtest.

   ![Festlegen von GITHUB_TOKEN-Berechtigungen für diese Organisation](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. Klicke auf **Save** (Speichern), um die Einstellungen zu übernehmen.

{% ifversion allow-actions-to-approve-pr %}
### Hindern von {% data variables.product.prodname_actions %} am {% ifversion allow-actions-to-approve-pr-with-ent-repo %}Erstellen oder {% endif %}Genehmigen von Pull Requests

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

Wenn du eine neue Organisation erstellst, dürfen Workflows standardmäßig keine {% ifversion allow-actions-to-approve-pr-with-ent-repo %}Pull Requests erstellen oder {% endif %} genehmigen.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. Verwende unter „Workflowberechtigungen“ die Einstellung **GitHub Actions das{% ifversion allow-actions-to-approve-pr-with-ent-repo %}Erstellen {% endif %}und Genehmigen von Pull Requests erlauben**, um zu konfigurieren, ob `GITHUB_TOKEN` Pull Requests {% ifversion allow-actions-to-approve-pr-with-ent-repo %}erstellen und {% endif %}genehmigen darf.

   ![Festlegen der Genehmigungsberechtigung für GITHUB_TOKEN-Pull Requests für diese Organisation](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. Klicke auf **Save** (Speichern), um die Einstellungen zu übernehmen.

{% endif %}
