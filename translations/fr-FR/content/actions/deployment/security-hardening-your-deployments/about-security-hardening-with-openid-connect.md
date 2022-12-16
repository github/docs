---
title: À propos du renforcement de la sécurité avec OpenID Connect
shortTitle: Security hardening with OpenID Connect
intro: OpenID Connect permet à vos workflows d’échanger des jetons de courte durée directement à partir de votre fournisseur de cloud.
miniTocMaxHeadingLevel: 4
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 90a2f8c6cb2114f060bfbd0f422cb1ef6dbca604
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192030'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vue d’ensemble d’OpenID Connect

Les workflows {% data variables.product.prodname_actions %} sont souvent conçus pour accéder à un fournisseur de cloud (tel qu’AWS, Azure, GCP ou HashiCorp Vault) afin de déployer des logiciels ou d’utiliser les services du cloud. Avant que le workflow puisse accéder à ces ressources, il fournit des informations d’identification, telles qu’un mot de passe ou un jeton, au fournisseur de cloud. Ces informations d’identification sont généralement stockées en tant que secret dans {% data variables.product.prodname_dotcom %}, et le workflow présente ce secret au fournisseur de cloud chaque fois qu’il s’exécute. 

Toutefois, l’utilisation de secrets codés en dur vous oblige à créer des informations d’identification dans le fournisseur de cloud, puis à les dupliquer dans {% data variables.product.prodname_dotcom %} en tant que secret. 

Avec OpenID Connect (OIDC), vous pouvez adopter une approche différente en configurant votre workflow pour demander un jeton d’accès à court terme directement à partir du fournisseur de cloud. Votre fournisseur de cloud doit également prendre en charge OIDC de son côté et vous devez configurer une relation d’approbation qui contrôle les workflows qui peuvent demander les jetons d’accès. Les fournisseurs qui prennent actuellement en charge OIDC incluent Amazon Web Services, Azure, Google Cloud Platform et HashiCorp Vault, entre autres.

### Avantages de l’utilisation d’OIDC

En mettant à jour vos workflows pour utiliser les jetons OIDC, vous pouvez adopter les bonnes pratiques de sécurité suivantes :

- **Aucun secret cloud** : vous n’aurez pas besoin de dupliquer vos informations d’identification cloud en tant que secrets {% data variables.product.prodname_dotcom %} à long terme. Au lieu de cela, vous pouvez configurer l’approbation OIDC sur votre fournisseur de cloud, puis mettre à jour vos workflows pour demander un jeton d’accès à court terme à partir du fournisseur de cloud via OIDC. 
- **Gestion de l’authentification et de l’autorisation** : vous avez un contrôle plus précis sur la façon dont les workflows peuvent utiliser les informations d’identification, à l’aide des outils d’authentification (authN) et d’autorisation (authZ) de votre fournisseur de cloud pour contrôler l’accès aux ressources cloud.
- **Rotation des informations d’identification** : avec OIDC, votre fournisseur de cloud émet un jeton d’accès à court terme qui n’est valide que pour un seul travail, puis expire automatiquement.

### Bien démarrer avec OICD

Le diagramme suivant fournit une vue d’ensemble de la façon dont le fournisseur OIDC de {% data variables.product.prodname_dotcom %} s’intègre à vos workflows et à votre fournisseur de cloud :

![Diagramme OIDC](/assets/images/help/images/oidc-architecture.png)

1. Dans votre fournisseur de cloud, créez une approbation OIDC entre votre rôle cloud et votre ou vos workflows {% data variables.product.prodname_dotcom %} qui ont besoin d’accéder au cloud.
2. Chaque fois que votre travail s’exécute, le fournisseur OIDC de {% data variables.product.prodname_dotcom %} génère automatiquement un jeton OIDC. Ce jeton contient plusieurs revendications pour établir une identité vérifiable à la sécurité renforcée sur le workflow spécifique qui tente de s’authentifier.
3. Vous pouvez inclure une étape ou une action dans votre travail pour demander ce jeton à partir du fournisseur OIDC de {% data variables.product.prodname_dotcom %}, et le présenter au fournisseur de cloud.
4. Une fois que le fournisseur de cloud valide correctement les revendications présentées dans le jeton, il fournit ensuite un jeton d’accès cloud à court terme qui est disponible uniquement pour la durée du travail.

