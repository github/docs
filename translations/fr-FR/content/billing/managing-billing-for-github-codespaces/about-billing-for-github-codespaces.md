---
title: À propos de la facturation pour GitHub Codespaces
shortTitle: About billing
intro: 'Découvrez les coûts d’utilisation de {% data variables.product.prodname_github_codespaces %} ainsi que les quotas d’utilisation mensuels inclus avec les comptes personnels {% data variables.product.prodname_dotcom %}.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/about-billing-for-codespaces
  - /github/developing-online-with-codespaces/about-billing-for-codespaces
  - /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
  - /codespaces/codespaces-reference/about-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-github-codespaces.md
ms.openlocfilehash: 24410721878cd77d2528a4d9e8c91633725ce661
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179547'
---
## Tarifs de {% data variables.product.prodname_github_codespaces %}

{% data reusables.codespaces.codespaces-free-for-personal-intro %}

Les frais sont facturés à une organisation ou à une entreprise quand toutes les conditions suivantes sont remplies :

- Le dépôt à partir duquel un codespace est démarré (ou le dépôt parent, dans le cas d’un dépôt dupliqué) appartient à une organisation.
- L’organisation est configurée pour être facturée pour les codespaces créés à partir du dépôt ou des duplications (forks) du dépôt.
- L’utilisateur qui crée le codespace appartient à l’organisation, ou est un collaborateur externe affilié à l’organisation, et l’organisation a choisi de payer pour l’utilisation par cet utilisateur de codespaces appartenant à l’organisation.

Sinon, l’utilisation de {% data variables.product.prodname_github_codespaces %} s’applique au compte personnel de la personne qui a créé le codespace, et soit elle consomme une partie de l’utilisation mensuelle incluse pour son compte personnel, soit son compte est facturé en fonction de son utilisation au-delà de son quota inclus. 

Pour plus d’informations sur la façon de configurer une organisation pour qu’elle soit facturée pour l’utilisation du codespace, consultez « [Activation de {% data variables.product.prodname_github_codespaces %} pour votre organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization) ». Les plans Gratuit, Équipe et Entreprise pour les comptes d’organisation et d’entreprise n’incluent aucune utilisation gratuite de {% data variables.product.prodname_github_codespaces %}. 

### Stockage et heures cœur inclus tous les mois pour les comptes personnels

Le stockage et les heures cœur d’utilisation suivants sont inclus gratuitement pour les comptes personnels :

| Plan de compte | Stockage par mois | Heures cœur par mois |
| ------------ | ----------------- | -------------------- |
| {% data variables.product.prodname_dotcom %} Gratuit pour les comptes personnels | 15 Go/mois | 120 |
| {% data variables.product.prodname_dotcom %} Pro                        | 20 Go/mois | 180 |

{% note %}

**Remarques**:
- L’unité de stockage Go/mois est une mesure basée sur le temps, 1 Go/mois correspondant à 1 Go d’utilisation du stockage pendant un mois entier. L’espace disque utilisé par l’ensemble de vos codespaces et prébuilds est évalué une fois par heure et votre utilisation actuelle en Go/mois est recalculée. Par conséquent, si vous disposez de codespaces et de prébuilds, votre utilisation en Go/mois augmentera tout au long du mois. Par exemple, pour un stockage total de 15 Go qui reste inchangé tout au long de votre période de facturation mensuelle, vous avez utilisé 7,5 Go au milieu du mois et 15 Go à la fin du mois. Pour plus d’informations, consultez « [Facturation de l’utilisation du stockage](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-storage-usage) » ci-dessous.
- Un « cœur-heure » est une mesure utilisée pour l’utilisation du calcul incluse. Pour calculer les heures cœur, multipliez le nombre d’heures pendant lesquelles un codespace a été actif par le multiplicateur dans le tableau des tarifs ci-dessous. Pour les types de machines de base, le multiplicateur est le nombre de cœurs de processeur dans la machine qui héberge le codespace. Par exemple, si vous utilisez une machine à 2 cœurs pour votre codespace et qu’il est actif pendant une heure, vous avez utilisé 2 heures cœur. Si vous utilisez une machine à 8 cœurs pendant une heure, vous avez utilisé 8 heures cœur. Si vous utilisez une machine à 8 cœurs pendant deux heures, vous avez utilisé 16 heures cœur.

{% endnote %}

