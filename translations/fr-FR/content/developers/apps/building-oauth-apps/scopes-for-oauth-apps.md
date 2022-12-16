---
title: Étendues des applications OAuth
intro: '{% data reusables.shortdesc.understanding_scopes_for_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps
  - /apps/building-oauth-apps/scopes-for-oauth-apps
  - /apps/building-oauth-apps/understanding-scopes-for-oauth-apps
  - /developers/apps/scopes-for-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: 8398a7162b3ab77677651d5404c0738c6d0877b1
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164363'
---
Durant la configuration d’une application OAuth sur GitHub, l’utilisateur voit s’afficher les étendues demandées dans le formulaire d’autorisation.

{% note %}

**Remarque :** Si vous créez une application GitHub, vous n’avez pas besoin de fournir d’étendues dans votre demande d’autorisation. Pour plus d’informations, consultez « [Identification et autorisation des utilisateurs pour les applications GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) ».

{% endnote %}

Si votre {% data variables.product.prodname_oauth_app %} n’a pas accès à un navigateur (dans le cas d’un outil CLI, par exemple), vous n’avez pas besoin de spécifier d’étendue pour permettre aux utilisateurs de s’authentifier auprès de votre application. Pour plus d’informations, consultez « [Autorisation des applications OAuth](/developers/apps/authorizing-oauth-apps#device-flow) ».

Vérifiez les en-têtes pour voir vos étendues OAuth et ce qui est accepté par l’action d’API :

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/users/codertocat -I
HTTP/2 200
X-OAuth-Scopes: repo, user
X-Accepted-OAuth-Scopes: user
```

* `X-OAuth-Scopes` liste les étendues autorisées par votre jeton.
* `X-Accepted-OAuth-Scopes` liste les étendues vérifiées par l’action.

## Étendues disponibles

Nom | Description -----|-----------|{% ifversion not ghae %} **`(no scope)`** | Octroie l’accès en lecture seule aux informations publiques (notamment les informations de profil utilisateur, les informations de dépôt et les gists){% endif %}{% ifversion ghes or ghae %} **`site_admin`** | Octroie aux administrateurs de sites l’accès aux [points de terminaison de l’API Administration de {% data variables.product.prodname_ghe_server %}](/rest/reference/enterprise-admin).{% endif %} **`repo`** | Octroie l’accès total aux dépôts publics{% ifversion ghec or ghes or ghae %}, internes{% endif %} et privés, notamment l’accès en lecture/écriture au code, aux états des commits, aux invitations de dépôt, aux collaborateurs, aux états des déploiements et aux webhooks de dépôt. **Remarque** : En plus des ressources associées au dépôt, l’étendue `repo` accorde également l’accès à la gestion des ressources appartenant à l’organisation, notamment les projets, les invitations, les appartenances aux équipes et les webhooks. Cette étendue accorde également la possibilité de gérer des projets appartenant aux utilisateurs.
&emsp;`repo:status`| Octroie l’accès en lecture/écriture aux états de commit dans les dépôts {% ifversion fpt %}publics et privés{% elsif ghec or ghes %}publics, privés et internes{% elsif ghae %}privés et internes{% endif %}. Cette étendue est nécessaire uniquement pour octroyer à d’autres utilisateurs ou services l’accès aux états de commit des dépôts privés *sans* octroyer l’accès au code.
&emsp;`repo_deployment`| Octroie l’accès aux [états de déploiement](/rest/reference/repos#deployments) pour les dépôts {% ifversion not ghae %}publics{% else %}internes{% endif %} et privés. Cette étendue est nécessaire uniquement pour octroyer à d’autres utilisateurs ou services l’accès aux états de déploiement, *sans* octroyer l’accès au code.{% ifversion not ghae %} &emsp;`public_repo`| Limite l’accès aux dépôts publics. Cela inclut l’accès en lecture/écriture au code, les états de commit, les projets de dépôt, les collaborateurs ainsi que les états de déploiement pour les dépôts publics et les organisations. Également nécessaire pour les dépôts publics favoris.{% endif %} &emsp;`repo:invite` | Octroie les capacités d’acceptation/de refus des invitations pour collaborer sur un dépôt. Cette étendue est nécessaire uniquement pour octroyer à d’autres utilisateurs ou services l’accès aux invitations *sans* octroyer l’accès au code.{% ifversion fpt or ghes or ghec %} &emsp;`security_events` | Octroie : <br/> Un accès en lecture et en écriture aux événements de sécurité dans l’[API {% data variables.product.prodname_code_scanning %}](/rest/reference/code-scanning) {%- ifversion ghec %}<br/> Un accès en lecture et en écriture aux événements de sécurité dans l’[API {% data variables.product.prodname_secret_scanning %}](/rest/reference/secret-scanning){%- endif %} <br/> Cette étendue est nécessaire uniquement pour octroyer à d’autres utilisateurs ou services l’accès aux événements de sécurité *sans* octroyer l’accès au code.{% endif %} **`admin:repo_hook`** | Octroie l’accès en lecture, en écriture, en exécution de commande ping et en suppression aux crochets dans les dépôt {% ifversion fpt %}publics ou privés{% elsif ghec or ghes %}publics, privés ou internes{% elsif ghae %}privés ou internes{% endif %}. L’étendue `repo` {% ifversion fpt or ghec or ghes %} et l’étendue `public_repo` octroient{% else %}octroie{% endif %} un accès total aux dépôts, notamment les crochets de dépôt. Utilisez l’étendue `admin:repo_hook` pour limiter l’accès aux crochets de dépôt uniquement.
&emsp;`write:repo_hook` | Octroie l’accès en lecture, en écriture et en exécution de commande ping aux crochets dans les dépôts {% ifversion fpt %}publics ou privés{% elsif ghec or ghes %}publics, privés ou internes{% elsif ghae %}privés ou internes{% endif %}.
&emsp;`read:repo_hook` | Octroie l’accès en lecture et en exécution de commande ping aux crochets dans les dépôts {% ifversion fpt %}publics ou privés{% elsif ghec or ghes %}publics, privés ou internes{% elsif ghae %}privés ou internes{% endif %}.
**`admin:org`** | Permet de gérer complètement l’organisation ainsi que ses équipes, ses projets et ses appartenances.
&emsp;`write:org`| Permet d’accéder en lecture et en écriture à l’appartenance à l’organisation, aux projets d’organisation et à l’appartenance à une équipe.
&emsp;`read:org`| Permet d’accéder en lecture uniquement à l’appartenance à l’organisation, aux projets d’organisation et à l’appartenance à une équipe.
**`admin:public_key`** | Permet de gérer complètement les clés publiques.
&emsp;`write:public_key`| Permet de créer, de lister et de voir les détails des clés publiques.
&emsp;`read:public_key`| Permet de lister et de voir les détails des clés publiques.
**`admin:org_hook`** | Octroie l’accès en lecture, en écriture, en exécution de commande ping et en suppression aux crochets d’organisation. **Remarque :** Les jetons OAuth ne peuvent effectuer ces actions que sur les crochets d’organisation créés par l’application OAuth. Les {% data variables.product.pat_generic_caps %} ne peuvent effectuer ces actions que sur les crochets d’organisation créés par un utilisateur.
**`gist`** | Octroie l’accès en écriture aux Gists.
**`notifications`** | Octroie : <br/>* Un accès en lecture aux notifications d’un utilisateur <br/>* Un accès au marquage des threads comme étant lus <br/>* Un accès à l’activation/la désactivation de la surveillance d’un dépôt <br/>* Un accès en lecture, en écriture et en suppression aux abonnements aux threads.
**`user`** | Octroie l’accès en lecture/écriture aux informations de profil uniquement.  Notez que cette étendue comprend `user:email` et `user:follow`.
&emsp;`read:user`| Octroie l’accès en lecture aux données de profil d’un utilisateur.
&emsp;`user:email`| Octroie l’accès en lecture aux adresses e-mail d’un utilisateur.
&emsp;`user:follow`| Octroie l’accès pour suivre ou ne plus suivre d’autres utilisateurs.{% ifversion projects-oauth-scope %} **`project`** | Octroie l’accès en lecture/écriture aux {% data variables.projects.projects_v2 %} d’utilisateur et d’organisation.
&emsp;`read:project`| Octroie l’accès en lecture seule aux {% data variables.projects.projects_v2 %} d’utilisateur et d’organisation.{% endif %} **`delete_repo`** | Octroie l’accès aux dépôts administrables supprimés.
**`write:discussion`** | Octroie l’accès en lecture et en écriture aux discussions d’équipe.
&emsp;`read:discussion` | Octroie l’accès en lecture aux discussions d’équipe.
**`write:packages`** | Octroie l’accès nécessaire pour charger ou publier un package dans {% data variables.product.prodname_registry %}. Pour plus d’informations, consultez « [Publication d’un package](/github/managing-packages-with-github-packages/publishing-a-package) ».
**`read:packages`** | Octroie l’accès au téléchargement et à l’installation de packages à partir de {% data variables.product.prodname_registry %}. Pour plus d’informations, consultez « [ Installation d’un package](/github/managing-packages-with-github-packages/installing-a-package) ».
**`delete:packages`** | Octroie l’accès à la suppression de packages à partir de {% data variables.product.prodname_registry %}. Pour plus d’informations, consultez « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) ».
**`admin:gpg_key`** | Gérez complètement les clés GPG.
&emsp;`write:gpg_key`| Permet de créer, lister et voir les détails des clés GPG.
&emsp;`read:gpg_key`| Permet de lister et de voir les détails des clés GPG.{% ifversion fpt or ghec %} **`codespace`** | Permet de créer et de gérer des codespaces. Les codespaces peuvent exposer un GITHUB_TOKEN qui peut avoir un ensemble différent d’étendues. Pour plus d’informations, consultez « [Sécurité dans {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces#authentication) ».{% endif %} **`workflow`** | Permet d’ajouter et de mettre à jour les fichiers de workflow {% data variables.product.prodname_actions %}. Les fichiers de workflow peuvent être commités sans cette étendue si le même fichier (avec le même chemin et le même contenu) existe dans une autre branche du même dépôt. Les fichiers de workflow peuvent exposer `GITHUB_TOKEN`, qui peut avoir un ensemble différent d’étendues. Pour plus d’informations, consultez « [Authentification dans un workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token) ».{% ifversion not fpt %} **`admin:enterprise`** | Donne un contrôle total sur le fonctionnement de l’entreprise. Pour plus d’informations, consultez « [Gestion des comptes d’entreprise](/graphql/guides/managing-enterprise-accounts) » dans la documentation de l’API GraphQL.<br><br>Inclut `manage_runners:enterprise`{% ifversion ghec or ghes > 3.3 %}, `manage_billing:enterprise`,{% endif %} et `read:enterprise`. &emsp;`manage_runners:enterprise` | Donne un contrôle total sur les exécuteurs auto-hébergés au sein de l’entreprise. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners) ». {% ifversion ghec or ghes > 3.3 %} &emsp;`manage_billing:enterprise` | Lire et écrire des données de facturation d’entreprise Pour plus d’informations, consultez « [Facturation](/rest/billing) » dans la documentation de l’API REST. {% endif %} &emsp;`read:enterprise` | Lire toutes les données d’un profil d’entreprise. N’inclut pas les données de profil des membres ou des organisations de l’entreprise.{% endif %}{% ifversion read-audit-scope %} **`read:audit_log`** | Lire les données du journal d’audit.{% endif %} {% note %}

**Remarque :** Votre application OAuth peut demander les étendues dans la redirection initiale. Vous pouvez spécifier plusieurs étendues en les séparant par un espace à l’aide de `%20` :

    https://github.com/login/oauth/authorize?
      client_id=...&
      scope=user%20repo_deployment

{% endnote %}

## Étendues demandées et étendues octroyées

L’attribut `scope` liste les étendues attachées au jeton qui ont été octroyées par l’utilisateur. Normalement, ces étendues sont identiques à ce que vous avez demandé.
Toutefois, les utilisateurs peuvent modifier leurs étendues, ce qui permet d’octroyer à votre application moins d’accès que ce que vous avez demandé à l’origine. De plus, les utilisateurs peuvent modifier les étendues des jetons, une fois le flux OAuth effectué.
Vous devez être conscient de cette éventualité, et en tenir compte pour ajuster le comportement de votre application.

Il est important de gérer les cas d’erreur où un utilisateur choisit de vous octroyer un accès inférieur à celui que vous avez demandé à l’origine. Par exemple, les applications peuvent avertir les utilisateurs, ou leur indiquer qu’ils seront confrontés à des fonctionnalités réduites ou qu’ils ne pourront pas effectuer certaines actions.

De plus, les applications peuvent toujours renvoyer les utilisateurs dans le flux pour obtenir des autorisations supplémentaires. Toutefois, n’oubliez pas que les utilisateurs peuvent toujours dire non.

Consultez le [Guide des informations de base sur l’authentification](/guides/basics-of-authentication/), qui fournit des conseils sur la gestion des étendues de jeton modifiables.

## Étendues normalisées

Quand vous demandez plusieurs étendues, le jeton est enregistré avec une liste normalisée d’étendues, en écartant celles qui sont implicitement incluses par une autre étendue demandée. Par exemple, si vous demandez `user,gist,user:email`, vous obtenez un jeton avec les étendues `user` et `gist` uniquement, car l’accès octroyé avec l’étendue `user:email` est inclus dans l’étendue `user`.
