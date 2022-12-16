---
title: Automatische Tokenauthentifizierung
intro: '{% data variables.product.prodname_dotcom %} stellt ein Token zur Verfügung, mit dem du dich im Namen von {% data variables.product.prodname_actions %} authentifizieren kannst.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
  - /actions/reference/authentication-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Automatic token authentication
ms.openlocfilehash: eacf395921d9d4be949657bf421cf1b9bee6908b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107037'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zum `GITHUB_TOKEN`-Geheimnis

Zu Beginn jeder Workflowausführung erstellt {% data variables.product.prodname_dotcom %} automatisch ein eindeutiges `GITHUB_TOKEN`-Geheimnis zum Verwenden in deinem Workflow. Du kannst das `GITHUB_TOKEN` zum Authentifizieren in einer Workflowausführung verwenden.

Wenn du {% data variables.product.prodname_actions %} aktivierst, installiert {% data variables.product.prodname_dotcom %} eine {% data variables.product.prodname_github_app %} in deinem Repository. Das `GITHUB_TOKEN`-Geheimnis ist ein Installationszugriffstoken der {% data variables.product.prodname_github_app %}. Du kannst das Installationszugriffs-Token verwenden, um Dich im Namen der auf deinem Repository installierten {% data variables.product.prodname_github_app %} zu authentifizieren. Die Berechtigungen des Tokens sind auf das Repository beschränkt, in dem sich der Workflow befindet. Weitere Informationen findest du unter [Berechtigungen für das `GITHUB_TOKEN`](#permissions-for-the-github_token).

Vor Beginn jedes Auftrags ruft {% data variables.product.prodname_dotcom %} ein Installationszugriffstoken für den Auftrag ab. {% data reusables.actions.github-token-expiration %}

Das Token ist auch im `github.token`-Kontext verfügbar. Weitere Informationen findest du unter [Kontexte](/actions/learn-github-actions/contexts#github-context).

## Verwenden des `GITHUB_TOKEN` in einem Workflow

Du kannst das `GITHUB_TOKEN` mit der Standardsyntax zum Verweisen auf Geheimnisse verwenden: {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. Beispiele zum Verwenden des `GITHUB_TOKEN` sind das Übergeben des Tokens als Eingabe für eine Aktion oder das Verwenden für eine authentifizierte API-Anforderung für {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.

{% note %}

**Wichtig:** Eine Aktion kann über den `github.token`-Kontext auf das `GITHUB_TOKEN` zugreifen, auch wenn der Workflow das `GITHUB_TOKEN` nicht explizit für die Aktion übergibt. Als gute Sicherheitsmethode solltest du immer sicherstellen, dass Aktionen nur über den minimalen benötigten Zugriff verfügen, indem du die Berechtigungen für `GITHUB_TOKEN` einschränkst. Weitere Informationen findest du unter [Berechtigungen für das `GITHUB_TOKEN`](#permissions-for-the-github_token).

{% endnote %}

{% data reusables.actions.actions-do-not-trigger-workflows %}

### Beispiel 1: Übergeben des `GITHUB_TOKEN` als Eingabe

{% data reusables.actions.github_token-input-example %}

### Beispiel 2: Aufrufen der REST-API

Du kannst das `GITHUB_TOKEN` für authentifizierte API-Aufrufe verwenden. Dieser Beispiel-Workflow erzeugt eine Lieferung („issue“) mittels der {% data variables.product.prodname_dotcom %}-REST-API:

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_issue:
    runs-on: ubuntu-latest
    permissions:
      issues: write 
    steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url {% data variables.product.api_url_code %}/repos/${% raw %}{{ github.repository }}{% endraw %}/issues \
          --header 'authorization: Bearer ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${% raw %}{{ github.sha }}{% endraw %}",
            "body": "This issue was automatically created by the GitHub Action workflow **${% raw %}{{ github.workflow }}{% endraw %}**. \n\n The commit hash was: _${% raw %}{{ github.sha }}{% endraw %}_."
            }' \
          --fail
```

## Berechtigungen für das `GITHUB_TOKEN`

Weitere Informationen zu den API-Endpunkten, auf die {% data variables.product.prodname_github_apps %} mit den jeweiligen Berechtigungen zugreifen können, findest du unter [Berechtigungen von {% data variables.product.prodname_github_app %}](/rest/reference/permissions-required-for-github-apps).

In der folgenden Tabelle findest du die standardmäßig für das `GITHUB_TOKEN` erteilten Berechtigungen. Personen mit Administratorberechtigungen für ein {% ifversion not ghes %}Unternehmen, eine Organisation oder ein Repository,{% else %}eine Organisation oder ein Repository{% endif %} können die Standardberechtigungen entweder auf uneingeschränkt oder eingeschränkt festlegen. Weitere Informationen zum Festlegen der Standardberechtigungen für das `GITHUB_TOKEN` für dein Unternehmen, deine Organisation oder dein Repository findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise), [Deaktivieren oder Einschränken von {% data variables.product.prodname_actions %} für deine Organisation](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization) oder [Verwalten von Einstellungen für {% data variables.product.prodname_actions %} für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository).

| `Scope`         | Standardzugriff<br>(uneingeschränkt) | Standardzugriff<br>(eingeschränkt) | Maximaler Zugriff<br>durch geforkte Repositorys |
|---------------|-----------------------------|-----------------------------|--------------------------------|
| Aktionen       | read/write (Lesen/Schreiben)  | none | Lesen |
| checks (Überprüfungen)        | read/write (Lesen/Schreiben)  | none | Lesen |
| Inhalt      | read/write (Lesen/Schreiben)  | Lesen | Lesen |
| deployments   | read/write (Lesen/Schreiben)  | none | Lesen |{% ifversion fpt or ghec %}
| id-token      | none        | none | Lesen |{% endif %}
| issues        | read/write (Lesen/Schreiben)  | none | Lesen |
| metadata      | Lesen        | Lesen | Lesen |
| packages      | read/write (Lesen/Schreiben)  | none | Lesen |
| Seiten         | read/write (Lesen/Schreiben)  | none | Lesen |
| pull-requests | read/write (Lesen/Schreiben)  | none | Lesen |
| repository-projects | read/write (Lesen/Schreiben) | none | Lesen |
| security-events     | read/write (Lesen/Schreiben) | none | Lesen |
| statuses      | read/write (Lesen/Schreiben)  | none | Lesen |

{% data reusables.actions.workflow-runs-dependabot-note %}

### Ändern der Berechtigungen für das `GITHUB_TOKEN`

Sie können die Berechtigungen für das `GITHUB_TOKEN` in einzelnen Workflowdateien ändern. Wenn die Standardberechtigungen für das `GITHUB_TOKEN` restriktiv sind, musst du die Berechtigungen eventuell erhöhen, damit manche Aktionen und Befehle erfolgreich ausgeführt werden können. Wenn die Standardberechtigungen nicht restriktiv sind, können Sie die Workflowdatei bearbeiten, um einige Berechtigungen aus dem `GITHUB_TOKEN` zu entfernen. Als bewährte Sicherheitsmethode sollten Sie dem `GITHUB_TOKEN` nur den geringsten erforderlichen Zugriff gewähren.

Du kannst die Berechtigungen von `GITHUB_TOKEN` für einen bestimmten Auftrag im Abschnitt „Auftrag einrichten“ des Workflowausführungsprotokolls anzeigen. Weitere Informationen findest du unter [Verwenden von Workflowausführungsprotokollen](/actions/managing-workflow-runs/using-workflow-run-logs).

Du kannst den `permissions`-Schlüssel in deiner Workflowdatei verwenden, um Berechtigungen für das `GITHUB_TOKEN` für einen gesamten Workflow oder für einzelne Aufträge zu ändern. So kannst du die erforderlichen Mindestberechtigungen für einen Workflow oder Auftrag konfigurieren. Wenn der `permissions`-Schlüssel verwendet wird, werden alle nicht angegebenen Berechtigungen mit Ausnahme des Bereichs `metadata`, der immer Lesezugriff erhält, auf „Kein Zugriff“ festgelegt.

{% data reusables.actions.forked-write-permission %}

Die beiden zuvor in diesem Artikel beschriebenen Workflowbeispiele zeigen, wie der `permissions`-Schlüssel auf Workflowebene und auf Auftragsebene verwendet wird. In [Beispiel 1](#example-1-passing-the-github_token-as-an-input) werden die beiden Berechtigungen für den gesamten Workflow angegeben. In [Beispiel 2](#example-2-calling-the-rest-api) wird Schreibzugriff für einen Bereich eines einzelnen Auftrags gewährt.

Vollständige Informationen zum `permissions`-Schlüssel findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#permissions).

#### Berechnen der Berechtigungen für einen Workflowauftrag

Die Berechtigungen für das `GITHUB_TOKEN` werden zunächst auf die Standardeinstellung für das Unternehmen, die Organisation oder das Repository festgelegt. Wenn die Standardeinstellung auf einer dieser Ebenen auf eingeschränkte Berechtigungen festgelegt ist, gilt dies für die relevanten Repositorys. Wenn du beispielsweise den eingeschränkten Standard auf Organisationsebene auswählst, verwenden alle Repositorys in dieser Organisation standardmäßig die eingeschränkten Berechtigungen. Die Berechtigungen werden dann zuerst auf Workflowebene und schließlich auf Auftragsebene basierend auf den Konfigurationen in der Workflowdatei angepasst. Wenn der Workflow schließlich von einem Pull Request aus einem geforkten Repository ausgelöst wurde und die Einstellung **Schreibtoken aus Pull Requests an Workflows senden** nicht ausgewählt ist, werden die Berechtigungen so angepasst, dass Schreibberechtigungen in schreibgeschützt geändert werden.

### Erteilen zusätzlicher Berechtigungen

Wenn du ein Token benötigst, dass Berechtigungen erfordert, die nicht im `GITHUB_TOKEN` verfügbar sind, kannst du ein {% data variables.product.pat_generic %} erstellen und als Geheimnis in deinem Repository festlegen:

1. Verwende oder erstelle ein Token mit den entsprechenden Berechtigungen für dieses Repository. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token).
1. Füge das Token dem Repository deines Workflows als Geheimnis hinzu, und verweise darauf, indem du die Syntax {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %} verwendest. Weitere Informationen findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

### Weitere Informationsquellen

- [Ressourcen in der REST-API](/rest/overview/resources-in-the-rest-api#rate-limiting)
