---
title: Différences entre les applications GitHub et les applications OAuth
intro: 'Comprendre les différences entre les {% data variables.product.prodname_github_apps %} et les {% data variables.product.prodname_oauth_apps %} vous aidera à décider quelle application vous voulez créer. Une {% data variables.product.prodname_oauth_app %} agit comme un utilisateur GitHub, tandis qu’une {% data variables.product.prodname_github_app %} utilise sa propre identité lorsqu’elle est installée sur une organisation ou sur des référentiels au sein d’une organisation.'
redirect_from:
  - /early-access/integrations/integrations-vs-oauth-applications
  - /apps/building-integrations/setting-up-a-new-integration/about-choosing-an-integration-type
  - /apps/differences-between-apps
  - /developers/apps/differences-between-github-apps-and-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
  - OAuth Apps
shortTitle: GitHub Apps & OAuth Apps
ms.openlocfilehash: d70304b71de11a4a24f2acc6c2545e78cbd19b0c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008177'
---
## Qui peut installer des applications GitHub et autoriser des applications OAuth ?

Vous pouvez installer des applications GitHub dans votre compte personnel ou dans des organisations dont vous êtes propriétaire. Si vous disposez d’autorisations d’administrateur dans un dépôt, vous pouvez installer des applications GitHub sur des comptes d’organisation. Si une application GitHub est installée dans un dépôt et nécessite des autorisations de l’organisation, le propriétaire de celle-ci doit approuver l’application.

{% data reusables.apps.app_manager_role %}

Par contre, des utilisateurs autorisent des applications OAuth, ce qui donne à l’application la capacité d’agir en tant qu’utilisateur authentifié. Par exemple, vous pouvez autoriser une application OAuth qui trouve toutes les notifications pour l’utilisateur authentifié. Vous pouvez toujours révoquer des autorisations d’une application OAuth.

{% ifversion limit-app-access-requests %} {% data reusables.organizations.restricted-app-access-requests %}{% endif %}

{% data reusables.apps.deletes_ssh_keys %}

| Applications GitHub | applications OAuth |
| ----- | ------ |
| Pour installer une application GitHub sur une organisation, vous devez être propriétaire d’organisation, ou disposer d’autorisations d’administrateur dans un dépôt. Si une application GitHub est installée dans un dépôt et nécessite des autorisations de l’organisation, le propriétaire de celle-ci doit approuver l’application. | Vous pouvez autoriser une application OAuth à accéder à des ressources. |
| Vous pouvez installer une application GitHub sur votre dépôt personnel. | Vous pouvez autoriser une application OAuth à accéder à des ressources.|
| Pour désinstaller une application GitHub et supprimer l’accès à celle-ci, vous devez être propriétaire d’organisation, propriétaire de dépôt personnel ou disposer d’autorisations d’administrateur dans un dépôt. | Vous pouvez supprimer un jeton d’accès OAuth pour supprimer l’accès. |
| Pour demander l’installation d’une application GitHub, vous devez être propriétaire d’organisation, ou disposer d’autorisations d’administrateur dans un dépôt. | Si une stratégie d’application d’organisation est active, tout membre d’une organisation peut demander d’installer une application OAuth sur une organisation. Un propriétaire de l’organisation doit approuver ou rejeter la demande. |

## À quoi peuvent accéder les applications GitHub et les applications OAuth ?

Des propriétaires de compte peuvent utiliser une {% data variables.product.prodname_github_app %} dans un compte sans octroyer d’accès à un autre. Par exemple, vous pouvez installer un service de build tiers sur l’organisation de votre employeur, mais décider de ne pas accorder à ce service de build l’accès aux dépôts dans votre compte personnel. Une application GitHub reste installée si la personne qui l’a configurée quitte l’organisation.

Une application OAuth _autorisée_ a accès à toutes les ressources accessibles de l’utilisateur ou du propriétaire de l’organisation.