## Configuration de l’approbation OIDC avec le cloud

Lorsque vous configurez votre cloud pour approuver le fournisseur OIDC de {% data variables.product.prodname_dotcom %}, vous **devez** ajouter des conditions qui filtrent les demandes entrantes, afin que les dépôts ou workflows non approuvés ne puissent pas demander de jetons d’accès pour vos ressources cloud :

- Avant d’accorder un jeton d’accès, votre fournisseur de cloud vérifie que l’[`subject`](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) et les autres revendications utilisées pour définir des conditions dans ses paramètres d’approbation correspondent à celles du jeton JSON Web Token (JWT) de la demande. Par conséquent, vous devez prendre soin de définir correctement le _sujet_ et les autres conditions dans votre fournisseur de cloud.
- Les étapes de configuration de l’approbation OIDC et la syntaxe permettant de définir les conditions pour les rôles cloud (à l’aide de la revendication de _sujet_ et d’autres revendications) varient selon le fournisseur de cloud que vous utilisez. Pour obtenir des exemples, consultez « [Exemples de revendications de sujet](#example-subject-claims) ».
 
### Présentation du jeton OIDC

Chaque travail demande un jeton OIDC à partir du fournisseur OIDC de {% data variables.product.prodname_dotcom %}, qui répond avec un jeton JSON Web Token (JWT) généré automatiquement, unique pour chaque travail de workflow où il est généré. Lorsque le travail s’exécute, le jeton OIDC est présenté au fournisseur de cloud. Pour valider le jeton, le fournisseur de cloud vérifie si la revendication de sujet et les autres revendications du jeton OIDC correspondent aux conditions préconfigurées dans la définition d’approbation OIDC du rôle cloud.

L’exemple de jeton OIDC suivant utilise un sujet (`sub`) qui référence un environnement de travail nommé `prod` dans le dépôt `octo-org/octo-repo`.

```yaml
{
  "typ": "JWT",
  "alg": "RS256",
  "x5t": "example-thumbprint",
  "kid": "example-key-id"
}
{
  "jti": "example-id",
  "sub": "repo:octo-org/octo-repo:environment:prod",
  "environment": "prod",
  "aud": "{% ifversion ghes %}https://HOSTNAME{% else %}https://github.com{% endif %}/octo-org",
  "ref": "refs/heads/main",
  "sha": "example-sha",
  "repository": "octo-org/octo-repo",
  "repository_owner": "octo-org",
  "actor_id": "12",
  "repository_visibility": private,
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

Pour afficher toutes les revendications prises en charge par le fournisseur OIDC de {% data variables.product.prodname_dotcom %}, passez en revue les entrées `claims_supported` à l’adresse {% ifversion ghes %}`https://HOSTNAME/_services/token/.well-known/openid-configuration`{% else %} https://token.actions.githubusercontent.com/.well-known/openid-configuration{% endif %}.

Le jeton inclut les revendications standard d’audience, d’émetteur et de sujet :

|    Revendication    | Description            |
| ----------- | ---------------------- |
| `aud`| _(Audience)_ Par défaut, il s’agit de l’URL du propriétaire du dépôt, tel que l’organisation propriétaire du dépôt. Il s’agit de la seule revendication qui peut être personnalisée. Vous pouvez définir une audience personnalisée avec une commande du kit de ressources : [`core.getIDToken(audience)`](https://www.npmjs.com/package/@actions/core/v/1.6.0)          | 
| `iss`| _(Émetteur)_ Émetteur du jeton OIDC : {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}                   | 
| `sub`| _(Sujet)_ Définit la revendication de sujet qui doit être validée par le fournisseur de cloud. Ce paramètre est essentiel pour vous assurer que les jetons d’accès sont alloués uniquement de manière prévisible.|

Le jeton OIDC inclut également des revendications standard supplémentaires :

|    Revendication    | Description            |
| ----------- | ---------------------- |
| `alg`| _(Algorithme)_ L’algorithme utilisé par le fournisseur OIDC.                    | 
| `exp`| _(Expire à)_ Identifie l’heure d’expiration du jeton JWT.                    | 
| `iat`| _(Émis à)_ L’heure d’émission du jeton JWT.                   | 
| `jti`| _(Identificateur de jeton JWT)_ Identificateur unique pour le jeton OIDC.                   | 
| `kid`| _(Identificateur de clé)_ Clé unique pour le jeton OIDC.                   | 
| `nbf`| _(Pas avant)_ Le jeton JWT n’est pas valide pour une utilisation avant cette heure.                   | 
| `typ`| _(Type)_ Décrit le type de jeton. Il s’agit d’un jeton JSON Web Token (JWT).                   | 

Le jeton inclut également des revendications personnalisées fournies par {% data variables.product.prodname_dotcom %} :

|    Revendication    | Description            |
| ----------- | ---------------------- |
| `actor`| Compte personnel qui a initié l’exécution du workflow.                   | 
| `actor_id`| ID du compte personnel qui a lancé l’exécution du workflow.             |
| `base_ref`| Branche cible de la demande de tirage (pull request) dans une exécution de workflow.                   | 
| `environment`| Nom de l’environnement utilisé par le travail.                    | 
| `event_name`| Nom de l’événement qui a déclenché l’exécution de workflow.                    | 
| `head_ref`| Branche source de la demande de tirage (pull request) dans une exécution de workflow.                   | 
| `job_workflow_ref`| Il s’agit du chemin de référence jusqu’au workflow réutilisable utilisé par ce travail. Pour plus d’informations, consultez « [Utilisation d’OpenID Connect avec des workflows réutilisables](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows) ».                  | 
| `ref`| _(Référence)_ Référence git qui a déclenché l’exécution du workflow.                   | 
| `ref_type`| Type de `ref`, par exemple : « branche ».                  | 
| `repository_visibility` | Visibilité du dépôt dans lequel le workflow s’exécute. Accepte les valeurs suivantes : `internal`, `private` et`public`.                   | 
| `repository`| Dépôt à partir duquel le workflow s’exécute.                   | 
| `repository_id`| ID du dépôt à partir duquel le workflow s’exécute.  |
| `repository_owner`| Nom de l’organisation dans laquelle `repository` est stocké.                   | 
| `repository_owner_id`| ID de l’organisation dans laquelle `repository` est stocké.            |
| `run_id`| ID de l’exécution de workflow qui a déclenché le workflow.                   | 
| `run_number`| Nombre de fois que ce workflow a été exécuté.                   | 
| `run_attempt`| Nombre de fois que cette exécution de workflow a été retentée.                    | 
| `workflow`| Nom du workflow.                   | 

### Définition de conditions d’approbation sur des rôles cloud à l’aide de revendications OIDC

Avec OIDC, un workflow {% data variables.product.prodname_actions %} nécessite un jeton pour accéder aux ressources dans votre fournisseur de cloud. Le workflow demande un jeton d’accès à partir de votre fournisseur de cloud, qui vérifie les détails présentés par le jeton JWT. Si la configuration d’approbation dans le jeton JWT est une correspondance, votre fournisseur de cloud répond en émettant un jeton temporaire au workflow, qui peut ensuite être utilisé pour accéder aux ressources dans votre fournisseur de cloud. Vous pouvez configurer votre fournisseur de cloud pour répondre uniquement aux demandes provenant du dépôt d’une organisation spécifique. Vous pouvez également spécifier des conditions supplémentaires, décrites ci-dessous.

Les revendications d’audience et de sujet sont généralement utilisées conjointement, tout en définissant des conditions sur le rôle/les ressources cloud pour étendre son accès aux workflows GitHub.
- **Audience** : par défaut, cette valeur utilise l’URL du propriétaire du dépôt ou de l’organisation. Elle peut être utilisée pour définir une condition stipulant que seuls les workflows de l’organisation spécifique peuvent accéder au rôle cloud.
- **Sujet** : par défaut, possède un format prédéfini et constitue une concaténation de certaines des métadonnées clés concernant le workflow, telles que l’organisation, le dépôt, la branche ou l’environnement de [`job`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenvironment) associé de {% data variables.product.prodname_dotcom %}. Consultez « [Exemples de revendications de sujet](#example-subject-claims) » pour voir comment la revendication de sujet est assemblée à partir des métadonnées concaténées.

Si vous avez besoin de conditions d’approbation plus précises, vous pouvez personnaliser les revendications de l’émetteur (`iss`) et de l’objet (`sub`) qui sont incluses dans le JWT. Pour plus d’informations, consultez « [Personnalisation des revendications de jetons](#customizing-the-token-claims) ».

Il existe également de nombreuses revendications supplémentaires prises en charge dans le jeton OIDC qui peuvent être utilisées pour définir ces conditions. De plus, votre fournisseur de cloud peut vous permettre d’attribuer un rôle aux jetons d’accès, ce qui vous permet de spécifier des autorisations encore plus précises.

{% note %}

**Remarque** : Pour contrôler la façon dont votre fournisseur de cloud émet des jetons d’accès, vous **devez** définir au moins une condition, afin que les dépôts non approuvés ne puissent pas demander de jetons d’accès pour vos ressources cloud.

{% endnote %}

### Exemples de revendications de sujet

Les exemples suivants montrent comment utiliser le sujet comme condition et expliquent comment le sujet est rassemblé à partir des métadonnées concaténées. Le [sujet](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) utilise des informations issues du [contexte `job`](/actions/learn-github-actions/contexts#job-context) et indique à votre fournisseur de cloud que les demandes de jeton d’accès peuvent uniquement être accordées pour les demandes provenant des workflows s’exécutant dans des branches ou environnements spécifiques. Les sections suivantes décrivent certains sujets courants que vous pouvez utiliser.

#### Filtrage pour un environnement spécifique

La revendication de sujet inclut le nom de l’environnement lorsque le travail fait référence à un environnement.

Vous pouvez configurer un sujet qui filtre pour fournir un nom d’[environnement](/actions/deployment/using-environments-for-deployment) spécifique. Dans cet exemple, l’exécution du workflow doit provenir d’un travail qui a un environnement nommé `Production`, dans un dépôt nommé `octo-repo` qui appartient à l’organisation `octo-org`:

|        |             |
| ------ | ----------- |
| Syntaxe : | `repo:<orgName/repoName>:environment:<environmentName>`      | 
| Exemple :| `repo:octo-org/octo-repo:environment:Production`       |

#### Filtrage pour fournir les événements `pull_request`

La revendication de sujet inclut la chaîne `pull_request` lorsque le workflow est déclenché par un événement de demande de tirage (pull request), mais uniquement si le travail ne fait pas référence à un environnement.

Vous pouvez configurer un sujet qui filtre pour fournir l’événement [`pull_request`](/actions/learn-github-actions/events-that-trigger-workflows#pull_request). Dans cet exemple, l’exécution du workflow doit avoir été déclenchée par un événement `pull_request` dans un dépôt nommé `octo-repo` appartenant à l’organisation `octo-org` :

|        |             |
| ------ | ----------- |
| Syntaxe : | `repo:<orgName/repoName>:pull_request`      | 
| Exemple :| `repo:octo-org/octo-repo:pull_request`      |

#### Filtrage pour fournir une branche spécifique

La revendication de sujet inclut le nom de branche du workflow, mais uniquement si le travail ne fait pas référence à un environnement et si le workflow n’est pas déclenché par un événement de demande de tirage.

Vous pouvez configurer un sujet qui filtre pour fournir un nom de branche spécifique. Dans cet exemple, l’exécution du workflow doit provenir d’une branche nommée `demo-branch`, dans un dépôt nommé `octo-repo` appartenant à l’organisation `octo-org` :

|        |             |
| ------ | ----------- |
| Syntaxe : | `repo:<orgName/repoName>:ref:refs/heads/branchName`      | 
| Exemple :| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |

#### Filtrage pour fournir une étiquette spécifique

La revendication de sujet inclut le nom d’étiquette du workflow, mais uniquement si le travail ne fait pas référence à un environnement et si le workflow n’est pas déclenché par un événement de demande de tirage.

Vous pouvez créer un sujet qui filtre pour fournir une étiquette spécifique. Dans cet exemple, l’exécution du workflow doit provenir d’une étiquette nommée `demo-tag`, dans un dépôt nommé `octo-repo` appartenant à l’organisation `octo-org` :

|        |             |
| ------ | ----------- |
| Syntaxe : | `repo:<orgName/repoName>:ref:refs/tags/<tagName>`      | 
| Exemple :| `repo:octo-org/octo-repo:ref:refs/tags/demo-tag`      |

### Configuration du sujet dans votre fournisseur de cloud

Pour configurer le sujet dans la relation d’approbation de votre fournisseur de cloud, vous devez ajouter la chaîne de sujet à sa configuration d’approbation. Les exemples suivants montrent comment différents fournisseurs de cloud peuvent accepter le même sujet `repo:octo-org/octo-repo:ref:refs/heads/demo-branch` de différentes manières :

|        |             |
| ------ | ----------- |
| Amazon Web Services | `"{% ifversion ghes %}HOSTNAME/_services/token{% else %}token.actions.githubusercontent.com{% endif %}:sub": "repo:octo-org/octo-repo:ref:refs/heads/demo-branch"`      | 
| Azure| `repo:octo-org/octo-repo:ref:refs/heads/demo-branch`      |
| Google Cloud Platform| `(assertion.sub=='repo:octo-org/octo-repo:ref:refs/heads/demo-branch')`      |
| HashiCorp Vault| `bound_subject="repo:octo-org/octo-repo:ref:refs/heads/demo-branch" `      |

Pour plus d’informations, consultez les guides répertoriés dans « [Activation d’OpenID Connect pour votre fournisseur de cloud](#enabling-openid-connect-for-your-cloud-provider) ».

## Mise à jour de vos actions pour OIDC

Pour mettre à jour vos actions personnalisées afin de vous authentifier à l’aide d’OIDC, vous pouvez utiliser `getIDToken()` à partir du kit de ressources Actions pour demander un jeton JWT à partir du fournisseur OIDC de {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « Jeton OIDC » dans la [documentation sur les packages npm](https://www.npmjs.com/package/@actions/core/v/1.6.0).

Vous pouvez également utiliser une commande `curl` pour demander le jeton JWT, à l’aide des variables d’environnement suivantes :

|        |             |
| ------ | ----------- |
| `ACTIONS_ID_TOKEN_REQUEST_URL` | URL du fournisseur OIDC de {% data variables.product.prodname_dotcom %}.      | 
| `ACTIONS_ID_TOKEN_REQUEST_TOKEN` | Jeton du porteur pour la demande auprès du fournisseur OIDC.      |


Par exemple :

```shell{:copy}
curl -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$ACTIONS_ID_TOKEN_REQUEST_URL&audience=api://AzureADTokenExchange"
```

### Ajout de paramètres d’autorisations

{% data reusables.actions.oidc-permissions-token %}

{% ifversion actions-oidc-hardening-config %}
## Personnalisation des revendications de jetons

Vous pouvez durcir la sécurité de votre configuration OIDC en personnalisant les revendications qui sont incluses dans le JWT. Ces personnalisations vous permettent de définir des conditions d’approbation plus précises pour vos rôles cloud lorsque vous autorisez vos workflows à accéder aux ressources hébergées dans le cloud :

{% ifversion ghec %} : pour une couche de sécurité supplémentaire, vous pouvez ajouter l’URL `issuer` au slug de votre entreprise. Cela vous permet de définir des conditions pour la revendication de l’émetteur (`iss`), en la configurant pour accepter uniquement les jetons JWT provenant d’une URL unique `issuer` qui doit inclure le slug de votre entreprise.{% endif %}
- Vous pouvez normaliser votre configuration OIDC en définissant des conditions pour la revendication de l’objet (`sub`) qui exigent des jetons JWT provenant d’un dépôt spécifique, d’un workflow réutilisable ou d’une autre source.
- Vous pouvez définir des stratégies OIDC précises à l’aide de revendications de jeton OIDC supplémentaires, comme `repository_id` et `repository_visibility`. Pour plus d’informations, consultez « [Présentation du jeton OIDC](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#understanding-the-oidc-token) ».

Pour personnaliser ces formats de revendication, les administrateurs d’organisation et de dépôt peuvent utiliser les points de terminaison de l’API REST qui sont décrits dans les sections suivantes.

{% ifversion ghec %}

### Passer à une URL de jeton unique

Par défaut, le jeton JWT est émis par le fournisseur OIDC de {% data variables.product.prodname_dotcom %} sur `https://token.actions.githubusercontent.com`. Ce chemin est présenté à votre fournisseur de cloud à l’aide de la valeur `iss` du jeton JWT.

Les administrateurs d’entreprise peuvent renforcer leur configuration OIDC en configurant leur entreprise de manière à recevoir des jetons provenant d’une URL unique à l’adresse `https://token.actions.githubusercontent.com/<enterpriseSlug>`. Remplacez `<enterpriseSlug>` par la valeur slug de votre entreprise. 

Cette configuration signifie que votre entreprise recevra le jeton OIDC provenant d’une URL unique. Vous pourrez ensuite configurer votre fournisseur de cloud pour qu’il accepte uniquement les jetons provenant de cette URL. Cela garantit que seuls les dépôts de l’entreprise pourront accéder à vos ressources cloud à l’aide d’OIDC.

Pour activer ce paramètre pour l’entreprise, l’administrateur d’entreprise doit utiliser le point de terminaison `/enterprises/{enterprise}/actions/oidc/customization/issuer` et spécifier `"include_enterprise_slug": true` dans le corps de la demande. Pour plus d’informations, consultez « [Définir la stratégie d’émetteur personnalisée OIDC {% data variables.product.prodname_actions %} pour une entreprise](/rest/actions/oidc#set-the-github-actions-oidc-custom-issuer-policy-for-an-enterprise) ».

Une fois ce paramètre appliqué, le jeton JWT contient la valeur `iss` mise à jour. Dans l’exemple suivant, la clé `iss` utilise `octocat-inc` comme valeur `enterpriseSlug` :

```json
{
  "jti": "6f4762ed-0758-4ccb-808d-ee3af5d723a8"
  "sub": "repo:octocat-inc/private-server:ref:refs/heads/main"
  "aud": "http://octocat-inc.example/octocat-inc"
  "enterprise": "octocat-inc"
  "iss": "https://token.actions.githubusercontent.com/octocat-inc",
  "bf": 1755350653,
  "exp": 1755351553,
  "iat": 1755351253
}
```

{% endif %}

### Personnalisation des revendications d’objet pour une organisation ou un référentiel

Pour aider à améliorer la sécurité, la conformité et la normalisation, vous pouvez personnaliser les revendications standard en fonction des conditions d’accès exigées. Si votre fournisseur de cloud prend en charge l’application de conditions aux revendications d’objet, vous pouvez créer une condition qui vérifie si la valeur `sub` correspond au chemin du workflow réutilisable, par exemple `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`. Le format exact varie en fonction de la configuration OIDC de votre fournisseur de cloud. Pour configurer la condition de correspondance de {% data variables.product.prodname_dotcom %}, vous pouvez utiliser l’API REST pour exiger que la revendication `sub` comprenne toujours une revendication personnalisée spécifique, telle que `job_workflow_ref`. Vous pouvez utiliser [API REST OIDC](/rest/actions/oidc) pour appliquer un modèle de personnalisation à la revendication d’objet OIDC ; par exemple, vous pouvez exiger que la revendication `sub` dans le jeton OIDC inclue toujours une revendication personnalisée spécifique, telle que `job_workflow_ref`.

{% note %}

**Remarque** : lorsque le modèle d’organisation est appliqué, il n’affecte pas les référentiels existants qui utilisent déjà OIDC. Pour les référentiels existants, ainsi que pour les nouveaux référentiels créés après l’application du modèle, les propriétaires des référentiels devront accepter de recevoir cette configuration ou ils peuvent demander une configuration différente spécifique au référentiel. Pour plus d’informations, consultez « [Définir le modèle de personnalisation d’une revendication d’objet OIDC dans un référentiel](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository) ».

{% endnote %}

La personnalisation des revendications applique un nouveau format pour l’intégralité de la revendication `sub`, qui remplace le format prédéfini `sub` par défaut dans le jeton décrit dans « [Exemples de revendications d’objet](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims) ».

Les exemples de modèles suivants illustrent différentes façons de personnaliser la revendication d’objet. Pour configurer ces paramètres dans {% data variables.product.prodname_dotcom %}, les administrateurs utilisent l’API REST pour spécifier la liste des revendications qui doivent être incluses dans la revendication d’objet (`sub`). 

{% data reusables.actions.use-request-body-api %}

Pour personnaliser vos revendications d’objet, vous devez d’abord créer une condition correspondante dans la configuration OIDC de votre fournisseur de cloud, avant de personnaliser la configuration à l’aide de l’API REST. Une fois la configuration terminée, chaque fois qu’un nouveau travail s’exécute, le jeton OIDC généré pendant ce travail suit le nouveau modèle de personnalisation. Si la condition de correspondance n’existe pas dans la configuration OIDC du fournisseur de cloud avant l’exécution du travail, le jeton généré risque de ne pas être accepté par le fournisseur de cloud, car les conditions cloud peuvent ne pas être synchronisées.

#### Exemple : Autorisation d’un dépôt en fonction de la visibilité et du propriétaire

Cet exemple de modèle permet à la revendication `sub` d’avoir un nouveau format, en utilisant `repository_owner` et `repository_visibility` :

```json
{
   "include_claim_keys": [
       "repository_owner",
       "repository_visibility"
   ]
}
```

Dans la configuration OIDC de votre fournisseur de cloud, configurez la condition `sub` pour exiger que les revendications incluent des valeurs spécifiques pour `repository_owner` et `repository_visibility`. Par exemple : `"repository_owner: "monalisa":repository_visibility:private"`. Avec cette approche, vous pouvez restreindre l’accès des rôles cloud en leur permettant uniquement d’accéder aux dépôts privés d’une organisation ou d’une entreprise.

#### Exemple : Autorisation de l’accès à tous les dépôts d’un propriétaire donné

Cet exemple de modèle permet à la revendication `sub` d’avoir un nouveau format avec uniquement la valeur `repository_owner`. 

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repository_owner"
   ]
}

```

Dans la configuration OIDC de votre fournisseur de cloud, configurez la condition `sub` pour exiger que les revendications incluent une valeur spécifique pour `repository_owner`. Par exemple : `"repository_owner: "monalisa""`

#### Exemple : Exiger un workflow réutilisable

Cet exemple de modèle permet à la revendication `sub` d’avoir un nouveau format qui contient la valeur de la revendication `job_workflow_ref`. Cela permet à une entreprise d’utiliser des [workflows réutilisables](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims) afin d’appliquer des déploiements cohérents dans l’ensemble de ses organisations et de ses dépôts.

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "job_workflow_ref"
     ]
  }
```

Dans la configuration OIDC de votre fournisseur de cloud, configurez la condition `sub` pour exiger que les revendications incluent une valeur spécifique pour `job_workflow_ref`. Par exemple : `"job_workflow_ref: "octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main""`.

#### Exemple : Exiger un workflow réutilisable et d’autres revendications

L’exemple de modèle suivant combine l’exigence d’un workflow réutilisable spécifique avec des revendications supplémentaires.

{% data reusables.actions.use-request-body-api %}

Cet exemple montre également comment utiliser `"context"` pour définir vos conditions. Il s’agit de la partie qui suit le dépôt au [format `sub` par défaut](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#example-subject-claims). Par exemple, lorsque le travail fait référence à un environnement, le contexte contient : `environment:<environmentName>`.

```json
{
   "include_claim_keys": [
       "repo",
       "context",
       "job_workflow_ref"
   ]
}
```

Dans la configuration OIDC de votre fournisseur de cloud, configurez la condition `sub` pour exiger que les revendications incluent des valeurs spécifiques pour `repo`, `context` et `job_workflow_ref`.

Ce modèle de personnalisation nécessite que `sub` utilise le format suivant : `repo:<orgName/repoName>:environment:<environmentName>:job_workflow_ref:<reusableWorkflowPath>`. Par exemple : `"sub": "repo:octo-org/octo-repo:environment:prod:job_workflow_ref:octo-org/octo-automation/.github/workflows/oidc.yml@refs/heads/main"`

#### Exemple : Accorder l’accès à un dépôt spécifique

Cet exemple de modèle vous permet d’accorder l’accès cloud à tous les workflows d’un dépôt spécifique, dans toutes les branches/étiquettes et environnements. Pour améliorer la sécurité, combinez ce modèle avec l’URL d’émetteur personnalisée décrite dans « [Personnalisation de l’URL du jeton pour une entreprise](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-token-url-for-an-enterprise) ». 

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo"
   ]
}
```

Dans la configuration OIDC de votre fournisseur de cloud, configurez la condition `sub` pour exiger une revendication `repo` qui corresponde à la valeur demandée.

#### Exemple : Utilisation de GUID générés par le système

Cet exemple de modèle autorise les revendications OIDC prévisibles avec des GUID générés par le système qui ne changent pas entre les renommages d’entités (par exemple, le renommage d’un dépôt). 

{% data reusables.actions.use-request-body-api %}

```json
  {
     "include_claim_keys": [
         "repository_id"
     ]
  }
```

Dans la configuration OIDC de votre fournisseur de cloud, configurez la condition `sub` pour exiger une revendication `repository_id` qui corresponde à la valeur demandée.

ou :

```json
{
   "include_claim_keys": [
       "repository_owner_id"
   ]
}
```

Dans la configuration OIDC de votre fournisseur de cloud, configurez la condition `sub` pour exiger une revendication `repository_owner_id` qui corresponde à la valeur demandée.

#### Réinitialisation de vos personnalisations

Cet exemple de modèle réinitialise le format des revendications d’objet vers celui par défaut. Ce modèle refuse toute stratégie de personnalisation appliquée au niveau de l’organisation.

{% data reusables.actions.use-request-body-api %}

```json
{
   "include_claim_keys": [
       "repo",
       "context"
   ]
}
```

Dans la configuration OIDC de votre fournisseur de cloud, configurez la condition `sub` pour exiger que les revendications incluent des valeurs spécifiques pour `repo` et `context`.

#### Utilisation des revendications d’objet par défaut

Pour les dépôts qui peuvent recevoir une stratégie de revendication d’objet de la part de leur organisation, le propriétaire des dépôts peut choisir plus tard d’utiliser plutôt le format de revendication par défaut `sub`. Cela signifie que le référentiel n’utilisera pas le modèle personnalisé de l’organisation. 

Pour configurer le référentiel afin qu’il utilise le format de revendication par défaut `sub`, un administrateur de référentiel doit utiliser le point de terminaison de l’API REST sur « [Définir le modèle de personnalisation d’une revendication d’objet OIDC pour un référentiel](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository) » avec le corps de la requête suivant :

```json
{
   "use_default": true
}
```

#### Exemple : Configuration d’un référentiel pour utiliser un modèle d’organisation

Un administrateur de référentiel peut configurer son référentiel pour utiliser le modèle créé par l’administrateur de son organisation.

Pour configurer le référentiel afin qu’il utilise le modèle de l’organisation, un administrateur de référentiel doit utiliser le point de terminaison de l’API REST sur « [Définir le modèle de personnalisation d’une revendication d’objet OIDC pour un référentiel](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository) » avec le corps de la requête suivant :

```json
{
   "use_default": false
}
```

{% endif %}

## Mise à jour de vos workflows pour OIDC

Vous pouvez maintenant mettre à jour vos workflows YAML pour utiliser des jetons d’accès OIDC à la place de secrets. Les fournisseurs de cloud populaires ont publié leurs actions de connexion officielles qui vous permettront de bien démarrer avec OIDC. Pour plus d’informations sur la mise à jour de vos workflows, consultez les guides spécifiques au cloud répertoriés ci-dessous dans « [Activation d’OpenID Connect pour votre fournisseur de cloud](#enabling-openid-connect-for-your-cloud-provider) ».


## Activation d’OpenID Connect pour votre fournisseur de cloud

Pour activer et configurer OIDC pour votre fournisseur de cloud spécifique, consultez les guides suivants :

- [« Configuration d’OpenID Connect dans Amazon Web Services »](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)
- [« Configuration d’OpenID Connect dans Azure »](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)
- [« Configuration d’OpenID Connect dans Google Cloud Platform »](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-google-cloud-platform)
- [« Configuration d’OpenID Connect dans HashiCorp Vault »](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-hashicorp-vault)

Pour activer et configurer OIDC pour un autre fournisseur de cloud, consultez le guide suivant :

- [« Configuration d’OpenID Connect dans les fournisseurs de cloud »](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-cloud-providers)
