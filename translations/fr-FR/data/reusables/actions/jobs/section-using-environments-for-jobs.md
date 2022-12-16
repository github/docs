---
ms.openlocfilehash: 5b827a2f598a6067ae3c486dbe046effda95bb7f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145086312"
---
Utilisez `jobs.<job_id>.environment` pour définir l’environnement référencé par le travail. La validation de toutes les règles de protection d’environnement doit être réussie pour qu’un travail référençant l’environnement soit envoyé à un exécuteur. Pour plus d’informations, consultez « [Utilisation d’environnements pour le déploiement](/actions/deployment/using-environments-for-deployment) ».

Vous pouvez fournir l’environnement en tant qu’environnement `name` uniquement, ou en tant qu’objet d’environnement avec `name` et `url`. L’URL est mappée à `environment_url` dans l’API des déploiements. Pour plus d’informations sur l’API des déploiements, consultez « [Déploiements](/rest/reference/repos#deployments) ».

### Exemple : Utilisation d’un seul nom d’environnement
{% raw %}
```yaml
environment: staging_environment
```
{% endraw %}

### Exemple : Utilisation du nom et de l’URL de l’environnement

```yaml
environment:
  name: production_environment
  url: https://github.com
```

L’URL peut être une expression et peut utiliser n’importe quel contexte à l’exception du [contexte `secrets`](/actions/learn-github-actions/contexts#contexts). Pour plus d’informations sur les expressions, consultez « [Expressions](/actions/learn-github-actions/expressions) ».

### Exemple : Utilisation de la sortie en tant qu’URL
{% raw %}
```yaml
environment:
  name: production_environment
  url: ${{ steps.step_id.outputs.url_output }}
```
{% endraw %}
