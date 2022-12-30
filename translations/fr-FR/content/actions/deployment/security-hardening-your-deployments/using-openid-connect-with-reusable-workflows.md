---
title: Utilisation d’OpenID Connect avec des workflows réutilisables
shortTitle: Using OpenID Connect with reusable workflows
intro: Vous pouvez utiliser des workflows réutilisables avec OIDC pour normaliser et renforcer la sécurité de vos étapes de déploiement.
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147710274'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des workflows réutilisables

Au lieu de copier et coller des travaux de déploiement d’un workflow vers un autre, vous pouvez créer un workflow réutilisable qui effectue les étapes de déploiement. Un workflow réutilisable peut être utilisé par un autre workflow s’il répond à l’une des exigences d’accès décrites dans « [Réutilisation des workflows](/actions/learn-github-actions/reusing-workflows#access-to-reusable-workflows) ».

Vous devez être familiarisé avec les concepts décrits dans « [Réutilisation des workflows](/actions/learn-github-actions/reusing-workflows » et « [À propos du durcissement de la sécurité avec OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) ».

## Définition des conditions d’approbation

Lorsqu’ils sont combinés avec OpenID Connect (OIDC), les workflows réutilisables vous permettent d’appliquer des déploiements cohérents dans votre référentiel, votre organisation ou votre entreprise. Pour cela, vous pouvez définir des conditions d’approbation au niveau de rôles cloud en fonction de workflows réutilisables. Les options disponibles varient selon le fournisseur de cloud :

- **En utilisant `job_workflow_ref`**  : 
  - Pour créer des conditions d’approbation basées sur des workflows réutilisables, votre fournisseur de cloud doit prendre en charge les revendications personnalisées pour `job_workflow_ref`. Cela permet à votre fournisseur de cloud d’identifier le référentiel à partir duquel la tâche provient initialement. 
  - Pour les clouds qui prennent uniquement en charge les revendications standard (audience (`aud`) et objet (`sub`)), vous pouvez utiliser l’API pour personnaliser la revendication `sub` de manière à y inclure `job_workflow_ref`. Pour plus d’informations, consultez « [Personnalisation des revendications de jetons](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-claims) ». La prise en charge des revendications personnalisées est actuellement disponible pour Google Cloud Platform et HashiCorp Vault.

- **Personnalisation des revendications de jetons** : 
  - Vous pouvez configurer des conditions d’approbation plus précises en personnalisant les revendications de l’émetteur (`iss`) et de l’objet (`sub`) qui sont incluses dans le jeton JWT. Pour plus d’informations, consultez « [Personnalisation des revendications de jetons](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-claims) ».

## Fonctionnement du jeton avec des workflows réutilisables

Lors d’une exécution de workflow, le fournisseur OIDC de {% data variables.product.prodname_dotcom %} fournit un jeton OIDC au fournisseur cloud qui contient des informations sur le travail. Si ce travail fait partie d’un workflow réutilisable, le jeton inclut les revendications standard qui contiennent des informations sur le workflow appelant, et inclut également une revendication personnalisée appelée `job_workflow_ref` qui contient des informations sur le workflow appelé.

Par exemple, le jeton OIDC suivant est destiné à un travail qui faisait partie d’un workflow appelé. Les attributs `workflow`, `ref` et d’autres décrivent le workflow de l’appelant, tandis que `job_workflow_ref` fait référence au workflow appelé :

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

Si votre workflow réutilisable effectue des étapes de déploiement, il a généralement besoin d’accéder à un rôle cloud spécifique, et vous pouvez autoriser tout référentiel de votre organisation à appeler ce workflow réutilisable. Pour ce faire, vous allez créer la condition d’approbation qui autorise n’importe quel référentiel et tout workflow appelant, puis filtrer sur l’organisation et le workflow appelé. Consultez la section suivante pour obtenir des exemples.

## Exemples

**Filtrage des workflows réutilisables dans un référentiel spécifique**

Vous pouvez configurer une revendication personnalisée qui filtre tout workflow réutilisable dans un référentiel spécifique. Dans cet exemple, l’exécution du workflow doit avoir provenir d’un travail défini dans un workflow réutilisable dans le référentiel `octo-org/octo-automation` et dans tous les référentiels appartenant à l’organisation `octo-org`.

- **Objet** :
  - Syntaxe : `repo:ORG_NAME/*`
  - Exemple : `repo:octo-org/*`

- **Revendication personnalisée** :
  - Syntaxe : `job_workflow_ref:ORG_NAME/REPO_NAME`
  - Exemple : `job_workflow_ref:octo-org/octo-automation@*`

**Filtrage d’un workflow réutilisable spécifique à une référence spécifique**

Vous pouvez configurer une revendication personnalisée qui filtre un workflow réutilisable spécifique. Dans cet exemple, l’exécution du workflow doit provenir d’un travail défini dans le workflow réutilisable `octo-org/octo-automation/.github/workflows/deployment.yml`, et dans tout référentiel appartenant à l’organisation `octo-org`.

- **Objet** :
  - Syntaxe : `repo:ORG_NAME/*` 
  - Exemple : `repo:octo-org/*` 

- **Revendication personnalisée** :
  - Syntaxe : `job_workflow_ref:ORG_NAME/REPO_NAME/.github/workflows/WORKFLOW_FILE@ref` 
  - Exemple : `job_workflow_ref:octo-org/octo-automation/.github/workflows/deployment.yml@ 10040c56a8c0253d69db7c1f26a0d227275512e2`