Vous êtes averti par e-mail quand vous avez utilisé 75 %, 90 % et 100 % de vos quotas inclus. Les notifications sont également affichées dans un message « toast » dans {% data variables.product.prodname_vscode_shortname %} et le client web {% data variables.product.prodname_vscode_shortname %}. Vous pouvez désactiver les notifications par e-mail si nécessaire. Pour plus d’informations, consultez « [Gestion de la limite de dépense pour GitHub Codespaces](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-usage-and-spending-limit-email-notifications) ».

Quand un compte personnel a consommé toute l’utilisation du stockage ou du calcul inclus (selon celle atteinte en premier) et qu’aucune limite de dépense n’est configurée, l’utilisation de {% data variables.product.prodname_github_codespaces %} est bloquée. Vous devez configurer un mode de paiement et une limite de dépense pour continuer à utiliser {% data variables.product.prodname_github_codespaces %} pendant le mois de facturation en cours. Au début du cycle de facturation mensuel suivant, l’utilisation incluse est réinitialisée. Le stockage n’est pas facturé tant que l’utilisation de {% data variables.product.prodname_github_codespaces %} est bloquée. 

Vous pouvez afficher les détails de votre utilisation pour le mois en cours à tout moment. Pour plus d’informations, consultez « [Consultation de votre utilisation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage) ».

Si vous ne pouvez pas reprendre un codespace et que vous souhaitez continuer à travailler sur les modifications que vous y avez apportées, vous pouvez effectuer l’une des opérations suivantes :

- Ajoutez un mode de paiement et une limite de dépense supérieure à 0 USD.
- Exportez les modifications du codespace vers une branche. Pour plus d’informations, consultez « [Exportation des modifications vers une branche](/codespaces/troubleshooting/exporting-changes-to-a-branch) ».
- Attendez que votre utilisation mensuelle incluse soit réinitialisée au début du cycle de facturation mensuel suivant. 

Si vous avez utilisé l’ensemble de votre utilisation du stockage ou du calcul incluse et que vous avez configuré un mode de paiement et une limite de dépense, toute autre utilisation de codespaces appartenant à votre compte personnel entraîne des frais pour le type d’utilisation qui n’a pas de quota inclus restant. Vous n’êtes pas facturé pour l’autre type d’utilisation tant que vous n’avez pas également utilisé l’ensemble de son quota inclus.

### Tarifs de l’utilisation payante

Une instance {% data variables.product.prodname_github_codespaces %} (un « codespace ») entraîne des frais pour le temps de calcul, pendant qu’elle est active, et pour la quantité d’espace disque occupé par le codespace, tant qu’il existe. Le coût de calcul est proportionnel au nombre de cœurs de processeur dans le type de machine que vous choisissez pour votre codespace, comme indiqué dans le tableau ci-dessous. Par exemple, le coût de calcul de l’utilisation d’un codespace pendant une heure sur une machine à 16 cœurs est huit fois supérieur à celui d’une machine à 2 cœurs.

| Composant           | Type de machine | Unité de mesure | Multiplicateur d’utilisation incluse | Price |
| ------------------- | ------------ | --------------- | ------------------------- | ----- |
| Calcul Codespaces  |  2 cœurs      | 1 heure          | 2                         | 0,18 $ |
|                     |  4 cœurs      | 1 heure          | 4                         | 0,36 $ |
|                     |  8 cœurs      | 1 heure          | 8                         | 0,72 $ |
|                     |  16 cœurs     | 1 heure          | 16                        | 1,44 $ |
|                     |  32 cœurs     | 1 heure          | 32                        | 2,88 $ |
| Stockage Codespaces  |  Stockage     | 1 Go-mois<sup>*</sup> | N/A                | 0,07 USD |

