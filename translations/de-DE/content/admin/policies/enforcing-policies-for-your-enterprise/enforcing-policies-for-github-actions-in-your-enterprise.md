---
title: Erzwingen von Richtlinien für GitHub Actions in deinem Unternehmen
intro: 'Du kannst Richtlinien für {% data variables.product.prodname_actions %} in den Organisationen deines Unternehmens erzwingen oder Richtlinien in jeder Organisation festlegen lassen.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_actions %} in an enterprise.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: GitHub Actions policies
ms.openlocfilehash: 21b2cfa73ef84ba6635f05b9fc25bb48df2b87cb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147400338'
---
{% data reusables.actions.enterprise-beta %}

## Informationen zu Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen

{% data variables.product.prodname_actions %} hilft Mitgliedern deines Unternehmens, Softwareentwicklungsworkflows in {% data variables.product.product_name %} zu automatisieren. Weitere Informationen findest du unter [Grundlegendes zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions).

{% ifversion ghes %}Wenn du {% data variables.product.prodname_actions %} aktivierst, kann jede{% else %}Alle{% endif %} Organisationen in {% data variables.product.product_location %} können {% data variables.product.prodname_actions %} nutzen. Du kannst Richtlinien erzwingen, um zu kontrollieren, wie Mitglieder deines Unternehmens {% data variables.product.prodname_actions %} auf {% data variables.product.product_name %} verwenden. Standardmäßig können Organisationsbesitzer verwalten, wie Mitglieder {% data variables.product.prodname_actions %} verwenden. Weitere Informationen findest du unter [Deaktivieren oder Einschränken von {% data variables.product.prodname_actions %} für deine Organisation](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization).

## Erzwingen einer Richtlinie zum Einschränken der Verwendung von {% data variables.product.prodname_actions %} in deinem Unternehmen

Du kannst {% data variables.product.prodname_actions %} für alle Organisationen in deinem Unternehmen deaktivieren oder nur für bestimmte Organisationen zulassen. Du kannst auch das Verwenden öffentlicher Aktionen {% ifversion actions-workflow-policy %}und wiederverwendbarer Workflows einschränken{% endif %}, sodass nur lokale Aktionen {% ifversion actions-workflow-policy %}und wiederverwendbare Workflows{% endif %} verwendet werden können, die in deinem Unternehmen vorhanden sind.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. Wähle deine Optionen unter „Richtlinien“ aus.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {%- ifversion ghes or ghae %} {% note %}

   **Hinweis:** Zum Gewähren des Zugriffs auf öffentliche Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbare Workflows{% endif %} musst du zuerst {% data variables.product.product_location %} konfigurieren, um eine Verbindung mit {% data variables.product.prodname_dotcom_the_website %} herzustellen. Weitere Informationen findest du unter [Aktivieren des automatischen Zugriffs auf GitHub Actions mit GitHub Connect](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect).

   {% endnote %} {%- endif %} {% ifversion actions-workflow-policy %} ![Aktivieren, Deaktivieren oder Einschränken von Aktionen für dieses Unternehmenskonto](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png) {%- else %} ![Aktivieren, Deaktivieren oder Einschränken von Aktionen für dieses Unternehmenskonto](/assets/images/help/organizations/enterprise-actions-policy.png) {%- endif %}
1. Klicke auf **Speichern**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. Wähle unter „Richtlinien“ {% data reusables.actions.policy-label-for-select-actions-workflows %} aus, und füge der Liste deine erforderlichen Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbaren Workflows{% endif %} hinzu.
   {% ifversion actions-workflow-policy %} ![Hinzufügen von Aktionen und wiederverwendbaren Workflows zur Zulassungsliste](/assets/images/help/organizations/enterprise-actions-policy-allow-list-with-workflows.png) {%- elsif ghes or ghae %} ![Hinzufügen von Aktionen zur Zulassungsliste](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png) {%- elsif ghae %} ![Hinzufügen von Aktionen zur Zulassungsliste](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png) {%- endif %}

## Erzwingen einer Richtlinie für Artefakt- und Protokollaufbewahrung in deinem Unternehmen

Von {% data variables.product.prodname_actions %} können Artefakte und Protokolldateien gespeichert werden. Weitere Informationen findest du unter [Herunterladen von Workflowartefakten](/actions/managing-workflow-runs/downloading-workflow-artifacts).

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.change-retention-period-for-artifacts-logs  %}

## Erzwingen einer Richtlinie für Fork-Pull Requests in deinem Unternehmen

Sie können Richtlinien erzwingen, mit denen gesteuert wird, welches Systemverhalten von {% data variables.product.prodname_actions %} für {% data variables.product.product_location %} gezeigt wird, wenn Mitglieder deines Unternehmens{% ifversion ghec %} oder externe Projektmitarbeiter*innen{% endif %} Workflows aus Forks ausführen.

