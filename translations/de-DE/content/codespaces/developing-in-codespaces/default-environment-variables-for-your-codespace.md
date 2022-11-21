---
title: Standardumgebungsvariablen für deinen Codespace
shortTitle: Default environment variables
intro: '{% data variables.product.prodname_dotcom %} legt Standardumgebungsvariablen für jeden Codespace fest.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Fundamentals
  - Developer
ms.openlocfilehash: 1a57445bbffb3e1112299414e29796b716f2d801
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158925'
---
## Informationen zu Standardumgebungsvariablen

{% data variables.product.prodname_dotcom %} legt Standardumgebungsvariablen für jeden Codespace fest. Befehle, die in Codespaces ausgeführt werden, können Umgebungsvariablen erstellen, lesen und ändern.

{% note %}

**Hinweis**: Bei Umgebungsvariablen wird die Groß-/Kleinschreibung berücksichtigt.

{% endnote %}

## Liste der Standardumgebungsvariablen

| Umgebungsvariable | BESCHREIBUNG |
| ---------------------|------------ |
| `CODESPACE_NAME` | Der Name des Codespace, z. B. `octocat-literate-space-parakeet-mld5` |
| `CODESPACES` | In einem Codespace immer `true` |
| `GIT_COMMITTER_EMAIL` | Die E-Mail-Adresse für das Feld „Autor“ für zukünftige `git`-Commits. |
| `GIT_COMMITTER_NAME` | Der Name für das Feld „Committer“ für zukünftige `git`-Commits. |
| `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN`| Gibt die Domäne des weitergeleiteten {% data variables.product.prodname_github_codespaces %}-Ports zurück. Beispiel: `preview.app.github.dev`. |
| `GITHUB_API_URL` | Gibt die API-URL zurück. Beispiel: `{% data variables.product.api_url_code %}`. |
| `GITHUB_GRAPHQL_URL` | Gibt die GraphQL-API-URL zurück. Beispiel: `{% data variables.product.graphql_url_code %}`. |
| `GITHUB_REPOSITORY` | Name des Eigentümers und des Repositorys. Beispiel: `octocat/Hello-World`. |
| `GITHUB_SERVER_URL`| Gibt die URL des {% data variables.product.product_name %}-Servers zurück. Beispiel: `https://{% data variables.product.product_url %}`. |
| `GITHUB_TOKEN` | Ein signiertes Auth-Token, das den Benutzer im Codespace darstellt. Dies kannst du für authentifizierte Aufrufe an die GitHub-API tätigen. Weitere Informationen findest du unter [Authentifizierung](/codespaces/codespaces-reference/security-in-codespaces#authentication).  |
| `GITHUB_USER` | Der Name des Benutzers, der den Codespace initiiert hat. Beispiel: `octocat`. |