<sup>*</sup> Consultez « [Facturation de l’utilisation du stockage](#billing-for-storage-usage) » ci-dessous pour plus d’informations sur l’unité de mesure Go-mois.

Si vous activez la création préalable des espaces de code, cela entraîne des frais supplémentaires. Pour plus d’informations, consultez « [Facturation des prébuilds {% data variables.product.prodname_codespaces %}](#billing-for-codespaces-prebuilds) ».

## À propos de la facturation de {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} est facturé en dollars américains (USD) en fonction du temps de calcul et de l’espace de stockage utilisés par vos codespaces. {% data reusables.codespaces.codespaces-monthly-billing %}

La facturation de {% data variables.product.prodname_github_codespaces %} partage le mode de paiement et le reçu existants de votre compte. Pour plus d’informations, consultez « [Affichage de vos abonnements et date de facturation](/articles/viewing-your-subscriptions-and-billing-date) ».

{% ifversion ghec %} Si vous avez acheté {% data variables.product.prodname_enterprise %} par le biais d’un Contrat Entreprise Microsoft, vous pouvez connecter votre ID d’abonnement Azure à votre compte d’entreprise pour activer l’utilisation de {% data variables.product.prodname_github_codespaces %} et la payer. Pour plus d’informations, consultez « [Connexion d’un abonnement Azure à votre entreprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise) ».
{% endif %}

### Facturation de l’utilisation du calcul
L’utilisation du calcul d’un codespace est la durée pendant laquelle ce codespace est actif, multipliée par le multiplicateur dans le tableau des tarifs pour le type de machine du codespace. L’utilisation totale du calcul est calculée en additionnant le temps utilisé par tous les codespaces facturables à un compte particulier. Ces totaux sont signalés toutes les heures au service de facturation et facturés mensuellement.

Par exemple, si un codespace est actif pendant 1 heure et 15 minutes, le coût de calcul correspond au coût horaire du codespace, tel que déterminé par son type de machine, multiplié par 1,25.

Vous pouvez contrôler l’utilisation du calcul en arrêtant vos codespaces. Pour plus d’informations, consultez « [Arrêt et démarrage d’un codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace) ». Les codespaces sont arrêtés automatiquement après une période d’inactivité configurable. Le délai d’expiration peut être configuré par l’utilisateur ou au niveau de l’organisation. Pour plus d’informations, consultez « [Définition de votre délai d’expiration pour {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces) » et « [Restriction de la période du délai d’inactivité](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period) ».

### Facturation de l’utilisation du stockage
Pour la facturation de {% data variables.product.prodname_github_codespaces %}, le stockage comprend l’espace disque utilisé par tous les codespaces et prébuilds dans votre compte. Cela inclut tous les fichiers que vous utilisez dans un codespace, tels que les dépôts clonés, les fichiers de configuration, les données chargées dans le codespace (par exemple, en tant qu’entrée ou sortie des logiciels s’exécutant dans le dépôt) et les extensions, entre autres. Le stockage est facturé pour tous vos codespaces existants, qu’ils soient actifs ou inactifs, sauf si l’utilisation est bloquée en raison de l’épuisement du quota d’utilisation inclus ou de l’atteinte de votre limite de dépense. La facturation du stockage d’un codespace se termine quand celui-ci est supprimé.

{% note %}

**Remarques**: 

- Quand vous utilisez la configuration de conteneur de développement par défaut (consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration) »), nous ne comptabilisons pas le conteneur par défaut comme stockage utilisé. Quand vous créez un conteneur personnalisé au moyen d’une configuration de conteneur de développement avec une image de base différente, nous comptabilisons le conteneur comme stockage utilisé.
- Quand vous régénérez votre conteneur à partir de l’image par défaut, nous ne comptabilisons pas le conteneur de base comme stockage utilisé. Pour les autres images de base, tout le stockage consommé par le codespace, y compris le conteneur de base, est compté comme stockage utilisé.

{% endnote %}

Le stockage de codespace est signalé en Go-mois. Votre mois de facturation court d’un jour fixe dans un mois donné jusqu’au même jour du mois suivant. Dans la plupart des cas, le jour du mois est déterminé par le jour où vous avez démarré dans votre plan {% data variables.product.prodname_dotcom %} actuel. Votre stockage en Go-mois est calculé comme suit. Une fois toutes les heures, le stockage utilisé par tous vos codespaces actifs et arrêtés est évalué. Ce chiffre est ensuite divisé par le nombre d’heures dans le mois de facturation actuel : `total storage size / hours this month`. Le résultat est ajouté au total cumulé pour le stockage de codespace pour le mois.

Par exemple, si vous disposez d’un codespace qui utilise 100 Go de stockage et qui a existé pendant une heure, vous aurez utilisé `100 / (24 * 30) = 0.1388` Go-mois de stockage dans un mois de 30 jours. Si votre utilisation de {% data variables.product.prodname_github_codespaces %} au cours d’un mois de 30 jours se compose de deux codespaces de 100 Go qui ont tous deux existé pendant trois jours complets, il y aura `24 * 3` rapports horaires pour le stockage de ces codespaces, représentant un total de `(24 * 3) * 200 / (24 * 30) = 20` Go-mois.

Pour chaque rapport horaire, l’utilisation du stockage pour l’heure précédente est calculée en secondes. Ainsi, vous n’êtes pas facturé pour une heure complète de stockage si un codespace n’existait pas pendant les 60 minutes complètes. À la fin du mois, {% data variables.product.prodname_dotcom %} arrondit votre stockage au Mo le plus proche.

Les propriétaires de l’organisation peuvent :
- Lister les codespaces actifs et arrêtés de votre organisation. Pour plus d’informations, consultez « [Lister les codespaces dans votre organisation](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization) ». En plus du coût de ces codespaces, le coût de {% data variables.product.prodname_github_codespaces %} pour le mois en cours peut inclure les coûts des codespaces qui existaient précédemment dans le mois en cours, mais qui ont été supprimés depuis. 
- Consultez l’utilisation totale de calcul et de stockage {% data variables.product.prodname_github_codespaces %} pour votre organisation pour le mois en cours à ce jour. Pour plus d’informations, consultez « [Consultation de votre utilisation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage) ».
- Configurez les paramètres de votre organisation pour gérer le coût de {% data variables.product.prodname_github_codespaces %}. Pour plus d’informations, consultez « [Gestion du coût de {% data variables.product.prodname_github_codespaces %} dans votre organisation](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization) ».

Pour estimer les coûts des services mesurés, vous pouvez utiliser la [calculatrice de prix](https://github.com/pricing/calculator?feature=codespaces) {% data variables.product.prodname_dotcom %}.

### Facturation des prébuilds {% data variables.product.prodname_codespaces %} prebuilds

{% data reusables.codespaces.prebuilds-definition %} Pour plus d’informations, consultez « [À propos des prébuilds de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds) ».

#### Coûts {% data variables.product.prodname_actions %} pour les prébuilds

Les prébuilds sont créées et mises à jour en exécutant un workflow {% data variables.product.prodname_actions %} sur un exécuteur hébergé par {% data variables.product.prodname_dotcom %}. Vous pouvez configurer la façon dont vous souhaitez que les mises à jour de prébuild soient déclenchées automatiquement. Pour plus d’informations, consultez « [Configuration de prébuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild) ».

Comme d’autres workflows, les workflows de prébuild consomment des minutes {% data variables.product.prodname_actions %} incluses dans votre compte (le cas échéant) ou entraînent des frais pour les minutes {% data variables.product.prodname_actions %} quand ils sont en cours d’exécution. Pour plus d’informations sur les tarifs des minutes {% data variables.product.prodname_actions %}, consultez « [À propos de la facturation de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) ». Aucun coût de calcul {% data variables.product.prodname_codespaces %} n’est associé pour la création ou la mise à jour des prébuilds.

Vous pouvez suivre l’utilisation des workflows et du stockage de prébuild en téléchargeant un rapport d’utilisation pour votre compte. Pour plus d’informations, consultez « [Consultation de votre utilisation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage) ».

#### Coûts de stockage pour les prébuilds

En plus des minutes {% data variables.product.prodname_actions %}, vous êtes également facturé pour le stockage de prébuild associé à chaque configuration de prébuild, pour un dépôt et une région donnés. Le stockage des prébuilds est facturé au même taux que le stockage des espaces de code.

Le coût de stockage d’une prébuild dans une région spécifique est similaire au coût de stockage appliqué pour le stockage d’un codespace spécifique créé à partir de cette prébuild. Le coût de stockage du codespace généré peut être supérieur au coût de la prébuild si, par exemple, les commandes `updateContentCommand` et `postCreateCommand` sont utilisées lors de la création du codespace pour télécharger d’autres fichiers dans le conteneur de développement.

Les coûts de stockage totaux associés à une configuration de prébuild dépendent des facteurs suivants.

- Prix du stockage par Go. Consultez le tableau ci-dessus.
- Taille de la prébuild générée en Go.
- Nombre de régions dans lesquelles la prébuild est disponible (car une copie de la prébuild est stockée dans chaque région).
- Nombre d’anciennes versions de la prébuild qui sont conservées.

Le coût de stockage des prébuilds générées par une configuration de prébuild est donc calculé comme suit : `price per GB * size (GB) * regions * versions`.

#### Contrôle du coût des prébuilds

Pour réduire la consommation des minutes Actions, vous pouvez définir une prébuild de sorte qu’elle ne se mette à jour que lorsque vous apportez une modification aux fichiers de configuration de votre conteneur de développement, ou bien selon une planification personnalisée. Vous pouvez également gérer votre utilisation du stockage en ajustant le nombre de versions précédentes de chaque prébuild qui sont conservées. Pour plus d’informations, consultez « [Configuration des prébuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds) ».

Pour limiter les coûts de stockage associés aux prébuilds, vous pouvez choisir de créer des prébuilds uniquement dans certaines régions et vous pouvez spécifier le nombre d’anciennes versions de prébuilds à conserver. Pour plus d’informations, consultez « [Configuration des prébuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds) ».

{% note %}

**Remarque** : Les prébuilds peuvent être mises à jour plusieurs fois au cours d’un mois de facturation. Les versions plus récentes d’une prébuild peuvent être plus grandes ou plus petites que les versions précédentes. Cela affecte les frais de stockage. Pour plus d’informations sur la façon dont le stockage est calculé pendant un mois de facturation, consultez « [Facturation de l’utilisation du stockage](#billing-for-storage-usage) » ci-dessus.

{% endnote %}

#### Coût des codespaces créés à partir de prébuilds

L’utilisation de codespaces créés à l’aide de pré-builds est facturée au même taux que celle de codespaces standard.

## Définition d’une limite de dépense

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Pour plus d’informations sur la gestion et le changement de la limite de dépense de votre compte, consultez « [Gestion de votre limite de dépense pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces) ».

{% data reusables.codespaces.exporting-changes %}

## Limitation des types de machines pour les codespaces appartenant à l’organisation

Par défaut, le type de machine avec les ressources valides les plus faibles est utilisé quand un espace de code est créé. Toutefois, les utilisateurs peuvent être en mesure de choisir un type de machine avec plus de ressources. Ils peuvent le faire lorsqu’ils créent un espace de code, ou ils peuvent modifier le type de machine d’un espace de code existant. Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository) » et « [Changement du type de machine pour votre codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace) ».

Si un type de machine qui n’a plus de ressources est choisi, cela affecte les frais par heure pour ce codespace, comme indiqué ci-dessus. 

Les propriétaires d’organisation peuvent créer une stratégie afin de limiter le choix des types de machine à la disposition des utilisateurs pour les codespaces facturés à un compte d’organisation ou d’entreprise. Pour plus d’informations, consultez « [Restriction de l’accès à des types de machine](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) ».

## Gestion de la facturation pour les dépôts dupliqués (fork)

L’utilisation de codespaces créés à partir d’un dépôt dupliqué est facturée à votre compte personnel, sauf si le dépôt en amont (ou parent) se trouve dans une organisation qui vous a autorisé, en tant que membre ou collaborateur externe de l’organisation, à utiliser des codespaces aux frais de l’organisation.

Prenons l’exemple d’un membre ou d’un collaborateur externe d’une organisation qui a autorisé la facturation de codespaces pour cet utilisateur. Si l’utilisateur est autorisé à dupliquer un dépôt privé appartenant à l’organisation, il peut créer et utiliser un codespace pour le nouveau dépôt aux frais de l’organisation. En effet, l’organisation est propriétaire du dépôt parent. Notez que le propriétaire de l’organisation peut supprimer l’accès de l’utilisateur au dépôt privé, au dépôt dupliqué et, donc, au codespace. Le propriétaire de l’organisation peut également supprimer le dépôt parent, ce qui entraîne la suppression du dépôt dupliqué. Pour plus d’informations, consultez « [Gestion de la stratégie de duplication pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository) ».

{% data reusables.codespaces.codespaces-disabling-org-billing %}

## Gestion de la facturation lors du transfert d’un dépôt vers une autre organisation

L’utilisation est calculée toutes les heures. Une organisation paie l’utilisation des codespaces créés à partir de n’importe quel dépôt lui appartenant, dans la mesure où les paramètres de l’organisation permettent de facturer celle-ci. Pour plus d'informations, consultez « [Activation de {% data variables.product.prodname_github_codespaces %} pour votre organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization) ». Quand un dépôt est transféré hors de votre organisation, la propriété et la responsabilité de la facturation pour tous les codespaces associés à ce dépôt changent en conséquence.

## Que se passe-t-il quand des utilisateurs sont supprimés ?

Si un utilisateur est supprimé d’une organisation ou d’un dépôt, ses codespaces sont automatiquement supprimés. 