{% ifversion ghec %}

### Erzwingen einer Richtlinie zur Genehmigung von Pull Requests von externen Projektmitarbeitern

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

### Erzwingen einer Richtlinie für Fork Pull Requests in privaten Repositorys

{% data reusables.actions.private-repository-forks-overview %}

Wenn eine Richtlinie für ein Unternehmen aktiviert ist, kann die Richtlinie in einzelnen Organisationen oder Repositorys selektiv deaktiviert werden. Wenn eine Richtlinie für ein Unternehmen deaktiviert ist, können einzelne Organisationen oder Repositorys sie nicht aktivieren.

{% data reusables.actions.private-repository-forks-options %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.private-repository-forks-configure %}

{% ifversion ghec or ghes or ghae %}

## Erzwingen einer Richtlinie für Workflowberechtigungen in deinem Unternehmen

{% data reusables.actions.workflow-permissions-intro %}

Du kannst die Standardberechtigungen für das `GITHUB_TOKEN` in den Einstellungen für dein Unternehmen, für deine Organisationen oder für deine Repositorys festlegen. Wenn du eine eingeschränkte Option als Standardeinstellung in den Unternehmenseinstellungen auswählst, verhindert dies, dass in den Organisations- oder Repositoryeinstellungen die freizügigere Einstellung ausgewählt wird.

{% data reusables.actions.workflow-permissions-modifying %}

### Konfigurieren der `GITHUB_TOKEN`-Standardberechtigungen

{% ifversion allow-actions-to-approve-pr-with-ent-repo %} Wenn du ein neues Unternehmen erstellst, hat das `GITHUB_TOKEN` standardmäßig nur Lesezugriff auf den Bereich `contents`.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. Wähle unter „Workflowberechtigungen“ aus, ob du `GITHUB_TOKEN` Lese- und Schreibzugriff für alle Bereiche oder nur Lesezugriff auf den Bereich `contents` gewähren möchtest.

   ![Festlegen von GITHUB_TOKEN-Berechtigungen für dieses Unternehmen](/assets/images/help/settings/actions-workflow-permissions-enterprise{% ifversion allow-actions-to-approve-pr-with-ent-repo %}-with-pr-approval{% endif %}.png)
1. Klicke auf **Save** (Speichern), um die Einstellungen zu übernehmen.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### Verhindern, dass {% data variables.product.prodname_actions %} Pullanforderungen erstellen oder genehmigen

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

Wenn du ein neues Unternehmen erstellst, dürfen Workflows standardmäßig keine Pull Requests erstellen oder genehmigen.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. Verwende unter „Workflowberechtigungen“ die Einstellung **GitHub Actions zum Erstellen und Genehmigen von Pullanforderungen berechtigen**, um zu konfigurieren, ob `GITHUB_TOKEN` Pull Requests erstellen und genehmigen kann.

   ![Festlegen von GITHUB_TOKEN-Berechtigungen für dieses Unternehmen](/assets/images/help/settings/actions-workflow-permissions-enterprise-with-pr-approval.png)
1. Klicke auf **Save** (Speichern), um die Einstellungen zu übernehmen.

{% endif %} {% endif %}

{% ifversion actions-cache-policy-apis %}

## Erzwingen einer Richtlinie für den Cachespeicher in deinem Unternehmen

{% data reusables.actions.cache-default-size %} {% data reusables.actions.cache-eviction-process %}

Du kannst jedoch eine Unternehmensrichtlinie festlegen, um sowohl die standardmäßige Gesamtgröße des Caches für jedes Repository als auch die maximal zulässige Gesamtgröße des Caches für ein Repository anzupassen. Du möchtest z. B., dass die Gesamtgröße des Caches für jedes Repository standardmäßig 5 GB beträgt, aber den Administratoren des Repositorys die Möglichkeit geben, bei Bedarf eine Gesamtgröße des Caches von maximal 15 GB zu konfigurieren.

Personen mit Administratorzugriff auf ein Repository können eine Gesamtgröße für den Cache ihres Repositorys festlegen, die bis zu der in der Richtlinie des Unternehmens festgelegten maximalen Cachegröße reicht.

Die Richtlinieneinstellungen für {% data variables.product.prodname_actions %}-Cachespeicher können derzeit nur mithilfe der REST-API geändert werden:

* Informationen zu den aktuellen Einstellungen für die Unternehmensrichtlinie findest du unter [Abrufen der Nutzungsrichtlinie für den GitHub Actions-Cache für ein Unternehmen](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise).
* Informationen zum Ändern der Unternehmensrichtlinie findest du unter [Festlegen der Nutzungsrichtlinie für den GitHub Actions-Cache für ein Unternehmen](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise).

{% data reusables.actions.cache-no-org-policy %}

{% endif %}