| Applications GitHub | applications OAuth |
| ----- | ------ |
| L’installation d’une application GitHub lui octroie l’accès aux référentiels choisis d’un compte d’utilisateur ou d’organisation. | L’autorisation d’une application OAuth autorise l’accès de l’application aux ressources accessibles de l’utilisateur. Par exemple, les dépôts auxquels elles peuvent accéder. |
| Le jeton d’installation d’une application GitHub perd l’accès aux ressources si un administrateur supprime des dépôts de l’installation. | Un jeton d’accès OAuth perd l’accès aux ressources quand l’utilisateur perd l’accès, par exemple, quand il perd l’accès en écriture à un dépôt. |
| Les jetons d’accès d’installation sont limités aux dépôts spécifiés avec les autorisations choisies par le créateur de l’application. | Un jeton d’accès OAuth est limité par le biais d’étendues. |
| Les applications GitHub peuvent demander un accès séparé à des problèmes et à des demandes de tirage sans accéder au contenu réel du dépôt. | Les applications OAuth doivent demander l’étendue `repo` pour obtenir l’accès à des problèmes, à des demandes de tirage ou à tout ce qui appartient au dépôt. |
| Les applications GitHub ne sont pas soumises aux stratégies d’application de l’organisation. Une application GitHub a uniquement accès aux dépôts auxquels le propriétaire d’une organisation a accordé cet accès. | Si une stratégie d’application d’organisation est active, seul le propriétaire d’une organisation peut autoriser l’installation d’une application OAuth. Si elle est installés, l’application OAuth obtient l’accès à tout ce qui est visible par le jeton que détient le propriétaire de l’organisation au sein de l’organisation approuvée. |
| Une application GitHub reçoit un événement de webhook quand une installation est modifiée ou supprimée. Cela indique au créateur de l’application quand celle-ci a reçu plus ou moins d’accès aux ressources d’une organisation. | Les applications OAuth peuvent perdre l’accès à une organisation ou à un dépôt à tout moment si l’utilisateur octroyant l’accès change celui-ci. L’application OAuth ne vous informe pas quand elle perd l’accès à une ressource. |

## Identification basée sur un jeton

{% note %}

**Remarque :** les applications GitHub peuvent également utiliser un jeton basé sur l’utilisateur. Pour plus d’informations, consultez « [Identification et autorisation des utilisateurs pour les applications GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) ».

{% endnote %}

