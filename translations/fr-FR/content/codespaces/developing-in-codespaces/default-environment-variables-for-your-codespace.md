---
title: Variables d’environnement par défaut pour votre espace de code
shortTitle: Default environment variables
intro: '{% data variables.product.prodname_dotcom %} définit les variables d’environnement par défaut pour chaque espace de code.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158924'
---
## À propos des variables d’environnement par défaut

{% data variables.product.prodname_dotcom %} définit les variables d’environnement par défaut pour chaque espace de code. Les commandes exécutées dans des espaces de code peuvent créer, lire et modifier des variables d’environnement.

{% note %}

**Remarque** : Les variables d’environnement respectent la casse.

{% endnote %}

## Liste des variables d’environnement par défaut

| Variable d’environnement | Description |
| ---------------------|------------ |
| `CODESPACE_NAME` | Nom de l’espace de code. Par exemple, `octocat-literate-space-parakeet-mld5` |
| `CODESPACES` | Toujours `true` dans un espace de code |
| `GIT_COMMITTER_EMAIL` | E-mail pour le champ « auteur » des commits `git` futurs. |
| `GIT_COMMITTER_NAME` | Nom pour le champ « auteur de commit » des commits `git` futurs. |
| `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN`| Retourne le domaine du port transféré {% data variables.product.prodname_github_codespaces %}. Par exemple : `preview.app.github.dev`. |
| `GITHUB_API_URL` | Retourne l’URL de l’API. Par exemple : `{% data variables.product.api_url_code %}`. |
| `GITHUB_GRAPHQL_URL` | Retourne l’URL de l’API GraphQL. Par exemple : `{% data variables.product.graphql_url_code %}`. |
| `GITHUB_REPOSITORY` | Nom du propriétaire et du dépôt. Par exemple : `octocat/Hello-World`. |
| `GITHUB_SERVER_URL`| Retourne l’URL du serveur {% data variables.product.product_name %}. Par exemple : `https://{% data variables.product.product_url %}`. |
| `GITHUB_TOKEN` | Jeton d’authentification signé représentant l’utilisateur dans l’espace de code. Vous pouvez l’utiliser pour effectuer des appels authentifiés à l’API GitHub. Pour plus d’informations, consultez « [Authentification](/codespaces/codespaces-reference/security-in-codespaces#authentication) ».  |
| `GITHUB_USER` | Nom de l’utilisateur qui a initié l’espace de code. Par exemple : `octocat`. |
