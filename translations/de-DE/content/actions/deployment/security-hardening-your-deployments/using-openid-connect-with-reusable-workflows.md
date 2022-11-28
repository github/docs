---
title: Verwenden von OpenID Connect mit wiederverwendbaren Workflows
shortTitle: Using OpenID Connect with reusable workflows
intro: 'Du kannst wiederverwendbare Workflows mit OIDC verwenden, um deine Bereitstellungsschritte zu standardisieren und festzuschreiben.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/deployment/security-hardening-your-deployments/using-oidc-with-your-reusable-workflows
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: how_to
topics:
  - Workflows
  - Security
ms.openlocfilehash: ecf00be738c711394bc4debf0088ca0cbe5a2d9c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710275'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu wiederverwendbaren Workflows

Anstatt Bereitstellungsaufträge zu kopieren und von einem Workflow in einen anderen einzufügen, kannst du einen wiederverwendbaren Workflow erstellen, der die Bereitstellungsschritte ausführt. Ein wiederverwendbarer Workflow kann von einem anderen Workflow verwendet werden, wenn er eine der in [Wiederverwenden von Workflows](/actions/learn-github-actions/reusing-workflows#access-to-reusable-workflows) beschriebenen Zugriffsanforderungen erfüllt.

Du solltest mit den Konzepten vertraut sein, die in [Wiederverwenden von Workflows](/actions/learn-github-actions/reusing-workflows und [Informationen zur Sicherheitshärtung mit OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) beschrieben werden.

## Definieren der Vertrauensbedingungen

Wenn du wiederverwendbare Workflows in Kombination mit OpenID Connect (OIDC) verwendest, kannst du konsistente Bereitstellungen in deinem Repository, deiner Organisation oder deinem Unternehmen erzwingen. Dies erreichst du durch das Definieren von Vertrauensbedingungen für Cloudrollen basierend auf wiederverwendbaren Workflows. Die verfügbaren Optionen variieren je nach verwendetem Cloudanbieter:

- **Verwenden von `job_workflow_ref`** : 
  - Um Vertrauensbedingungen auf der Grundlage wiederverwendbarer Workflows zu erstellen, muss dein Cloudanbieter benutzerdefinierte Ansprüche für `job_workflow_ref` unterstützen. Dadurch kann dein Cloudanbieter identifizieren, von welchem Repository der Auftrag ursprünglich stammt. 
  - Für Clouds, die nur die Standardansprüche (Zielgruppe (`aud`) und Antragsteller (`sub`)) unterstützen, kannst du die API verwenden, um den Anspruch `sub` so anzupassen, dass er `job_workflow_ref` enthält. Weitere Informationen findest du unter [Anpassen der Tokenansprüche](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-claims). Unterstützung für benutzerdefinierte Ansprüche ist derzeit für Google Cloud Platform und HashiCorp Vault verfügbar.

- **Anpassen der Tokenansprüche**: 
  - Du kannst präzisere Vertrauensbedingungen konfigurieren, indem du die im JWT enthaltenen Angaben zu Aussteller (`iss`) und Antragsteller (`sub`) anpasst. Weitere Informationen findest du unter [Anpassen der Tokenansprüche](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-claims).

## Funktionsweise des Tokens mit wiederverwendbaren Workflows

Während einer Workflowausführung stellt der OIDC-Anbieter von {% data variables.product.prodname_dotcom %} ein OIDC-Token für den Cloudanbieter bereit, das Informationen zum Auftrag enthält. Wenn dieser Auftrag Teil eines wiederverwendbaren Workflows ist, enthält das Token die Standardansprüche, die Informationen zum aufrufenden Workflow enthalten. Außerdem umfasst es den benutzerdefinierten Anspruch `job_workflow_ref`, der Informationen zum aufgerufenen Workflow enthält.

Das folgende OIDC-Token ist beispielsweise für einen Auftrag konzipiert, der Teil eines aufgerufenen Workflows war. `workflow`, `ref` und andere Attribute beschreiben den aufrufenden Workflow, während `job_workflow_ref` sich auf den aufgerufenen Workflow bezieht:

```yaml{:copy}
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "aud": "{% ifversion ghes %}https://HOSTNAME{% else %}https://github.com{% endif %}/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
  "repository_id": "74",
  "repository_owner_id": "65",
  "run_id": "example-run-id",
  "run_number": "10",
  "run_attempt": "2",
  "actor": "octocat",
  "workflow": "example-workflow",
  "head_ref": "",
  "base_ref": "",
  "event_name": "workflow_dispatch",
  "ref_type": "branch",
  "job_workflow_ref": "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main",
  "iss": "{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}",
  "nbf": 1632492967,
  "exp": 1632493867,
  "iat": 1632493567
}
```

Wenn dein wiederverwendbarer Workflow Bereitstellungsschritte ausführt, benötigt er in der Regel Zugriff auf eine bestimmte Cloudrolle, und du musst allen Repositorys in deiner Organisation das Aufrufen dieses wiederverwendbaren Workflows erlauben. Erstelle hierzu die Vertrauensbedingung, die jedes Repository und jeden aufrufenden Workflow zulässt, und filtere dann nach der Organisation und dem aufgerufenen Workflow. Im nächsten Abschnitt findest du einige Beispiele.

## Beispiele

**Filtern nach wiederverwendbaren Workflows innerhalb eines bestimmten Repositorys**

Du kannst einen benutzerdefinierten Anspruch konfigurieren, der nach jedem wiederverwendbaren Workflow in einem bestimmten Repository filtern kann. In diesem Beispiel muss die Workflowausführung von einem Auftrag stammen, der in einem wiederverwendbaren Workflow im Repository `octo-org/octo-automation` und in jedem Repository im Besitz der Organisation `octo-org` definiert ist.

- **Antragsteller:**
  - Syntax: `repo:ORG_NAME/*`
  - Beispiel: `repo:octo-org/*`

- **Benutzerdefinierter Anspruch:**
  - Syntax: `job_workflow_ref:ORG_NAME/REPO_NAME`
  - Beispiel: `job_workflow_ref:octo-org/octo-automation@*`

**Filtern nach einem bestimmten wiederverwendbaren Workflow in einem bestimmten Verweis**

Du kannst einen benutzerdefinierten Anspruch konfigurieren, der nach einem bestimmten wiederverwendbaren Workflow filtert. In diesem Beispiel muss die Workflowausführung von einem Auftrag stammen, der im wiederverwendbaren Workflow `octo-org/octo-automation/.github/workflows/deployment.yml` und in jedem Repository im Besitz der Organisation `octo-org` definiert ist.

- **Antragsteller:**
  - Syntax: `repo:ORG_NAME/*` 
  - Beispiel: `repo:octo-org/*` 

- **Benutzerdefinierter Anspruch:**
  - Syntax: `job_workflow_ref:ORG_NAME/REPO_NAME/.github/workflows/WORKFLOW_FILE@ref` 
  - Beispiel: `job_workflow_ref:octo-org/octo-automation/.github/workflows/deployment.yml@ 10040c56a8c0253d69db7c1f26a0d227275512e2`