| Applications GitHub | applications OAuth |
| ----- | ----------- |
| Une application GitHub peut demander un jeton d’accès d’installation en utilisant une clé privée avec un format de jeton web JSON hors bande. | Une application OAuth peut échanger un jeton de demande contre un jeton d’accès après redirection via une demande web. |
| Un jeton d’installation identifie l’application en tant que bot d’applications GitHub, par exemple, @jenkins-bot. | Un jeton d’accès identifie l’application comme étant l’utilisateur qui a accordé le jeton à l’application, par exemple, @octocat. |
| Les jetons d’installation expirent après une période prédéfinie (actuellement 1 heure). | Les jetons OAuth restent actifs jusqu’à ce que le client les révoque. |
| Les {% data variables.product.prodname_github_apps %} installées sur des organisations ou des dépôts sont soumises à des limites de taux pour les demandes de serveur à serveur. Pour plus d’informations, consultez « [Limites de débit des {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/rate-limits-for-github-apps) ». | Les jetons OAuth utilisent la limite de taux de l’utilisateur, de {% ifversion fpt or ghec or ghes %}5 000{% elsif ghae %}15 000{% endif %} demandes par heure. |
| Des augmentations de limite de débit peuvent être accordées au niveau des applications GitHub (ce qui affecte toutes les installations) et au niveau de l’installation individuelle. | Les augmentations de limite de débit sont accordées par application OAuth. Chaque jeton accordé à cette application OAuth obtient la limite accrue. |
| Les {% data variables.product.prodname_github_apps %} peuvent s’authentifier pour le compte de l’utilisateur. On parle alors de demande d’utilisateur à serveur. Le flux d’autorisation est le même que celui d’une application OAuth. Les jetons utilisateur à serveur peuvent expirer et être renouvelés avec un jeton d’actualisation. Pour plus d’informations, consultez « [Actualisation des jetons d’accès d’utilisateur à serveur](/apps/building-github-apps/refreshing-user-to-server-access-tokens/) » et « [Identification et autorisation des utilisateurs pour les applications GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) ». | Le flux OAuth utilisé par les {% data variables.product.prodname_oauth_apps %} autorise une {% data variables.product.prodname_oauth_app %} pour le compte de l’utilisateur. Il s’agit du même flux que celui utilisé dans l’autorisation d’utilisateur à serveur {% data variables.product.prodname_github_app %}. |

## Demande de niveaux d’autorisation pour des ressources

Contrairement aux applications OAuth, les applications GitHub ont des autorisations ciblées qui leur permettent de demander l’accès uniquement à ce dont elles ont besoin. Par exemple, une application d’intégration continue (CI) GitHub peut demander l’accès en lecture au contenu du dépôt, et l’accès en écriture à l’API d’état. Une autre application GitHub peut ne pas avoir d’accès en lecture ou en écriture au code, mais elle a toujours la possibilité de gérer des problèmes, des étiquettes et des jalons. Les applications OAuth ne peuvent pas utiliser des autorisations précises.

| Access | Applications GitHub (autorisations `read`ou `write`) | applications OAuth |
| ------ | ----- | ----------- |
| **Pour accéder aux dépôts publics** | Le dépôt public doit être choisi lors de l’installation. | Étendue `public_repo`. |
| **Pour accéder au code/contenu du dépôt** | Contenu d’un dépôt | Étendue `repo`. |
| **Pour accéder aux problèmes, étiquettes et jalons** | Problèmes | Étendue `repo`. |
| **Pour accéder aux demandes de tirage, étiquettes et jalons** | Demandes de tirage | Étendue `repo`. |
| **Pour accéder aux états de validation (pour les builds CI)** | États de validation | Étendue `repo:status`. |
| **Pour accéder aux déploiements et aux états de déploiement** | Déploiements | Étendue `repo_deployment`. |
| **Pour recevoir des événements via un webhook** | Une application GitHub inclut un webhook par défaut. | Étendue `write:repo_hook` ou `write:org_hook`. |

## Découverte d’un dépôt

| Applications GitHub | applications OAuth |
| ----- | ----------- |
| Les applications GitHub peuvent examiner `/installation/repositories` pour voir les dépôts auxquels l’installation peut accéder. | Les applications OAuth peuvent examiner `/user/repos` pour obtenir une vue utilisateur, ou `/orgs/:org/repos` pour obtenir une vue d’organisation des dépôts accessibles. |
| Les applications GitHub reçoivent des webhooks lors de l’ajout ou de la suppression de dépôts de l’installation. | Les applications OAuth créent des webhooks d’organisation pour les notifications lors de la création d’un dépôt au sein d’une organisation. |

## Webhooks

| Applications GitHub | applications OAuth |
| ----- | ----------- |
| Par défaut, les applications GitHub Apps disposent d’un webhook unique qui reçoit les événements pour la réception desquels elles sont configurées, pour chaque dépôt auquel elles ont accès. | Les applications OAuth demandent l’étendue du webhook afin de créer un webhook de dépôt pour chaque dépôt dont elles ont besoin de recevoir des événements. |
| Les applications GitHub reçoivent certains événements de niveau organisation avec l’autorisation du membre de l’organisation. | Les applications OAuth demandent l’étendue du webhook de l’organisation afin de créer un webhook d’organisation pour chaque organisation dont elles ont besoin de recevoir des événements de niveau organisation. |
| Les webhooks sont automatiquement désactivés lorsque l’application GitHub est désinstallée. | Les webhooks ne sont pas automatiquement désactivés si le jeton d’accès d’une application OAuth est supprimé et qu’il n’existe aucun moyen de les nettoyer automatiquement. Vous devez demander aux utilisateurs de procéder manuellement.|

## Accès à Git

| Applications GitHub | applications OAuth |
| ----- | ----------- |
| Les applications GitHub demandent l’autorisation d’accéder au contenu des dépôts et d’utiliser votre jeton d’installation pour s’authentifier par le biais de [Git basé sur HTTP](/apps/building-github-apps/authenticating-with-github-apps/#http-based-git-access-by-an-installation). | Les applications OAuth demandent l’étendue `write:public_key` et [créent une clé de déploiement](/rest/reference/deployments#create-a-deploy-key) par le biais de l’API. Vous pouvez ensuite utiliser cette clé pour exécuter des commandes Git. |
| Le jeton est utilisé en tant que mot de passe HTTP. | Le jeton est utilisé en tant que nom d’utilisateur HTTP. |

## Comptes de machine et de bot

Les comptes d’utilisateur de machine sont des comptes personnels basés sur OAuth, qui distinguent les systèmes automatisés utilisant le système utilisateur de GitHub.

Les comptes de bot sont spécifiques des applications GitHub, et intégrés à chaque application GitHub.

| Applications GitHub | applications OAuth |
| ----- | ----------- |
| Les bots d’application GitHub ne consomment pas de poste {% data variables.product.prodname_enterprise %}. | Un compte d’utilisateur de machine consomme un poste {% data variables.product.prodname_enterprise %}. |
| Étant donné qu’un bot d’application GitHub ne reçoit jamais de mot de passe, un client ne peut pas s’y connecter directement. | Un compte d’utilisateur de machine reçoit un nom d’utilisateur et un mot de passe que le client doit gérer et sécuriser. |
